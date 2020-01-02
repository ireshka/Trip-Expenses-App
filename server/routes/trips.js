const express = require('express');
const router = express.Router();
const dbDebug = require('debug')('app:db');
const { Trip, validateTrip, validateExpense } = require('../models/trip');
const { User, validateUser} = require('../models/user');

//Add trip

// Currently the trip is added to same hardcoded user! To be changed after authentication is done!!

router.post('/add', (req, res) => {
  const { error, value } = validateTrip(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message)
  } else {
    const trip = new Trip(value);
    trip.save()
      .then(async(trip) => {     
        // After authentication is done change the line below
        await User.findByIdAndUpdate('5e09e6344d3be0524e67993c', {$push: {trips: trip._id}});
      })
      .then(() => res.json('Trip added!'))
      .catch((error => res.status(400).json('Error: ' + error)))  
  }
});

// Delete trip
router.delete('/:id', (req, res) => {
  Trip.findByIdAndRemove(req.params.id)
    .then(() => res.json("Trip was sucessfully deleted."))
    .catch(() => res.status(404).send('The trip with the given ID was not found'))
});

// edit trip information
router.put('/edit/:id', (req, res) => {
  const { error } = validateTrip(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message)
  } else {
    Trip.findById(req.params.id)
      .then(trip => {
        trip.set({
          name: req.body.name,
          description: req.body.description,
          startDate: req.body.startDate,
          isTripFinished: req.body.isTripFinished
        });
        trip.save()
          .then(() => res.json('Trip modified!'))
          .catch(error => res.status(400).json(error))
      })
      .catch(() => res.status(404).send('The trip with the given ID was not found'))
  }
});


// Expense routing
// Add expense to the trip
// - :id - trip id
router.post('/:id/expenses', async (req, res) => {
  try {
    const tripFromDatabase = await Trip.findById(req.params.id);
    const { categories : tripCategories }  = tripFromDatabase;
    const { error, value } = validateExpense(req.body, tripCategories);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    tripFromDatabase.expenses.push(value);
    const changedTrip = await tripFromDatabase.save();
    return res.status(200).send(changedTrip);
  } catch (error) {
    dbDebug('Sth wrong in posting new expense:');
    dbDebug(error);
    return res.status(400).send(error);
  }
});

// Display all expenses in the trip
// - :id - trip id
router.get('/:id/expenses', async (req, res) => {
  try {
    const tripFromDatabase = await Trip.findById(req.params.id);
    const expenses = tripFromDatabase.expenses;
    const expensesObject = {
      "expenses": expenses,
    }
    res.status(200).json(expensesObject);
  } catch (error) {
    dbDebug('Sth wrong during getting all expenses:');
    dbDebug(error);
    return res.status(400).send(error);
  }
});

// Display chosen expense
// - tripId - id of the trip
// - expenseId - id of the expense
router.get('/:tripId/expenses/:expenseId', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);
    const expense = trip.expenses.id(req.params.expenseId);
    const expenseObject = {
      "expense": expense,
    }
    res.status(200).json(expenseObject);
  } catch (error) {
    dbDebug('Sth wrong during getting chosen expense:');
    dbDebug(error);
    return res.status(400).send(error);
  }
});

// Modify chosen expense
// - tripId: id of the trip
// - expenseId: id of the expense
router.put('/:tripId/expenses/:expenseId', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);
    const { categories : tripCategories}  = trip;
    const { error, value } = validateExpense(req.body, tripCategories);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const edited = await Trip.updateOne({
      _id: req.params.tripId,
      "expenses._id": req.params.expenseId
    },
    {
      "$set": {
        "expenses.$.cost": value.cost,
        "expenses.$.name": value.name,
        "expenses.$.category": value.category,
        "expenses.$.currency": value.currency
      }
    });
    await trip.save();
    const changedTrip = await Trip.findById(req.params.tripId);
    const changedExpense = changedTrip.expenses.id(req.params.expenseId);
    res.status(200).json({
      "message": "Expense edited correctly",
      "data": changedExpense
    });
  } catch (error) {
    console.dir(error);
    return res.status(400).send(error);
  }
});

// Delete chosen expense
// - tripId: id of the trip
// - expenseId: id of the expense
router.delete('/:tripId/expenses/:expenseId', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);
    const deletedExpense = trip.expenses.id(req.params.expenseId).remove();
    await whatDelete.save();
    return res.status(200).send(
      {
        "message": "I deleted expense",
        "data": deletedExpense
      });

  } catch (error) {
    console.dir(error);
    return res.status(400).send(error);
  }
});

module.exports = router;
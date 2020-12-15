import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RootProvider from '../../providers/RootProvider';
import CurrenciesRates from '../../views/CurrenciesRates/CurrenciesRates.component';
import ExpenseAdd from '../../views/ExpenseAdd/ExpenseAdd.component';
import ExpenseEdit from '../../views/ExpenseEdit/ExpenseEdit.component';
import ExpensesAll from '../../views/ExpensesAll/ExpensesAll.component';
import HomePage from '../../views/HomePage/HomePage.component';
import RegisterUser from '../../views/RegisterUser/RegisterUser.component';
import SignIn from '../../views/SignIn/SignIn.component';
import TripAdd from '../../views/TripAdd/TripAdd.component';
import TripEdit from '../../views/TripEdit/TripEdit.component';
import TripsAll from '../../views/TripsAll/TripsAll.component';
import TripSingle from '../../views/TripSingle/TripSingle.component';
import TripSummary from '../../views/TripSummary/TripSummary.component';
import UserProfile from '../../views/UserProfile/UserProfile.component';
import PrivateRoute from '../PrivateRoute/PrivateRoute.component';

class App extends React.Component {
  render() {
    return (
      <Router>
        <RootProvider>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/trips/add" component={TripAdd} />
          <PrivateRoute path="/trips/edit/:id" component={TripEdit} />
          <Route path="/users/login" component={SignIn} />
          <Route path="/users/register" component={RegisterUser} />
          <PrivateRoute path="/trips/single/:tripId" component={TripSingle} />
          <PrivateRoute path="/trips/summary/:id" component={TripSummary} />
          <PrivateRoute path="/trips/all" component={TripsAll} />
          <PrivateRoute path="/trips/:tripId/expenses/edit/:expenseId" component={ExpenseEdit} />
          <PrivateRoute path="/trips/:tripId/expenses/add" component={ExpenseAdd} />
          <PrivateRoute path="/trips/:tripId/expenses/all" component={ExpensesAll} />
          <PrivateRoute path="/users/profile" component={UserProfile} />
          <PrivateRoute path="/trips/currencies/:tripId" component={CurrenciesRates} />
        </RootProvider>
      </Router>
    );
  }
}

export default App;

module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --config .prettierrc --write', 'git add'],
  '*.{html, json}': ['prettier --config .prettierrc --write', 'git add'],
};

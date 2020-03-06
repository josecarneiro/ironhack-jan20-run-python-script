// You can experiment with this by running this node script with `node index.js`

const runPythonScript = require('./run-python-script');

// Somewhere within a express route handler

runPythonScript('./program.py')
  .then(result => {
    // Do something with result
    console.log('Result printed by Python script before exiting:');
    console.log(result);
  })
  .catch(error => {
    // Do something with error
    console.error(error);
  });

const childProcess = require('child_process');

const runPythonScript = (path, args = []) =>
  new Promise((resolve, reject) => {
    const proc = childProcess.spawn('python', [path, ...args]);
    let data = '';
    proc.stdout.on('data', value => (data += value));
    proc.stderr.on('data', error => reject(error.toString()));
    proc.on('exit', () => resolve(data));
  });

module.exports = runPythonScript;

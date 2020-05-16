/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const prompt = require('prompt');
const chalk = require('chalk');
const { exec } = require('child_process');
// package.json
const packageJson = require('../package.json');

const question = chalk.white(`${chalk.yellow('select the type of change')}
1. major release
2. feature/enhancement/improvement
3. bug fix/minor changes
4. refractor/other changes/skip version update
`);

const getUpdatedVersion = type => {
  const updatedVersion = packageJson.version;
  const parts = updatedVersion.split('.');
  switch (type) {
    case 1: {
      return `${Number(parts[0]) + 1}.${parts[1]}.${parts[2]}`;
    }
    case 2: {
      return `${parts[0]}.${Number(parts[1]) + 1}.${parts[2]}`;
    }
    case 3: {
      return `${parts[0]}.${parts[1]}.${Number(parts[2]) + 1}`;
    }
    case 4: {
      return updatedVersion;
    }
    default:
      return updatedVersion;
  }
};

const updateVersion = version => {
  packageJson.version = version;
  fs.writeFile('./package.json', JSON.stringify(packageJson), err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      exec(
        `./node_modules/.bin/prettier --loglevel=silent --write package.json`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return 0;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return 0;
          }
          console.log(chalk.green('version updated'));
          return 1;
        }
      );
    }
  });
};

const schema = {
  properties: {
    type: {
      type: 'number',
      description: question,
      message: chalk.red(
        'Type should be of a number without spaces or extra characters'
      ),
      required: true,
      conform: type => {
        const updatedVersion = getUpdatedVersion(type);
        if (type === 1 || type === 2 || type === 3 || type === 4) {
          console.log(
            chalk.blue(
              `The current version is ${packageJson.version} and the updated version is ${updatedVersion}`
            )
          );
        }
        return type === 1 || type === 2 || type === 3 || type === 4;
      }
    },
    proceed: {
      type: 'string',
      description: chalk.yellow(`Okay to proceed? (y/n)`),
      message: chalk.red('Enter either y or n'),
      required: true,
      conform: proceed => {
        return proceed === 'y' || proceed === 'n';
      }
    }
  }
};

prompt.get(schema, (err, result) => {
  if (err) {
    return 0;
  }
  if (result.proceed === 'y') {
    const updatedVersion = getUpdatedVersion(result.type);
    if (updatedVersion === packageJson.version) {
      console.log(chalk.green('skipping version update'));
      return 1;
    }
    updateVersion(updatedVersion);
    return 1;
  }
  if (result.proceed === 'n') {
    console.log(chalk.red('exiting prompt'));
    return 0;
  }
  return 0;
});

prompt.start();

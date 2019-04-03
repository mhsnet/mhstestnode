import * as mod from './modules/mod';

function taskClassesA(cb) {
  cb();
};

function taskDefault(cb) {
  console.log('Test Examples');
  cb();
};

export { taskDefault as default, taskClassesA };

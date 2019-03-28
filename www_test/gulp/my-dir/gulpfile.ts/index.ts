import { parallel, watch } from 'gulp';

function taskA(cb) {
  console.log('Hello Task A');
  cb();
};

function taskB(cb) {
  console.log('Hello Task B');
  cb();
};

const test = parallel(taskA, taskB);

watch(['src/input/*.ts'], function(cb) {
  console.log('wc');
  cb();
});

export { taskA as default, test };

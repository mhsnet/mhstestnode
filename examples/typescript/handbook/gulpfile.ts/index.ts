import * as classesC from './modules/classes';

function taskClasses(cb) {
  let user1 = new classesC.User("U1");
  console.log(user1.getName());
  let admin1 = new classesC.Admin("A1");
  admin1.setName("A2");
  console.log(admin1.getName());
  let super1 = new classesC.Super("S1");
  super1.setName("S2");
  console.log(super1.getName());
  cb();
};
function taskClassesB(cb) {
  interface peopleI {
    name: string;
  }
  abstract class peopleA implements peopleI {
    private static tests: { [key: string]: peopleI; } = {};
    public name: string;
  }

  class TestB extends TestA {
  }
  console.log(TestA.tests)

  cb();
};

function taskDefault(cb) {
  console.log('Test Examples');
  cb();
};

export { taskDefault as default, taskClasses, taskClassesB };

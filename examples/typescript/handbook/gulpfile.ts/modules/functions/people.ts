import * as peopleI from '../interfaces/people';

let peopleNew: peopleI.PeopleNew;
peopleNew = function (ctor: peopleI.PeopleConstructor, name: string) {
  return new ctor(name);
}

export { peopleNew }
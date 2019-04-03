import { PeopleI } from '../interfaces/people';

class People implements PeopleI {
  constructor(public name: string) { }
  getName() {
    return this.name;
  }
}

export { People }
namespace People {
  export interface PeopleI {
    name: string;
  }
  export abstract class PeopleA implements PeopleI {
    static cs: string = 'hello';
    private static ids: Array<string> = [];
    private static peoples: { [key: string]: PeopleI; } = {};
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
}

class User extends People.PeopleA {
  name: this.cs;
}

export { PeopleI, User };
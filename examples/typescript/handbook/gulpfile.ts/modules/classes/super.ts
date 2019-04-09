import User from './user';

class Super extends User {
  constructor(name: string) {
    super(name);
  }
  getName() {
    return super.getName();
  }
  setName(name: string) {
    this.name = name;
  }
}

export default Super;
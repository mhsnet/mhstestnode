import User from './user';

class Admin extends User {
  setName(name: string) {
    this.name = name;
  }
}

export default Admin;
// 类
// public --- 创建同名成员变量
class Student {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }
}

// 接口
interface Person {
  name: string;
}

// 注解
function hello(person: Person) {
  return `Hello ${person.name}!`;
}

let user = new Student('stdN1', 13);

document.body.innerHTML = hello(user);
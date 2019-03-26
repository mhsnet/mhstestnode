// 类
// public --- 创建同名成员变量
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.age = age;
        this.name = name;
    }
    return Student;
}());
// 注解
function hello(person) {
    return "Hello " + person.name + "!";
}
var user = new Student('stdN1', 13);
document.body.innerHTML = hello(user);

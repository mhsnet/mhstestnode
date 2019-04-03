// 类型接口 --- 实例部分
interface PeopleI {
  name: string;
  getName(): string;
}
// 类型接口 --- 静态部分
interface PeopleConstructor {
  new(name: string): PeopleI;
}
// 类型接口 --- 函数封装类实例化
interface PeopleNew {
  (ctor: PeopleConstructor, name: string): PeopleI;
}

export { PeopleI, PeopleConstructor, PeopleNew }
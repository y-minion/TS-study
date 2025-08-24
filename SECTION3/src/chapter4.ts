type Dog = {
  name: string;
  color: string;
  smell: string;
  price: number;
};

type Person = {
  name: string;
  language: string;
  height: number;
  weight: number;
};

type Union1 = Dog | Person;

/*
let union1: Union1 = {
  // 유니온 타입일때 반드시 초기화 하려는 객체의 속성은 유니온 타입의 타입중에 하나의 타입을 온전히 만족시켜야 한다. 즉 Dog타입 또는 Person타입을 만족 해야하지만 해당 객체는 만족 시키지 못했다.
  name: "",
  color: "",
  height: 12,
  weight: 12,
};

*/

let union2: Union1 = {
  // ✅ 해당 객체는 먼저 Person타입을 만족시킨 후에 추가 속성이 Dog타입에 존재해서 통과한다.
  name: "",
  language: "",
  height: 12,
  weight: 123,
  smell: "",
};

let union3: Union1 = {
  // ✅ 해당 객체는 먼저 Dog타입을 만족시킨 후에 추가 속성이 Person타입에 존재해서 통과한다.
  name: "",
  color: "",
  smell: "",
  price: 123,
  language: "",
};

type Dog2 = {
  name: string;
  color: string;
  price: number;
};

type Person2 = {
  name: string;
  language: string;
  weight: number;
};

type Intersection = Dog2 & Person2;

//intersection타입은 합집합타입을 구성하는 모든 타입을 만족해야한다.
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
  price: 123,
  weight: 123,
};

//keyof 연산자
//keyof 연산자는 객체 타입으로부터 프로퍼티의 모든 key들을 스트링 리터럴 유니온 타입으로 추출하는 연산자다.

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}

const person: Person = {
  name: "milo",
  age: 27,
};
// 위의 방식대로 객체의 속성의 타입을 하나하나 열거하면 속성의 타입이 많아지거나 추후에 변경될때 수정해줘야하는 문제가 발생한다.
// 그래서 타겟 속성의 키들을 정렬하는 keyof 연산자를 사용한다.

function getPropertyKey2(person: Person, key: keyof Person) {
  return person[key];
}
//단 이때 keyof연산자는 오직 타입에만 적용할 수있는 연산자이다.
/*
 * keyof person -> 이렇게 변수에 사용하면 안된다.
 * 하지만 이때 typeof 를 통해 변수의 타입을 추론시켜서 사용할 수 있다
 * keyof typeof person -> 이렇게 사용하면 person변수의 타입을 추론한 뒤, 추론된 타입의 속성들을 유니온 타입으로 열거 한다
 */

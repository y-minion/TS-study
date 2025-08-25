//함수 타입 표현식_ 다음과 같이 타입 별칭을 사용해서 함수의 타입을 별도로 정의할 수 있다.
// 이때 타입 표현은 화살표 함수과 같이 정의한다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;

//꼭 타입 별칭을 사용하지 않고 함수타입 표현식 자체를 타입 주석에 사용해도 된다.
const multiply: (a: number, b: number) => number = (a, b) => a * b;

//호출 시그니처_ 함수는 객체이므로 타입 표현식을 객체처럼 표현할 수도 있다.
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;

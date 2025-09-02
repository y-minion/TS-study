//Exclude 타입 _ T로부터 U를 제거하는 타입. 직접 만들어보자.
/*
 * 이때 extends와 유니온타입 이 두개를 보고 왜 U가 의 슈퍼타입이 될 수 있나? 라는 생각을 할 수 있다.
 * 하지만 유니온 타입이 조건문에 등장하면 각 요소들에 대해 조건을 실행한뒤 각 결과를 유니온 타입으로 묶는다.
 */
type Exclude<T, U> = T extends U ? never : T;

//Extract타입 _ T로부터 U를 추출한다.
type Extract<T, U> = T extends U ? T : never;

//ReturnType _ 타입 변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입.
type ReturnType<T extends (...args: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number

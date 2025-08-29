//제네릭
//다양한 타입의 매개변수를 받고 해당 매개변수를 그대로 변환하는 함수를 만들어보자.

function func(value: any) {
  return value;
}

let num = func(10);
let str = func("string");
//실제로 입력한 매개변수의 타입과는 별개로 반환값이 항상 any로 나온다.
num.toUpperCase(); //그래서 이처럼 엉뚱한 메서드를 사용해도 any로 추론 되기 때문에 에러를 발견하지 못한다.

//우리가 원하는건 인수로 전달된 타입이 반환값으로 그대로 나오게 하고싶다. 더 나아사 타입도 변수처럼 동적으로 할당해서 상황에 맞게 사용하고 싶다.
//이를 충족하기 위해 제네릭 함수가 등장한다.
function genericFunc<T>(value: T) {
  return value;
}
// 위와 같이 타입을 담는 변수인 타입 변수를 선언한다. 그리고 해당 타입을 사용하고 싶은 곳에 변수처럼 타입 변수를 할당하면 된다.

let num2 = genericFunc(12);

function retrunFirstValue<T>(data: T[]) {
  return data[0];
}

let num3 = retrunFirstValue([0, 1, 2]);
//number

let str2 = retrunFirstValue([1, "hello"]);
//string | number

function retrunFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

//아래와 같이 타입 변수를 제한 할 수도 있다. 타입변수가 적어도 특정 속성을 갖고 있도록 제한 하고 싶으면 타입 확장을 통해 최소한의 속성을 명시하면 된다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

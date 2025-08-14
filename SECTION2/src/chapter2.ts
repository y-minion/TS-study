let numArr: number[] = [1, 2, 999];

let strArr: string[] = ["hi", "TS"];

//제너릭으로도 가능
let boolArr: Array<boolean> = [true, false];

//다양한 타입 요소를 갖는 배열일 경우에는??
// let multArr = [1, 'hello'] -> number와 str 섞여 있음

//유니온 타입_배열안 요소 타입 지정을 소괄호와 바를 이용해 지정한다.
let multArr: (number | string)[] = ["Hi", 123];

//다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3, 4],
  [1, 2, 3],
];

//튜플_고정된 길이를 갖는 배열 타입을 지정해 보자.
let tup1: [number, string, number] = [12, "Hii", 12];

//튜플도 결국 배열이기에 배열 메서드를 사용할 수 있다.
tup1.push(12);
tup1.pop();
tup1.push("Hi");

//튜플을 왜 쓸까?
const users1 = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];
// 만약 위와 같이 회원 정보를 순서([string,number])에 맞게 정렬을 해놨는데, 다른 동료가 순서를 이상하게 값을 삽입할 수 있다.
const users2 = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // <- 새로 추가함
];
// 일반 JS에서는 이런 문제를 확인 할 방법이 없다. 하지만 TS의 튜플을 사용한다면 이 규칙을 강제할 수 있다.
const users3: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "조아무개"], -> 오류 발생
];

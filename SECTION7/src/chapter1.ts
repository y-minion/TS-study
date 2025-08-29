const arr = [1, 2, 4, 5];

//커스텀 맵 함수를 제네릭을 이용해 만들어 보자.
function map<T>(arr: T[], callback: (item: T) => T): T[] {
  let result = [];
  for (const i of arr) {
    result.push(callback(i));
  }
  return result;
}

//하지만 이렇게 되면 다음과 같은 문제가 발생한다.
map(arr, (item) => item.toString());
// 첫번째 인수로 전달했을때 타입 변수 T에는 number타입이 할당 되었기 때문에 콜백함수의 반환값 타입도 number가 되어야 한다.
//하지만 실제 map메서드는 다른 타입으로도 반환이 되어야 한다. 따라서 타입변수를 하나 더 추가한다.

function map2<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (const i of arr) {
    result.push(callback(i));
  }
  return result;
}

const newArr = arr.map((item) => item * 2);

//ForEach 메서드 타입 정의하기
function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (const i of arr) {
    callback(i);
  }
}

//함수의 타입 정의하기
function func(a: number, b: number): number {
  return a + b;
}

//화살표 함수의 타입 정의하기
const add = (a: number, b: number): number => a + b;

function introduce(name: string = "milo") {
  console.log(`name:${name}`);
}

function intro(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

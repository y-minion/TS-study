// 함수 오버로딩_ 하나의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 만드는 문법

//TS에서 함수 오버로딩을 구현하려면 먼저 버전별 오버로드 시그니처를 만들어야한다.
//버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // ✅ 버전 1 - 오버로드 시그니쳐
func(1, 2); // ❌
func(1, 2, 3); // ✅ 버전 3 - 오버로드 시그니쳐

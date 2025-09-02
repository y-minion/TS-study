//조건부 타입
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

//아래와 같이 타입선언을 ObjB extends ObjA 조건의 결과에 따라 다르게 할 수 있다.
type B = ObjB extends ObjA ? number : string;

//제네릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
//string타입으로 초기화

let varB: StringNumberSwitch<string>;
//number 타입으로 초기화

//예제___ 매개변수로 string을 입력 받아서 공백을 제거한 다음 반환하는 함수
function removeSpaces(text: string) {
  return text.replaceAll(" ", "");
}
let result = removeSpaces("hi im Miloooo");

//하지만 이때 매개변수로 undefinded이나 null 타입의 값들도 제공될 수 있다. 아래와 같이 매개변수의 타입을 수정해야한다.
function removeSpaces2(text: string | undefined | null) {
  return text.replaceAll(" ", ""); // ❌ 매개변수의 타입을 유니온 타입으로 설정했기때문에 text가 string이 아닌 다른 타입이 올 수 있다.
}

let result = removeSpaces("hi im wod");

//다음과 같이 타입을 좁혀서 사용할 수 있다. 그리고 타입 조건문을 통해 반환값을 추론 할 수 있다.
//하지만 이렇게 되면 함수 내부에서는 아직 타입이 확정된 상태가 아니라서 어떤 값이 들어올지 모르기 때문에 에러를 발생시킨다.
function removeSpaces3<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any;
  }
}
let result2 = removeSpaces3("hi im wod");

// 하지만 타입 단언을 하게 되면 정확한 에러 상황을 못 잡아 낸다. 그래서 함수 오버로딩을 사용한다.
//이 함수 오버로딩 방식은 오직 해당 함수를 호출하려는 개발자의 시점에서는 호출부의 시그니처대로 작동되게 할 것을 약속하고 실제 구현부는 컴파일러만 접근할 수 있다. 그래서 호출부는 느슨하게 구현해 호출 시그니처 대로 움직이는지만 검사한다.
function removeSpaces4<T>(text: T): T extends string ? string : undefined;
function removeSpaces4(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

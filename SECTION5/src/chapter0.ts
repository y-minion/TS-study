//인터페이스_ 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법이다.

// 객체 타입 별칭을 지정할 때와 비슷하게 타입 지정을 해준다.
interface Person {
  name: string;
  age: number;
}

//위에서 정의한 인터페이스를 타입 주석과 함께 사용해 변수의 타입을 정의할 수 있다.
const person: Person = {
  name: "앙김호띠!",
  age: 1500,
};

//인터페이스에서도 동일한 방식으로 선택적 프로퍼티 설정이 가능하다.
//읽기전용 프로퍼티  또한 동일한 방시긍로 설정이 가능하다.
interface Person2 {
  readonly name: string;
  age?: number;
  //다음과 같이 메서드의 타입을 함수표현식을 이용해 정의하는 것 또한 가능하다.
  sayHi: () => void;
  //호출 시그니처를 통해서도 메서드의 타입을 정의할 수 있다.
  sayHello(): void;

  //함수 표현식으로 메서드의 타입을 정의함녀 메서드의 오버로딩 구현이 불가능 하다.
  sayHi: (a: number, b: number) => void; // 타입 중복 선언으로 에러가 발생!

  //하지만 호출 시그니처는 오버로딩이 가능하다.
  sayHello(a: number, b: number): void;
}

const person2: Person2 = {
  name: "안기모띠",
};

person2.name = "왜 안바뀌는거야!"; // 읽기전용속성!

//하이브리드 타입_인터페이스로도 함수이자 일반 객체인 하이브리드 타입을 정의할 수 있다.
interface Func2 {
  (a: number): string;
  b: boolean;
}

//주의할 점1
//인터페이스는 대부분의 상황에 타입 별칭과 동일하게 동작하지만 몇가지 차이점이 존재한다.
// 인터페이스에서는 Union이나 Intersection 타입을 정의할 수 없다.
type Type1 = number | string;
type Type2 = number & string;

interface Person {
  name: string;
  age: number;
} //| number -> ❌

//따라서 인터페이스로 만든 타입을 Union이나 Intersection 으로 이용해야 한다면 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야 한다.
type Type3 = number | string | Person;
type Type4 = number & string & Person;

const person5: Person | string = {
  name: "이정환",
  age: 27,
};

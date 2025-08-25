//반환값의 타입 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

//일반적인 타입 호환과 마찬가지로 할당하려는 B의 반환값이 할당받는 A의 반환값 타입의 서브타입이고, A가 B의 슈퍼타입이면 두 타입은 호환이 된다.
//하지만 반대의 경우에는 호환되지 않는다.
a = b; // ✅
b = a; // ❌

//매개변수의 타입이 호환되는가?

// 1. 매개변수가 같은 경우
//두 함수 타입 C와 D가 있을 경우 두 타입의 매개변수의 개수가 같다면 C매개변수의 타입이 D매개변수의 서브타입일때에 호환된다.
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//마치 다운 캐스팅을 허용하는 것 같아 보인다.
c = d; // ❌
d = c; // ✅

//이렇게 되는 이유는 두 함수의 매개변수의 타입이 모두 객체타입일 경우를 살펴보면 이해하기 쉽다.

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅

//animalFunc = dogFunc를 코드로 표현해보면 다음과 같다.
let animalFunc = (animal: Animal) => {
  console.log(animal.name);

  //Dog의 타입을 할당했기 때문에 color속성이 있을거라고 생각하고 해당 속성을 사용한다. 하지만 실제로는 Animal타입이 매개변수에 할당되어 color속성은 사용할 수 없다.
  console.log(animal.color);
};

/*
animalFunc 타입의 매개변수 타입은 Animal타입이다. 그래서 매개변수로 animal타입만 오도록 허용을 한다.
하지만 함수 내부는 Dog타입이므로 Animal타입에 없는 속성이 사용된다. 이렇게 되면 Animal타입에 없는 속성을 사용하므로 에러가 발생한다.
실제로 사용할때는 생각하는 방식은 다음과 같다.
✅ 매개변수로 받는 값들이 함수 내부에서 사용된다. 이떄 함수 내부에서 매개변수로 전달 받지 않은 값의 범위를 사용하면 에러가 발생한다.
그래서 매개변수로는 함수내부의 타입 범위보다 작은 값들을 전달해줘야한다. 그래서 최대한 안전하게 하기 위해서 함수 내부로 전달되는 값을 받는 부분인 매개변수의 타입은 
함수 내부의 타입의 범위보다 작아야한다.
*/

//2. 매개변수의 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
func2 = func1; // ❌

/*
정리)-> A=B와 같이 할당할때는 다음과 같이 생각하면 된다. 할당 받는 부분이 매개변수의 타입 범위를 담당하고 할당하는 부분이 직접 함수의 내부를 담당하는 부분인데,
이때 함수 부분에서 값을 사용할때 어떻게 사용되야 매개변수로 지정된 범위 안에서 사용할 수 있을까? 를 생각해 보면 생각하기 쉽다.
매개변수에서 지정되지 않은 값을 함수부분에서 사용하면 안된다는 부분만 기억하자!
*/

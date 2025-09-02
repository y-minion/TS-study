//분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

//유니온 타입을 조건부 타입에 넣으면 어떻게 될까?
let c: StringNumberSwitch<number | string>;

/*
* 일반적인 상황에서의 유니온 타입을 생각하면 number | string은 number의 서브타입이 아니기 떄문에 조건식이 거짓이 되어 Number가 될거라고 예상할 수 있다.
* 하지만 생각과는 다르게 결과로 string|number타입으로 정의된다. 왜 이렇게 되는 걸까?
*  *** 조건부 타입의 타입변수에 Union타입을 할당하면 분산적인 조건부 타입으로 조건부 타입이 변경된다.***
* 분산적인 조건부 타입이란 무엇일까? -> 타입 변수에 할당한 유니온 타입 내부의 모든 타입들이 분리된다. 그리고 분리된 타입별로 실행된 뒤에 각각의 결과값들이 유니온 타입으로 묶인다.

*/

// 분산적인 조건부 타입의 특징을 이용하면 매우 다양한 타입을 정의할 수 있다.

// Exclude 조건부 타입 구현하기
type A = Exclude<number | string | boolean, string>;
//직접 구현해 보자
type Exclude<T, U> = T extends U ? never : T;
/*
위 코드는 다음의 흐름으로 진행된다.
먼저 T제네릭에는 유니온 타입이 오고, U제네릭에는 제외하려는 타입이 온다.
이때 조건부에서 유니온 타입은 각각의 요소 타입들이 분산되서 실행된다.
각 요소들을 하나씩 비교하면서 U제네릭과 같은 요소는 제외하고(never타입) 다른 타입인 경우에는 그대로 타입을 반환한다.
따라서 최종적으로 A의 타입은 number|boolean 타입이 된다.
*/

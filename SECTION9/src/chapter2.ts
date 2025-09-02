//infer_조건부 타입 내에서 특정 타입을 추론하는 문법
//다음과 같이 특정 함수 타입에서 ***반환값의 타입***만 추출하는 특수한 조건부 타입인 return type을 만들때 이용가능
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type A = ReturnType<FuncA>;
// string

type B = ReturnType<FuncB>;
// number

/*
조건식 T extends () => infer R 에서 infer R은 조건식이 참이 되도록 만들 수 있는 최적의 R타입을 추론하라는 의미.
따라서 A타입을 계산할 때의 위 코드의 흐름은 다음과 같다.
1. 타입 변수 T에 타입 FuncA에 할당된다.
2. T는 ()=>string 타입이 된다.
3. 조건부 타입의 조건식은 타음 형태가 된다. () ⇒ string extends () ⇒ infer R ? R : never
4. 이때 제네릭에 타입이 들어오면 infer R는 해당 조건을 참이 되게 만드는 R을 추론한다.
5. 추론이 가능하면 이 조건식을 참으로 판단 or 추론이 불가능 하면 거짓으로 판단
*/

type c = ReturnType<number>; //추론이 불가능 하므로 never타입 반환

//infer를 이용해서 Promise의 resolve의 타입을 추론 할 수 있다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//Promise의 타입이여야 한다.
//프로미스 타입의 결과값을 반환해야한다.

type PromiseA = PromiseUnpack<Promise<number>>;

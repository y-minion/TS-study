//제네릭은 인터페이스에도 적용할 수 있다.
interface KeyPair<K, V> {
  key: K;
  value: V;
}
//키페어를 저장하는 객체의 타입을 제네릭 인터페이스로 정의. 다음과 같이 변수의 타입으로 정의하여 사용할 수 있다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<string, string[]> = {
  key: "key",
  value: ["value", "key"],
};

//인덱스 시그니처와 함께 사용하기
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

//제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = { key: "key" };

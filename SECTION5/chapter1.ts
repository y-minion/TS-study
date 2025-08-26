interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}

//위의 코드는 문제가 있다. name 그리고 age 프로퍼티가 모든 타입에 걸쳐서 중복해서 정의되어 있다.
// 중복되면 왜 안 좋을까? 일단 타입 선언하는데 중복되다 보니 귀찮다. 그리고 특정 프로퍼티를 수정해야하는데 만약에 중복해서 선언한 곳이 1억개라면? 끔찍함
//하지만 인터페이스는 이 문제를 해결할 수 있다.
interface Animal2 {
  name: string;
  color: string;
}

interface Dog2 extends Animal2 {
  breed: string;
}

interface Cat2 extends Animal2 {
  isScratch: boolean;
}

interface Chicken2 extends Animal2 {
  isFly: boolean;
}

//interface 타입이름 extends 확장_할_타입이름 형태로 extends 뒤에 확장할 타입의 이름을 정의하면 해당 타입에 정의된 모든 프로퍼티를 다 가지고 오게 된다.
const dog2: Dog2 = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

//타입을 확장한다는 거는 상위 인터페이스의 서브타입이 된다는 뜻이므로 서로 연관된 상관관계안에서 타입 재정의가 이뤄져야한다.
interface Dog3 extends Animal2 {
  name: "똘똘이"; //타입을 재정의 할 수 있다. -> 하지만 주의해야 할 점은 프로퍼티를 재정의 하려는 값이 원본값의 서브타입이어야 한다!
  breed: string;
}

//타입 별칭으로 정의된 객체도 확장할 수 있다.
type Animal4 = {
  name: string;
  color: string;
};

interface Dog extends Animal4 {
  breed: string;
}

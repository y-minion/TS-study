//Chapter2-3 객체
let user1: object = {
  id: 1,
  name: "milo",
};

// user.id -> object 타입에는 단순히 object라는 타입만 나타내고 어떤 값이 포함되어있는지는 알려주지 않는다.
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "milo",
};

user2.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "똘똘이",
  color: "brown",
};

//--------

let user3: {
  id?: number; //선택적 프로퍼티(옵셔널)
  readonly name: string;
} = {
  id: 1,
  name: "milo",
};

user3 = {
  name: "개똥이",
};

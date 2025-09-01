// 맵드타입
// 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 타입 조작 기능.

interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(): User {
  return {
    id: 1,
    name: "Milo",
    age: 27,
  };
}

function updateUser(user: User) {
  //... 유저 정보 수정 기능
}

updateUser({ id: 1, name: "Milo", age: 25 });
// 수정하고 싶은 정보는 age프로퍼티 하나뿐인데 나머지의 프로퍼티도 전달해줘야 하는 상황이 생긴다.
// 원하는 특정 속성만 전달하고 싶은데 그런 방법은 없을까?
type PartialUser = {
  id?: number;
  name?: string;
  age?: number;
};
//하지만 위의 방식은 추후에 새로운 속성이 추가되거나 수정되면 해당 타입도 수정해줘야 하는 에러사항이 발생한다.
//맵드 타입으로 보완할 수 있다.

type PartialUser2 = {
  //아래와 같이 맵드 타입을 이용해 아까와 동일한 타입을 만들었다.
  //아래의 문법은 for in 반복문과 유사하다. key의 타입으로  "id" | "name" | "age"의 타입들을 반복하면서 **모두** 대입된다.
  //이때 물음표를 붙여 주면 옵셔널로 속성이 선택적 프로퍼티로 변한다.
  [key in "id" | "name" | "age"]?: User[key];
};

//하지만 위의 방식또한 속성이 많아지게 되면 하나하나 쳐야하는 단점이 존재한다. 따라서 위의 방식도 좋지 않다. 이때 keyof문법을 사용해 내가 원하는 객체의 속성을 모두 유니온 타입으로 열거할 수 있다.
type PartialUser3 = {
  [key in keyof User]?: User[key];
};

//앞에 Readonly를 붙여서 읽기 전용 속성으로 만들수 있다.
type ReadOnlyUser = {
  readonly [key in keyof User]?: User[key];
};

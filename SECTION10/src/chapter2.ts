//PICK 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//PICK타입은 다음과 같이 첫번째 제너릭에 타겟 객체 타입을 넣고, 두번째 제네릭으로는 타겟 객체 타입에서 뽑아서 사용할 프로퍼티를 입력한다. 이때 여러개일 경우 유니온 타입으로 입력한다.
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "제목",
  content: "내용",
};

/*
 * Pick 타입을 만들어 보자.
 * 이때 제너릭 U는 T의 프로퍼티의 서브 타입임을 조건으로 지정해야한다.
 */
type Pick<T, U extends keyof T> = {
  [key in U]: T[key];
};

//Omit 타입은 Pick타입과 다르게 지정한 프로퍼티를 제외한 나머지 속성들로 이루어진 객체 타입을 만들어준다.
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};
/*
 * 직접 만들어 보면 다음과 같다. U에는 제외할 속성들이 와야한다.
 * 이때 Exclude<keyof T, U>를 통해 제외한 나머지 속성들을 추출한다.
 * 그리고 Pick 을 이용해 추출한 속성들을 전달해 U로 전달되지 않는 나머지 속성들로 이루어진 객체 타입을 만든다.
 */
type Omit<T, U> = Pick<T, Exclude<keyof T, U>>;

//Record
type Thumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};
//여기에 추가로 watch 버전이 추가되어야한다, 이때 내부 구조는 동일하다. 하지만 이렇게 새로운 버전이 추가될때마다 똑같은 객체 타입을 추가해주면 중복 문제가 발생한다.
//이럴때 Record를 이용하면 된다. 다음과 같이 K에는 어떤 프로퍼티들이 있을지 String Literal Union타입을 할당하고 V에는 동일하게 반복될 프로퍼티의 값 타입을 할당한다

type Thumbnail2 = Record<"large" | "medium" | "small", { url: string }>;
//직접 구현해보자
//이대 T는 항상 ***프로퍼티*** 여야만 한다. 하지만 어떤 객체의 프로퍼티던 상관이 없으므로 any타입의 키로 조건을 생성한다.
type Record<T extends keyof any, U> = {
  [key in T]: U;
};

// TS에서 만약 특정 제네릭이 프로퍼티임을 명시하고 싶다면 조건으로 __extends keyof 타겟 객체__ 이런 조건을 추가하면 된다.

//Partial 유틸리티 타입
//특정 객체 타입의 프로퍼티를 모두 선택적 프로퍼티로 변환한다.
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
//다음과 같은 객체 타입을 모두 선택적으로 바꾸고 싶다면? 똑같은 속성을 하드코딩하면서 ?을 붙이는건 중복발생&변화에 대응하지 못한다.
//이때 Partial타입으로 문제를 해결한다.
const draft: Partial<Post> = {
  title: "hi",
};
//이렇게 기존의 POST타입에서 모든 속성들을 선택적으로 변경해준다.
//이제 이 유틸리티 타입을 직접 구현해보자
/*
설계
* 우선 제너릭으로는 선택적 속성을 적용할 객체 타입이 온다. -> 옵셔널 T 고려
* 이제 T로 들어오는 객체 타입의 프로퍼티에 대해서 선택적으로 변경해줘야한다.
* 새로운 객체 타입을 만드므로 Mapped type을 사용한다. 그리고 제너릭 T의 속성들을 추출하는 keyof 를 사용한다. [key in keyof T]
* 해당하는 값의 타입에 대해 접근해야하므로 인덱스를 통해 키의 값의 타입에 접근한다. -> T[key]
*/
type Partial<T> = {
  [key in keyof T]?: T[key];
};

//Required T  -> 앞서 살펴봤던 PARTIAL과는 다르게 Required 타입은 모든 속성을 필수 적으로 갖도록 변환하는 유틸리티 타입이다.
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  //   thumbnailURL: "https://...",
}; // thumbnailURL을 초기화 하지 않아서 에러가 발생한다.

//그러면 직접 만들어보자.
//mapped 타입으로 모두 열거하는데 이때 모든 프로퍼티를 필수적으로 존재하도록 만들어주는 -?를 붙인다. 모든 프로퍼티에서 '선택적' 기능을 제거하는 기능이다.
type Required<T> = {
  [key in keyof T]-?: T[key];
};

//Readonly타입-> 다음과 같이 Readonly타입을 사용하면 모든 속성이 읽기 전용으로 바뀐다.
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};
readonlyPost.content = "해킹당함"; // ❌

//직접 구현해보자
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

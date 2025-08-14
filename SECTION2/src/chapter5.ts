//Chapter5 열거형 타입
//enum 타입 -> 여러개의 값을 열거할때 사용할 수 있다.
/*
 * JS객체 vs  TS enum
 * - js의 객체인 경우에는 모든 값을 허용해줘서 의도치 않은 값이 들어와도 오류가 발생하지 않아 의도하지 않은 버그가 발생할 수 있다.
 * 하지만 enum을 사용하면, enum 또한 타입이다. 그래서 타입으로 값을 강제할 수 있다. -> 매개변수에 enum의 타입을 부여해서 입력값을 강제 할 수 있다.
 *
 * - JS의 객체와 달리 enum은 단순히 키-값 쌍이 아니라 **열거된 값의 집합**임을 명시적으로 보여준다.
 * 그래서 다른 사람이 코드를 읽을때 enum이라는 키워드 만으로 이 값들이 서로 관련있는 상수의 집합이라는 것을 바로 이해할 수 있다.
 *
 */
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "Milo",
  role: Role.ADMIN, //관리자
};
const user2 = {
  name: "개똥이",
  role: Role.USER, //회원
};
const user3 = {
  name: "Milo",
  role: Role.GUEST, //게스트
};

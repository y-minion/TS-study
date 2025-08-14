// chapter4 타입별칭과 시그니처

//타입 별칭을 이용하면 다음과 같이 타입을 변수 사용하듯이 사용할 수 있다.
//타입 별칭은 변수 초기화 하듯이 등호(=)을 이용하여 타입을 초기화 해주면 된다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "Milo",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

//인덱스 시그니처 -> 객체의 키가 1억개면..? 하나하나 타입을 지정할 수 없다. 심지어 사용자들의 입력을 받는 객체인 경우 계속해서 증가하는데 맞춰서 객체의 타입을 지정해 줄 수 없다.
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  // (... 약 100개의 국가)
  Brazil: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};

//이때 위의 불편함을 해결하기 위해 인덱스 시그니처를 사용한다.
//타입 주석도 훨씬 간단해지고 효율적으로 타입 지정을 할 수 있게 되었다.
type CountryCodes2 = {
  [key: string]: string;
};

let countryCodes2: CountryCodes2 = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};

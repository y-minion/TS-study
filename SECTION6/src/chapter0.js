//JS 클래스 복습
const student = {
  name: "황영민",
  grade: "A+",
  age: 27,
  study() {
    console, log(`열심히 공부함`);
  },
  introduce() {
    console.log(`안녕하시렵니까?`);
  },
};

//이때 한명의 학생 객체를 더 만들고 싶으면?
const studentB = {
  name: "다른학생",
  grade: "A+",
  age: 2722,
  study() {
    console, log(`열심히 공부함`);
  },
  introduce() {
    console.log(`안녕하시렵니까?`);
  },
};

//동일한 프로퍼티를 갖는 객체가 있다. 이러한 동일한 모양의 객체를 여러개 만들어야할 때 중복된 코드를 이용해 만들게 되면 문제가 크다.
//이때 클래스를 이용한다.
//인터페이스 선언과 동일하게 선언한다
class Student {
  //각 필드를 정의한다
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log(`${this.name}이 열심히 공부함`);
  }
  introduce() {
    console.log(`안녕하세요 제 이름은 ${this.name}이에요`);
  }
}

//새로운 인스턴스 생성
const studentC = new Student("만식이", "D-", 29);
studentC.introduce();

class StudentDeveloper extends Student {
  //새로 추가할 필드
  favSkill;
  //생성자
  constructor(name, grade, age, favSkill) {
    //이때 부모 클래스의 생성자를 함께 호출해 줘야 한다. 이때 대신 매개변수를 부모의 생성자에 전달해주는 super함수를 사용한다.
    super(name, grade, age);
    this.favSkill = favSkill;
  }

  //새로 추가할 메서드
  programming() {
    console.log(`${this.name}이 코딩을 하네요!~`);
  }
}

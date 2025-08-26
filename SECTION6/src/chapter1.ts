//클래스 생성시  생성자에서 각 필드의 값을 초기화 해주지 않을 경우 초기값도 함께 명시해 주어야 한다.
class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 메서드
  work(): void {
    console.log("일함");
  }
}

// 생성자에서 필드의 값들을 초기화 해 준다면 필드 선언시의 초기값은 생략해도 된다.
class Employee2 {
  // 필드
  name: string;
  age: number;
  //클래스가 생성하는 객체의 특정 프로퍼티를 선택적으로 만들고 싶다면 다음과 같이 선언 할 수 있다.
  position?: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

//타입스크립트는 구조를 기준으로 타입을 구분하는 성질이 있다. 그래서 클래스 자체가 타입으로도 사용될 수 있다.
// 클래스를 타입을 사용하면 해당 클래스가 생성하는 객체의 타입과 동일한 타입이 된다.

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

//상속도 JS의 클래스 상속 방식과 동일하다. 상속받을때 부모의 생성자 함수에 매개변수를 전달할때 super를 사용한다.
class ExecutiveOfficer extends Employee2 {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

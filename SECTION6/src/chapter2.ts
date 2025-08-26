class Employee {
  // 필드
  name: string; // 자동으로 public
  public age: number; // 접근제어자를 직접 명시할 수 있다.
  position: string; // 자동으로 public

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

const employee = new Employee("이정환", 27, "devloper");

//public속성인 값은 속성을 조회,수정 할 수 있다.
employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";

class Employee2 {
  // 생성자
  //접근 제어자를 생성자의 매개변수에 설정하면 동일한 이름의 필드를 선언하지 못하게 된다.
  //생성자의 매개변수에 접근제어자가 설정되면 자동으로 필드도 선언되기 때문에 중복 선언이 되어버린다.
  //또한 생성자 내부의 코드를 제거해도 알아서 매개변수의 값으로 필드 값을 채워준다.
  constructor(private name: string, age: number, position: string) {}

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // 클래스 내부에서는 접근
  }

  changeName(name: string) {
    this.name = name; //클래스 내부에서는 수정 가능
  }
}
const employee2 = new Employee2("이정환", 27, "devloper");

employee2.name = "홍길동"; // ❌ 오류
employee2.age = 30;
employee2.position = "디자이너";

class Employee3 {
  // 필드
  private name: string; // private 접근 제어자 설정
  protected age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

class ExecutiveOfficer2 extends Employee3 {
  // 메서드
  func() {
    this.name; // ❌ 오류 -> 프라이빗 속성은 위치한 클래스 내에서만 조회,수정 할 수 있다.
    this.age; // ✅ 가능 -> 프로텍트 속성은 상속받는 자식들의 수정,조회를 허용한다.
  }
}

const employee = new Employee("이정환", 27, "devloper");

employee.name = "홍길동"; // ❌ 오류
employee.age = 30; // ❌ 오류
employee.position = "디자이너";

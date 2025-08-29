//제네릭 클래스
class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList1 = new NumberList([1, 2, 3]);

//이때 만약에 StringList클래스도 하나 필요하다면 어떻게 해야할까? 제네릭 없이는 다음과 같이 중복된 새로운 클래스를 만들어야한다.
class StringList {
  constructor(private list: string[]) {}

  push(data: string) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new StringList(["1", "2", "3"]);

//매우 비효율적이다. -> 제네릭 클래스를 사용해 여러 타입의 리스트를 동적으로 받아서 생성할 수 있는 클래스를 정의해 보자
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
}

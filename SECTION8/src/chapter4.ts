//템플릿 리터럴 타입
//템플릿 리터럴을 이용해 특정 패턴을 갖는 String타입을 만드는 기능
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `red-dog` | "red-cat" | "red-chicken" | "black-dog"; //... 조합해야하는 타입이 너무 많은데 하드코딩할 수 없다 ;

type ColoredAnimal2 = `${Color}-${Animal}`; // 이렇게 템플릿 리터럴 타입을 이용하여 자동으로 조합시켜 줄 수 있다.

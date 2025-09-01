//인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

//이때 위의 게시글에서 작성자의 이름과 아이디를 붙여서 출력하는 함수를 만드려고 한다.
function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`);
}

//하지만 추후에 Post타입의 author속성의 구조가 수정이 되면 해당 타입을 참조하고 있는 하위의 함수들도 모두 수정이 되야한다.
//이럴때 인덱스드 엑세스 타입을 이용해 Post 타입에서 author프로퍼티의 타입을 추출해 사용 할 수 있다.

function printAuthorInfo2(author: Post["author"]) {
  console.log(`${author.id}-${author.name}`);
}

//이때 인덱스에는 값이 아니라 타입만 들어갈 수 있다. 변수에 저장하고 인덱스로 사용하려고 하면 에러가 발생한다.
//또한 다음과 같이 인덱스를 중첩하여 사용할 수 있다.
function printAuthorId(authorId: Post["author"]["id"]) {
  console.log(authorId);
}

//특정 배열타입의 요소 타입을 추출 할 수도 있다.
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

//이때 인덱스드 액세스 타입을 이용해 배열 타입에서 하나의 요소 타입만 뽑아 올 수 있다.
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "Milo",
    age: 24,
  },
};
//넘버 리터럴 타입을 넣어도 된다. 숫자와 관계없이 모두 Number 타입을 넣은것과 동일하게 동작한다.
const post3: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "Milo",
    age: 24,
  },
};

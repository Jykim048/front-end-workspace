# BOM (Browser Object Model)

- 브라우저와 관련된 객체들

## window
- 브라우저 창에 대한 설정을 하는 가장 최상위 객체
- 브라우저가 실행될 때 가장 먼저 생성되며 하위에 브라우저 각 요소에 해당하는 객체가 만들어진다.
- BOM : location, history, navigator, screen
- DOM : document

### open(첫번째, 두번째, 세번째)

- 첫번째 : 새창에서 열고자하는 url 주소
- 두번째 : 창 이름, 창 이름이 같은게 이미 열려 있을 경우 새로 열리지 않고 이미 열려있는 곳에서 새로고침
- 세번째 : 새창의 너비, 높이, 주소창여부, 툴바여부, 스크롤바여부 등 새로운 창의 특성

* 창의 특성 (브라우저마다 적용범위 다름)
- width : 창의 너비(px)
- height : 창의 높이(px)
- resizable : 창 크기 조절 가능 여부(yes or no)
- location : 주소창 여부
- menubar : 메뉴바 여부
- scrollbars : 스크롤바 여부
- status : 상태표시줄 여부
- toolbar : 도구모음 여부

### 타이머(Timer)

- 일정 시간이 경과된 이후에 특정 작업을 할 수 있도록 제공되는 함수

#### setTimeout()

- 매개값으로 전달된 콜백 함수를 단 한 번만 실행

#### setInterval()
- 매개값으로 전달된 콜백 함수를 반복해서 실행

## location

- 브라우저의 주소 표시줄(URL)과 관련된 객체로 주소와 관련된 정보를 가진 객체

### reload()

- 페이지를 새로 고침하는 함수

### href()

- 현재 페이지의 URL 주소를 가지고 있는 속성으로 해당 속성의 값을 변경해서 페이지를 이동

### assign(), replace()

- 두 함수 모두 페이지를 이동시키지만 replace()는 assign()과 달리 history에 기록되지 않는다.

## history

- 브라우저에서 이동한 문서의 내역을 관리하는 객체

## navigator

- 브라우저에 대한 정보를 가지는 객체로 고객에 대한 정보를 분석할 때, 브라우저별로 다른 동작을 해야 할 때 사용

## screen

- 사용자의 디스플레이에 대한 정보를 가진 객체

# DOM (Document Object Model)

- HTML 문서의 태그들을 객체로 생성하고 객체들의 관계(상/하위)에 따라 트리 자료구조로 구성한 객체
- document 객체는 window 객체의 하위 객체로 DOM 트리의 가장 최상위 객체
- HTML 태그(요소)를 노드라고 한다.

## 문서 객체 가져오기

- HTML 문서에 당연히 있는 내용들을 태그별로 가져올 수 있다.

```js
document.head;
document.title;
document.body;
```

### id로 검색

- 태그의 id 속성 값을 이용해서 객체를 가져온다.

```js
document.getElementById("아이디");
```

### class로 검색

- 태그의 class 속성 값을 이용해서 객체를 배열에 담아 가져온다.
- 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴

```js
document.getElementsByClassName("클래스");
```

### name 으로 검색

- 태그의 name 속성 값을 이용해서 객체를 배열에 담아 가져온다.
- 동일한 name 속성 값을 갖는 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴

```js
document.getElementsByName("이름");
```

### 태그로 검색

- 태그명을 이용해서 객체를 배열에 담아 가져온다.
- 동일한 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴

```js
document.getElementsByTagName("태그");
```

### CSS 선택자를 이용해서 검색

```js
document.querySelector("선택자");
document.querySelectorAll("선택자");
```

## 문서 객체 조작하기

### textContent, innerHTML

- textContent : 문서 객체 내에 문자 그대로 넣는다.
- innerHTML : HTML 형식으로 넣는다.

```
문서객체.textContent
문서객체.innerHTML
```

### setAttribute, getAttribute

- setAttribute : 문서 객체의 속성을 추가하거나 수정할 때
- getAttribute : 문서 객체의 속성을 가져올 때
- data-xxx : data-로 시작하는 표준 커스텀 속성. 
data-index, data-id, data-role 등 data-의 형식으로 시작하면 어떤 속성이든 필요에 따라 임의로 추가할 수 있다.

```js
문서객체.setAttribute(속성이름, 값)
문서객체.getAttribute(속성이름)
```

### style 조작

- 문서 객체의 스타일을 조작할 때는 style로 접근할 수 있다.
- style 속성은 - 기호 대신 캐멀 케이스로 사용
ex) background-color => backgroundColor

```js
문서객체.style.속성 = "값"
```

### classList

- 사실 스타일을 조작할 때 style로 접근하는 방식보다 미리 클래스에 스타일을 지정하고 classList로 조작
- contains는 해당 클래스명 유무를 체크
- 있다면 삭제, 없다면 추가를 알아서 해주는 toggle을 사용하는 것도 있음

```js
문서객체.classList.add("클래스명");
문서객체.classList.remove("클래스명");

문서객체.classList.contains("클래스명");
문서객체.classList.toggle("클래스명");
```

## 문서 객체 추가하기

- createElement로 문서 객체를 생성
- appendChild로 부모 객체에 자식 객체를 추가

```js
const 자식객체 = document.createElement
(문서객체이름); // 태그
부모객체.appendChild(자식객체);
```

## 문서 객체 삭제하기

- 부모 객체에서 자식 객체를 삭제할 수 있다.
- 만약 부모 객체에 접근해야 한다면 parentNode를 사용한다.

```js
부모객체(문서객체.parentNode).removeChild(자식객체)
```
### 목차

- [변수와 연산자](#변수와-연산자)

# 자바스크립트

1. 웹 브라우저에서 읽고 실행되는 언어
2. 보안성이 없음
3. html 내에 작성
4. 대소문자의 구분 엄격

## 적용 방법

1. 내부 스크립트

- html 문서 내에 스크립트 정의 후 직접 작성
- 필요한 위치에

```html
<script type="text/javascript">
    스크립트 내용
</script>
```

2. 외부 스크립트

- 스크립트를 다른 문서에 작성하고 "파일명.js"로 저장
- 효과를 적용할 문서에

```html
<script type="text/javascript" src="파일명.js">
    다른 문장 작성 금지
</script>    
```

<br>

# 변수와 연산자

[위로 이동](#목차)

## var, const, let

```js
var 변수명 = 값;
변수명 = 값;

const 변수명 = 값;

let 변수명 = 값;
변수명 = 값;

```
1. var : 예전 방식 (사용 X)
2. const : 상수 - 값을 수정할 수 없다.
3. let : 변수 - 값을 수정할 수 있다.

- 자주 사용하는 건 const, 가끔 사용하는 건 let, 거의 사용하지 않는 건 var

## 출력

```js
console.log();
```

## 데이터 타입 확인

```js
typeof 데이터;
```

## 문자열

```js
"Hello World";
'Hello World';
```

### 템플릿 문자열

- 문자열과 변수를 같이 사용할 때

```js
const a = 1;
console.log(`aaaa ${a}`);
```

### 연산자 (+)

```js
console.log('Hello, ' + 'JavaScript!');
```

### 인덱싱

- 특정 위치에 있는 문자만 가져온다.

```js
문자열[index]; // index는 0부터
```

### 길이

```js
문자열.length;
```

### 대문자 or 소문자

```js
문자열.toUpperCase(); // 대문자
문자열.toLowerCase(); // 소문자
```

### 문자열 -> 숫자

```js
Number(문자열);
```

### 숫자 -> 문자열

```js
String(숫자);
숫자.toString();
```

## 숫자

```js
1;   // 정수
1.2; // 실수
```

### 실수 -> 정수

```js
parseInt(실수);
```

### 연산자

```js
+
-
*
/
% // 나머지
** // 제곱
```

## undefined와 null

```js
undefined; // 정의되지 않음
null;      // 아무것도 없음
```

## Boolean

```js
true;
false;
```

### 비교 연산자

```js
==, === // 같다
!=, !== // 다르다
>, <    // 크다
>=, <=  // 크거나 같다
```

### 논리 연산자

! : 아니다

```js
!true; // false
!false; // true
```

&& : 그리고
```js
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false
```

|| : 또는

```js
true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false
```

### 다른 자료형 -> Boolean

- 0, NaN, "", null, undefined는 false로 변환한다.
- 나머지는 true

```js
Boolean(데이터);
```
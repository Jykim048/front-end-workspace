## CSS(Cascading Style Sheet)

- 웹 페이지의 표현(디자인)을 나타내는 언어
- 특정 요소를 선택해서 원하는 "스타일"과 "기능"을 적용시킬 수 있음
```css
selector(선택자) {
    property(속성): value(값);
}
```

## 스타일 적용 방법

### 내부 방식

1. 인라인 방식

```html
<tag sytle="property:value;">
```

2. 내부 스타일

```html
<style>
    selector {
        property: value;
    }
</style>
```

### 외부 방식

3. 링크 방식

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>    

```
```css
selector {
    property: value;
}
```

## 선택자

1. 전체 선택자 : *

- HTML 문서 안의 모든 요소에 적용

2. 태그 선택자

- html 태그에 직접 효과 적용
- 해당 태그 작성 시 자동으로 효과 적용

3. 클래스 선택자

- 중복 가능
- .name {}
- <태그 class="name">

4. 아이디 선택자

- 중복 불가
- #name {}
- <태그 id="name">

5. 그룹 선택자

- A, B, C {}

6. 자손 선택자

- A B {}

7. 자식 선택자

- A > B {}

8. 속성 선택자

- 선택자[속성=속성값] : 일치
- 선택자[속성*=속성값] or 선택자[속성~=속성값]: 포함
- 선택자[속성^=속성값] or 선택자[속성|=속성값] : 시작
- 선택자[속성$=속성값] : 끝

9. 형제 선택자

- A + B : A 요소 뒤에 있는 B 요소 "하나만" 선택
- A ~ B : A 요소 뒤에 "모든" B 요소 선택

10. 구조 선택자
- 웹 문서 구조를 기준으로 특정 위치에 있는 요소를 찾아 선택할 때 사용
- 선택자:first-child : 첫 번째 요소
- 선택자:first-of-type : 첫 번째 요소
- 선택자:last-child : 마지막 요소
- 선택자:last-of-type : 마지막 요소
- 선택자:nth-child(n) : 앞에서부터 n번째 요소
- 선택자:nth-of-type(n) : 앞에서부터 n번째 요소
- 선택자:nth-last-child(n) : 뒤에서부터 n번째 요소
- 선택자:nth-last-of-type(n) : 뒤에서부터 n번째 요소 
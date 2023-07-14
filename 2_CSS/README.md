### 목차

- [선택자](#선택자)
- [텍스트 스타일](#텍스트-스타일)

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

<br>

[위로 이동](#목차)

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

11. 반응 선택자

- 사용자의 특정 동작에 따라 요소들을 선택할 때 사용
- :active : 사용자가 클릭하는 요소
- :hover : 사용자가 마우스를 올려놓은 요소
- :focus : 초점이 맞추어진 요소

12. 상태 선택자
- 웹 요소의 상태에 따라 요소들을 선택할 때 사용
- :checked : 체크된 상태의 요소
- :enabled : 사용 가능한 요소
- :disabled : 사용 불가능한 요소

## id와 class

- id: 현재 문서내에 "고유"한 값으로 "하나"만을 작성
- class : 현재 문서내에 "중복"된 값 작성 가능, "여러개" 작성 가능

## 선택자 우선순위

1. 동일한 선택자를 사용하는 경우

- 나중에 작성한 효과 적용

```html
<p>TEXT</p>
```

```css
p {
    color: red;
    color: blue;
}
```

2. 다른 방식의 선택자 사용

- CSS 적용 우선 순위
  : !important > 인라인 방식 > 아이디 선택자 > 클래스 선택자 > 태그 선택자

```html
<p class="txt" id="title">TEXT</p>
```

```css
#title {
    color: red;
}
.txt {
    color: blue;
}
p {
    color: green !important;
}
```

## BEM (Block__Element--Modifier)

- 사용자 인터페이스를 독립된 블록으로 분리함으로써 복잡한 페이지에서도 간단하고 신속하게 개발을 수행하는 것이 목적
- 규칙 : 클래스 이름은 영소문자로 입력하고, 단어는 하이픈으로 연결한다.

1. **Block**
   - 클래스 이름은 '그것이 무엇인지', '어떤 목적으로 사용하는가'를 의미하는 이름이 적절
   - 논리적이고 기능적으로 독립한 페이지 모듈
   - 특정한 콘텍스트에 의존하지 않으며 어디에서도 재사용할 수 있는 부품
   - 느슨하게 결합

2. **Element**
   - Block의 이름을 상속받고 언더스코어(_) 두 개를 입력한 뒤 Element 이름을 붙인다.
   - Block과 마찬가지로 '무엇인지'를 의미하는 단어를 사용

3. **Modifier**
   - Block 혹은 Element의 모습이나 상태 또는 움직임을 정의
   - 클래스 이름에서 형태, 기능, 역할을 유추
   - 확장하기 쉽게

```html
<ul class="menu">
     <li class="menu__item">항목1</li>
     <li class="menu__item menu__item--selected">항목2</li>
     <li class="menu__item">항목3</li>
</ul>    
```      

<br>

# 텍스트 스타일

[위로 이동](#목차)

## font-family

- 웹 문서에서 사용할 글꼴을 지정하는 속성

```css
선택자 {
    font-family: 글꼴명;
}
```

### 웹 폰트

- 구글 웹 폰트 : https://fonts.google.com

## font-size

- 글자의 크기를 지정하는 속성

```css
선택자 {
    font-size: 크기(px|em|rem|%);
}
```

### 크기를 지정하는 단위

- 절대 크기
  - **px** : 모니터의 픽셀 단위로 크기를 계산
- 상대 크기
  - em : 부모 요소에서 지정한 폰트의 대문자 M의 너비를 1em으로 계산  
  - **rem** : 최상위 요소(`html`)에서 지정한 폰트의 대문자 M의 너비를 1rem으로 계산
  - %(퍼센트) : 부모 요소의 크기에 대한 상대적인 비율로 계산

## font-weight

- 글자의 굵기를 조절하는 속성

```css
선택자 {
    font-weight: 100 ~ 900 or normal or lighter or bold or bolder;
}
```

- 100 ~ 900 : 글자의 굵기를 세밀하게 조절
- normal : 기본값 (400)
- lighter : 기본보다 더 가늘게
- **bold** : 굵게
- bolder : 기본보다 더 굵게

## font-style

- 글자를 이탤릭체로 표시하도록 지정하는 속성

```css
선택자 {
    font-style: normal or italic or oblique;
}
```

- italic : 글꼴에 디자인되어 있는 기울어진 글자를 사용

- oblique : 원래 글꼴을 기울어지게 표시

## font-variant

- 영어의 작은 대문자를 지정할 수 있는 속성

```css
font-variant : noraml or small-caps;
```

- normal : 기본값으로 일반적인 형태로 표시
- small-caps : 작은 대문자로 표시하도록 지정

## font

- 글꼴 스타일 속성을 한 번에 지정할 수 있는 속성

```css
font: font-style font-variant font-weight font-size/line-height font-family;
```

## color

- 글자의 색을 지정하는 속성
- 색을 지정하는 방법은 **영문 색이름 표기법, 16진수 표기법**, rgb/**rgba** 표기법, hs1/hsla 표기법이 있다.

```css
선택자 {
    color: 색상;
}
```

## text-decoration

- 글자에 밑줄/윗선을 긋거나 취소선을 긋는 속성

```css
선택자 {
    text-decoration: none or underline or overline or line-through;
}
```

- **none** : 글자에 선을 긋지 않는다.
- underline : 글자에 밑줄을 긋는다.
- overline : 글자 위에 선을 긋는다.
- line-through : 취소선을 긋는다.

## text-transform

- 영문자를 표시할 때 대소문자를 원하는대로 바꿀 수 있는 속성

```css
선택자 {
    text-transform: none or capitalize or uppercase or lowercase;
}
```

- none : 변환 없이 표시
- capitalize : 시작하는 첫 번째 글자를 대문자로 변환
- uppercase : 모든 글자를 대문자로 변환
- lowercase : 모든 글자를 소문자로 변환

## text-shadow

1. 텍스트에 그림자를 지정
2. 여러 개 지정 가능(","로 구분)

```css
선택자 {
    text-shadow: [dx] [dy] [blur] [color]
}
```

- dx : 그림자의 가로방향 거리를 지정한다. 양수 값은 오른쪽, 음수 값은 왼쪽에 그림자를 만든다.
- dy : 그림자의 세로방향 거리를 지정한다. 양수 값은 아래쪽, 음수 값은 위쪽에 그림자를 만든다.
- blur : 그림자의 흐려짐 정도를 나타낸다. 양수로 지정하면 그림자가 모든 방향으로 번지고, 음수로 지정하면 그림자가 모든 방향으로 축소된다.
- color : 그림자의 색상을 지정한다. 기본값은 현재 글자색

## white-space

- 여러 개의 공백을 처리하는 방법을 지정하는 속성

```css
선택자 {
    white-space : normal or nowrap or pre or pre-line or pre-wrap;
}
```

- normal : 여러 개의 공백을 하나로 표시 (기본값)
- nowrap : 여러 개의 공백을 하나로 표시, 영역을 넘어가는 내용을 줄바꾸지 않고 한 줄로 표시
- pre : 여러 개의 공백을 그대로 표시, 영역을 넘어가는 내용은 자동으로 줄 바꿔 표시
- pre-line : 여러 개의 공백을 하나로 표시, 영역을 넘어가는 내용은 자동으로 줄 바꿔 표시
- pre-wrap : 여러 개의 공백을 그대로 표시, 영역을 넘어가는 내용은 자동으로 줄 바꿔 표시

## letter-spacing

- 글자와 글자 사이의 간격을 조정하는 속성

```css
선택자 {
    letter-spacing: normal or 크기;
}
```

## word-spacing

- 단어와 단어 사이 간격을 조정하는 속성

```css
선택자 {
    word-spacing: normal or 크기;
}
```

## text-align

- 문장을 정렬하는 속성

```css
선택자 {
    text-align: left or right or center or justify;
}
```

## text-indent

- 문장을 들여쓰기 하는 속성

```css
선택자 {
    text-indent: 숫자(단위);
}
```

## line-height

- 문장의 줄 간격을 조정하는 속성

```css
선택자 {
    line-height: normal or 숫자(단위);
}
```

## text-overflow

- 영역을 벗어나는 텍스트에 대한 상태를 지정하는 속성

```css
선택자 {
    text-overflow: clip or ellipsis;
}
```

- clip : 영역을 넘어가는 텍스트를 자른다.
- ellipsis : 말 줄임으로 잘린 텍스트를 표현한다.
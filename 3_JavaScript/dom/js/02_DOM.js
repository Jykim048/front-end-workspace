function btn1() {
    console.log(document);
    console.log(document.head);
    console.log(document.title);
    console.log(document.body);
}

function btn2() {
   const div = document.getElementById("testId");
   console.log(div);
}

function btn3() {
  const div = document.getElementsByClassName("testClass");
  console.log(div);
  console.log(div[0]);
}

function btn4() {
    const div = document.getElementsByName("testName");
    console.log(div);
}

function btn5() {
    const div = document.getElementsByTagName("div");
    console.log(div);
}

function btn6() {
    let div = document.querySelector("#testid");
    div = document.querySelector(".testClass");
    console.log(div);

    let divList = document.querySelectorAll("div");
    console.log(divList);
}

function btn7() {
    // div 2개 가져오기 divList : 변수명
    const divList = document.querySelectorAll(".testClass");
    divList[0].textContent = '<span>안녕하세요</span>';
    divList[1].innerHTML = '<span>안녕하세요</span>';
}

function btn8() {
    // #testId 가져오기
    const div = document.querySelector("#testId");
    div.setAttribute("data-test", "테스트");
    console.log(div.getAttribute("data-test"));
    console.log(div.getAttribute("class"));
}

function btn9() {
    const div = document.querySelector("#testId");
    div.style.color = "orange";
    div.style.backgroundColor = "yellow";
}

function btn10() {
    const div2 = document.querySelector("#testId2");
    div2.classList.add("black");
}

function btn11() {
    const div2 = document.querySelector("#testId2");
    div2.classList.remove("black");
}

function btn12() {
    const div2 = document.querySelector("#testId2");
    const check = div2.classList.contains("black");
    console.log(check);
    if(check) {
        div2.classList.remove("black");
    } else {
        div2.classList.add("Black")
    }
}

function btn13() {
    const div2 = document.querySelector("#testId2");
    div2.classList.toggle("black");
}

function btn14() {
    const div2 = document.querySelector("#testId2");
    const p = document.createElement("p");
    p.innerHTML = "Lorem Ipsum";
    div2.appendChild(p);

    const input = document.createElement("input");
    div2.appendChild(input);
}

function btn15() {
    const div2 = document.querySelector("#testId2");
    const p = document.querySelector("p");
    //div2.removeChild(p);
    p.parentNode.removeChild(p);
}
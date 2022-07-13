const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //모든 event 멈춤 (새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 다시 숨기기
    const username = loginInput.value; //loginInput.value에 username 저장
    localStorage.setItem(USERNAME_KEY, username); //username 값을 localstorage에 저장
    paintGreeting(username); //함수호출 -> 입력한 username 값을 넘겨줌
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`; //비어있는 h1요소에 값이 넣어짐
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1요소의 class명인 hidden 삭제
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME); //참일 경우, form의 class명인 hidden 삭제
    loginForm.addEventListener("submit",onLoginSubmit); //submit이 실행될 경우 onLoginSubmit 함수 실행
}
else{
    paintGreeting(saveUsername); //거짓일 경우, paintGreeting 함수 실행
}
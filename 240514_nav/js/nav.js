// 반응형 웹의 JavaScript에서 하는 일
// 1. HTML 요소를 가져와 js 변수에 저장한다.
// 2. 이벤트 처리한다. (click, focus, mouseup 등)
// 3. 클래스를 수정하여 스타일을 적용한다.

//.nav-list
//.nav-toggle

// 햄버거 메뉴 -> 닫기 버튼
//.nav-list 아래로 내리자

// 닫기 버튼 -> 햄버거 메뉴
//.nav-list 위로 올리자

// function(par1, par2) {
//
// }

// (par1, par2) => {
//    
// }

// (par1, par2) => return 값

// ` 을 사용할 것임
// ${} --> place holder
// console.log(`${5+10} 입니다.`);

const toggleMenu = () => {
    // HTML 요소를 js로 가져오기
    const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];  // .nav-toggle 가져오자, 클래스, id 둘 다 가져와도 됨, 하지만 보통 class로만
    const navListUl = document.getElementsByClassName("nav-list")[0];       // .nav-list 가져오자
    const toggleI = navToggleDiv.getElementsByTagName("i")[0];              // .nav-toggle > <i> 가져오자

    navToggleDiv.onclick = () => {
        // class에 show-menu를 붙이거나/때자
        navListUl.classList.toggle("show-menu");

        // toggle icon 바꾸자: bi-list <-> bi-x-lg
        toggleI.classList.toggle("bi-list");
        // toggleI.classList.add("bi-list");
        // toggleI.classList.remove("bi-x-lg");
        // toggleI.classList.remove("bi-x-lg");
        // toggleI.classList.add("bi-list"); // 간결하게 토글로 한 것임 이 네 줄을
        toggleI.classList.toggle("bi-x-lg");
    }
}
toggleMenu();
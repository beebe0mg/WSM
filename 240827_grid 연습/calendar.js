// 달력

// 현재 날짜 구하자
let currentDate = new Date();      // 현재 날짜 구하기

const setCalendarHeader = (date) => {   // 날짜를 구하는 함수에게로 던짐
    // 연도 구하자
    const year = date.getFullYear();
    // 달 구하자
    const month = date.getMonth(); // 0: 1월, 1: 2월

    titleString = `${year}년 ${month + 1}월`;
    const calendarHeaderH1 = document.querySelector("#calendar-header h1");
    // calendar-header 아이디 밑에 있는 h1 태그를 가져온다. querySelector 이용
    calendarHeaderH1.innerHTML = titleString;
    // innerHTML 을 해서 titleString 을 넣어준다.
}

const changeMonth = (delta) => {
    currentDate.setMonth(currentDate.getMonth() + delta);
    setCalendarHeader(currentDate);
}

// 이전 달 버튼 이벤트 처리하자
const prevMonthButton = document.getElementById("prev-month");
// 지금 html 의 id prev-month 를 js 로 가져옴
prevMonthButton.addEventListener("click", () => changeMonth(-1));
// 버튼을 눌렀을 때의 이벤트 처리
// prevMonthButton.addEventListener("click", console.log('이번 달')); --> 하면 안 됨.
// console.log() 함수 실행한 결과를 클릭했을 때 실행하는 것임 즉, 아무 일도 안 함
// 상미야 라고 부르면 대답해야 하는데 () => 이걸 작성 안 해주면 상미야 하고 그냥 끝남..
// 그래서 함수의 꼴로 작성해 줘야 함 : 여기서는 익명 함수

// 다음 달 버튼 이벤트 처리하자
const nextMonthButton = document.querySelector("#next-month");
// querySelector 로 가져옴
nextMonthButton.onclick = () => changeMonth(1);
// onclick = addEventListener

// 일 구하자
const setCalendar = (date) => {

}

// 첫 날의 요일 구하자
// 마지막 날짜 구하자
// 마지막 날짜의 요일 구하자 - 그래야 다음 달 날 중 토요일에서 딱 끝나는 날이 며칠인지 알 수 있음

// 이전 달 뒷 날짜 구하자

// 다음 달 앞 날짜 구하자
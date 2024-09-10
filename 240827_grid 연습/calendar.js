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

setCalendarHeader(currentDate);
// 일 구하자

// 첫 날의 요일 구하자
// 마지막 날짜 구하자
// 마지막 날짜의 요일 구하자 - 그래야 다음 달 날 중 토요일에서 딱 끝나는 날이 며칠인지 알 수 있음

// 이전 달 뒷 날짜 구하자

// 다음 달 앞 날짜 구하자
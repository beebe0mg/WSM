// 달력
const calendarContainerDiv = document.querySelector("#calendar-container");

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
    // 년도, 월
    setCalendar(currentDate);
    // 일
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
// addEventListener 는 여러 개를 붙일 수 있음
// onclick 은 하나만 붙일 수 있음, 덮어쓰기가 됨

// 일 구하자
const setCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // 첫 날의 요일 구하자 - 이전 달 뒷 날짜 쓰기 위하여
    const firstDay = new Date(year, month, 1).getDay(); // 1일부터 가져와야 하니까 해당하는 년도의 달에 해당하는 1일의 요일을 구하는 것임. 0 - 일요일 ~~
    
    // 마지막 날짜 구하자 - 요일 구하기 위하여
    const lastDate = new Date(year, month + 1, 1 - 1)    // 다음 달의 1일에서 1을 빼면 자동으로 저번 달의 마지막 날로 이동해줌!!! 31일 이면 31일, 30일이면 30일, 실제 마지막 날짜만 구하려면 astDate.getDate() 이라고 써 줘야 함
    
    // 마지막 날짜의 요일 구하자 - 다음 달 앞 날짜 쓰기 위하여
    const lastDay = lastDate.getDay();
    
    // 일월화수목금토
    // const weekNameString = `<div class="item week-name">일</div>
    //         <div class="item week-name">월</div>
    //         <div class="item week-name">화</div>
    //         <div class="item week-name">수</div>
    //         <div class="item week-name">목</div>
    //         <div class="item week-name">금</div>
    //         <div class="item week-name">토</div>`;
    let weekNameString = "";
    const weekNames = "일월화수목금토";
    const weekNamesArray = weekNames.split("");   // ["일", "월", "화", "수", "목", "금", "토"]
    weekNamesArray.forEach((weekName) => {  // weekName 오타 아니고 새로운 변수임
        weekNameString += `<div class="item week-name">${weekName}</div>`
    });

    calendarContainerDiv.innerHTML = weekNameString;
    
    // 이전 달 뒷 날짜 구하자
    // 0(일요일) ~ 이번 달 1일의 요일 - 1까지 이전 달 마지막 날짜 - 이번 달 1일의 요일 + 1(시작날짜)부터 +1해서 쓰자
    for (let date = lastDate.getDate() - firstDay + 1; date <= lastDate.getDate(); date++) {
        let prevMonthDateDiv = document.createElement("div");   // <div></div>
        prevMonthDateDiv.className = "item other-month";     // <div class="item other-month"></div>
        prevMonthDateDiv.textContent = date;                 // <div class="item other-month">1</div>
        calendarContainerDiv.appendChild(prevMonthDateDiv);  // <div id="calendar-container"><div class="item">1</div></div>
    }
    
    // 이번 달 날짜들 쓰자 - 9월 달 : 1 ~ lastDate.getDate()
    // let dateString = "";
    // for (let date = 1; date <= lastDate.getDate(); date++) {
    //     dateString += `<div class="item">${date}</div>`;
    // }
    // console.log(dateString);
    
    // calendarContainerDiv.innerHTML += dateString;
    // div 요소 만들자, class 에 item 넣자, text 에 날짜 넣자. calendarContainerDiv 에 자식으로 붙이자
    for (let date = 1; date <= lastDate.getDate(); date++) {
        let currentMonthDateDiv = document.createElement("div");    // <div></div>
        currentMonthDateDiv.className = "item";                     // <div class="item"></div>
        currentMonthDateDiv.onclick = (event) => clickDate(event);  // <div class="item" onclick="clickDate"></div>
        currentMonthDateDiv.dataset.date = `${year}-${month+1}-${date}`;    // <div class="item" onclick="clickDate" data-date="년-월-일"></div>
        currentMonthDateDiv.textContent = date;                     // <div class="item">1</div>
        calendarContainerDiv.appendChild(currentMonthDateDiv);      // <div id="calender-container"><div class="item">1</div></div>
    }
    
    // 다음 달 앞 날짜 구하자
    // 9월 달은 이번 달 마지막 날의 요일 + 1(화요일) ~ 6(토요일) 까지 1부터 차례대로 날짜 쓰자
       // 다음 달 앞 날짜 구하기
    // 1~? ?: 6 - 이번달 마지막 날짜의 요일
    for (let date = 1; date <= 6 - lastDay; date++) {
        let currentMonthDateDiv = document.createElement("div");   // <div></div>
        currentMonthDateDiv.className = "item other-month";     // <div class="item other-month"></div>
        currentMonthDateDiv.textContent = date;                 // <div class="item other-month">1</div>
        calendarContainerDiv.appendChild(currentMonthDateDiv);  // <div id="calendar-container"><div class="item">1</div></div>
    }
}


setCalendarHeader(currentDate);
setCalendar(currentDate);
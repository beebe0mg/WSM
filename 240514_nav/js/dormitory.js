let allData;        // 초기 설정에 필요한 모든 데이터 : 세탁기, 시간, 호실
let weeklyReservation;  // 미리 정해진 요일별 예약 데이터
let newReservation;     // 사용자가 새롭게 지금 입력하는 예약 정보. 1페이지에서 초기화하자
let reservations;       // 사용자가 예약한 정보들의 덩어리

// selection-item 요소들 가져오자
// 얘는 여러 개임!
const selectionItemDivs = document.getElementsByClassName("selection-item");

// 네 개의 페이지 요소 가져오자
const calendarDiv = document.getElementById("calendar");
const selectionWashingmachineTimeDiv = document.getElementById("selection-washingmachine-time");
const selectionRoomNameDiv = document.getElementById("selection-room-name");
const BoardDiv = document.querySelector("#board");

// 네 개를 쭉 한 공간에 넣어두고, 하나씩 꺼내서 화면에 보여주기 (화면에는 하나만 나와야 함)
const pageDivs = [calendarDiv, selectionWashingmachineTimeDiv, selectionRoomNameDiv, BoardDiv];
console.log(pageDivs);

// 초기 데이터 가져오자. allData.json, weekly-reservation.json
const initData = () => {
    const getAllData = () =>  {
        const url = 'js/allData.json';
        fetch(url)
        .then(response => response.json())
        .then(data => allData = data)
        .catch(error => console.log(error.message))
    }
    const getWeeklyReservation = async() => {
        const url = 'js/weekly-reservation.json';
        try {
            const response = await fetch(url);
            const data = await response.json();
            weeklyReservation = data;
        } catch (error) {
            console.log(error.message);
        }
    }
    getAllData();
    getWeeklyReservation();

    // console.log(allData.washingmachine);
    // console.log(allData["washingmachine"]);
}


const setPage = (page) => {
    // clear selection 
    for (const selectionItemDiv of selectionItemDivs) {
        // hover 했을 때의 스타일을 지운다.
        selectionItemDiv.classList.remove("select-menu");
    }

    // selection 하나만 칠하자
    // pageDivs 가 BoardDiv 가 아닐 때만.... 들어가자
    if (page != 4) {    // 세탁기 예약 현황표는 selection 이 없음
        selectionItemDivs[page-1].classList.add("select-menu");
    }

    // clear pageDivs
    // pageDiv 를 foreach 로 pageDivs 에서 가져오고 하나씩 보여주는 게 너무 힘드니까 우선은 전부 안 보이게!
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none";
    })
    
    // show pageDiv 1
    // pageDivs 의 배열의 calendarDiv 하나를 보여주자!
    pageDivs[page-1].style.display = "block";
}

// calender.js 에서 98 ~ 99 번째 줄
// 달력에서 날짜를 클릭하면 날짜의 데이터를 가져와서 newReservation 의 "date" 에 넣어주고 2페이지로 이동한다
const clickDate = (event) => {
    // 예약 정보 초기화 하자
    newReservation = {
        "name" : undefined,
        "room" : undefined,
        "date" : undefined,
        "time" : undefined,
        "washingmachine" : undefined,
        "notification" : true
    };
    // 날짜 data 가져오자
    const dateString = event.target.dataset.date;
    const dateDate = new Date(dateString);
    // 날짜 data 보관하자
    newReservation.date = dateDate;
    // 2페이지로 가자
    setPage(2);
}

initData();
setPage(1);
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

// setPage(4);
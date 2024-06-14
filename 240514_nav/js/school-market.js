
const getData = (() => {
    const url = 'js/data.json';
    fetch(url)  /* 내 페이지는 정상적으로 동작하면서 비동기적으로 다 일 처리 하고 있는 것임 */
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
getData();
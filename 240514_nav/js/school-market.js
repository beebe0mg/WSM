let allData;

const showData = (data) => {
    // data 하나씩 뽑아서 <article> -> .product_container 의 자식으로 넣는다. <- HTML 로 가져오자
    const productContainerSection = document.getElementsByClassName("product-container")[0];
    
    articleString = "";
    data.forEach(element => {   /* 파라미터가 하나 있을 때는 괄호 생략 가능 */
        articleString += `    <article class="product-item">
        <img src="images/${element["image"]}" alt="${element.name}" class="product-image">
        <div class="product-name">${element.name}</div>
    </article>\n`
    });
    
    productContainerSection.innerHTML = articleString
}

const setData = (data) => {
    allData = data
    showData(data);

    // // 무뚝뚝.webp 출력하자
    // console.log(data[3].image)
    // console.log(data[3]["image"])   // 시험 문제임! data[3].["image"]가 아니라는 것 주의하자!
    
    // // 허니버터칩 출력하자
    // console.log(data[9].name)
    // console.log(data[9]["name"])
}

const getData = (() => {
    const url = 'js/data.json';
    fetch(url)  /* 내 페이지는 정상적으로 동작하면서 비동기적으로 다 일 처리 하고 있는 것임 */
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
});
getData();

const searchData = (query) => {
    console.log(query)
    // data 하나 씩 꺼내어, name이랑 query 비교해서 있으면, 모아놓자.
    let searchData = allData.filter((oneData) => oneData["name"].includes(query) || oneData["category"].includes(query));
    showData(searchData);
}
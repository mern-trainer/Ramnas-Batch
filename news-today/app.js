const news_api = "https://ok.surf/api/v1/cors/news-feed"

const business = document.getElementById("business");

fetch(news_api).then((response) => {
    return response.json();
}).then((data) => {
    const { Business } = data;
    for (let i = 0; i < Business.length; i++) {
        const article = Business[i];
        business.innerHTML += `<h2>${article.title}</h2>`;
        business.innerHTML += `<img src="${article.og}" alt="icon"/><br><h3>${article.title}</h3>`;
        business.innerHTML += `<div class="source"><img src="${article.source_icon}" alt="icon"/> <div>${article.source}</div></div>`;
        business.innerHTML += `<p><a href="${article.link}" target="_blank">Read More</a></p><br><br>`
    }
}).catch((error) => {
    console.log(error);
})
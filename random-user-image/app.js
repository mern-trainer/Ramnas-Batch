const img_container = document.getElementById("user-image")

const handleUserImage = () => {
    img_container.innerHTML = "Loading Image..."
    fetch("https://randomuser.me/api/").then((response) => {
        return response.json();
    }).then((data) => {
        img_container.innerHTML = `<img src=${data.results[0].picture.large} alt="user image"><br>
        <p>Name: ${data.results[0].name.first} ${data.results[0].name.last}</p>`
    }).catch((error) => {
        console.log(error);
    })
}
handleUserImage()
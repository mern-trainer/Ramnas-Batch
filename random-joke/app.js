const joke_api = "https://v2.jokeapi.dev/joke/Any"

const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const joke = document.getElementById("joke");
const loading = document.getElementById("loading");

const handleJokeGenerate = async () => {
    loading.innerHTML = "Generating Joke...";
    setup.innerHTML = "";
    delivery.innerHTML = "";
    joke.innerHTML = "";
    fetch(joke_api).then((response) => {
        return response.json();
    }).then((data) => {
        loading.innerHTML = "";
        if (data.type === "twopart") {
            setup.innerHTML = data.setup;
            delivery.innerHTML = data.delivery;
        }
        if(data.type === "single") {
            
            joke.innerHTML = data.joke;
        }
    }).catch((error) => {
        console.log(error);
    })
}
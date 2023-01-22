let pSelector = document.querySelector(".ville");
let btnSelector = document.querySelector("Button");
let temperatureSelecor = document.querySelector(".temps");
let iconSelector = document.querySelector(".icon");
let desc = document.querySelector(".description");

btnSelector.addEventListener("click", function () {
    let inputSelector = document.querySelector("input");
    console.log(inputSelector.value);

    fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${inputSelector.value}&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric&lang=fr`
    ).then((response) => {
      console.log(response);
      return response.json();
    })
    .then((weatherCity) =>{
    console.log(weatherCity);
    console.log(weatherCity.name)
    pSelector.textContent = weatherCity.name
    temperatureSelecor.textContent = `${Math.round(weatherCity.main.temp)}°`
    iconSelector.src = `http://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`
    desc.textContent = weatherCity.weather[0].description
    }) 
})

/*
<section>
    <article>
        <p>Choisis une ville :</p>
        <input type="text">
        <button>valider</button>
    </article>
</section>
*/

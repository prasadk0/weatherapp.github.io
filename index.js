let weather = {
    "apiKey":"c922da19c836923cdf31071ec6ab1000",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
    .then((response)=>response.json()).then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){

        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText= `weather of ${name}`;
        document.querySelector(".temp").innerText= `Temprature  ⇏  ${temp}`;
        // document.querySelector("city").innerText= `weather of ${}`;
        document.querySelector(".description").innerText= `Description  ⇏ ${description}`;
        document.querySelector(".humidity").innerText= `Humidity  ⇏  ${humidity}`;
        document.querySelector(".wind").innerText= `Wind  ⇏  ${speed}km/hr`;
        const link = `https://source.unsplash.com/1600x900/?${description}`
        console.log(link);
        document.body.style.cssText=`background-image:url(${link})`;
    }
}
const btn = document.getElementById('click');
btn.addEventListener('click',()=>{
    const input = document.getElementById('search');
    if(input.value===""){
        return;
    }else {
       weather.fetchWeather(input.value);
       input.value="";
    }
})
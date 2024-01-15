const searchInput = document.getElementById('search-input')
const sitButton = document.getElementById('sit-button')
let contact = document.getElementById('contact');


contact.addEventListener('click', function(e) {
        window.location.href = 'contact/contact.html' ;
}); 

let Data = [];
let date = new Date();
let options = { weekday: 'long' };

async function getData(country) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=851232df8e1d4fffa2e203626241301&q=${country}&days=3`
  );
  let finalresponse = await response.json();

  Data = []; 
  Data.push(finalresponse);
  console.log(Data[0].forecast.forecastday[1].day.maxtemp_c);
  displayC(); 
  displayT(); 
  displayA(); 
}

document.addEventListener('DOMContentLoaded', function() {
  const defaultCountry = 'cairo'; 
  getData(defaultCountry);
});

searchInput.addEventListener('input', function(){
  let country = searchInput.value;
  if (country === '') {
    
    country = 'cairo'; 
  }
  getData(country);
});

getData();
function displayC() {
        const countrey = Data[0].location.name ;
        const time = Data[0].location.localtime;
        const text = Data[0].current.condition.text;
        const icon = Data[0].current.condition.icon ;
        const tempT = Data[0].current.feelslike_c;
        const tempC = Data[0].current.temp_c ;
        const tempF = Data[0].current.feelslike_f;
        let cartona = '';
        cartona += `
        <div class=" date-info p-2 d-flex  justify-content-between  " > 
        <div class="day ms-2" >
          ${date.toLocaleDateString('en-US', options)}
        </div>
        <div class="date me-2 ">
          ${date.toLocaleDateString( options)}
        </div>
      </div>
      <div class="weather-info  " >
        <div class="d-flex ms-4 pt-3" >
          <span>${countrey}</span>
        </div>
        <div class="Degree  d-flex align-items-center">
          <div class=" ms-4 deg " >${tempC}°C</div>
          <div class=" mt-5 icon ">
          <img src="https:${icon}" alt="">
          </div>
        </div>
        <div class=" state d-flex ms-4 mt-5" ><span>${text}</span></div>
        <div class="icons ms-4 d-flex justify-content-between mt-4 pb-5 " >
          <img  src="photos/sdaadasd4.png" alt="icon"> <span>20%</span>
          <img  src="photos/sdaadasd5.png" alt="icon"> <span>18km/h</span>
          <img   src="photos/sdaadasd6.png" alt="icon"> <span>East</span>
        </div>
      </div>
        `
        document.getElementById("card1").innerHTML = cartona
    }


function   displayT () {
    const time = Data[0].forecast.forecastday[1].date ;
    const text = Data[0].forecast.forecastday[1].day.condition.text  ;
    const icon =  Data[0].forecast.forecastday[1].day.condition.icon ;
    const tempC = Data[0].forecast.forecastday[1].day.maxtemp_c;
    const tempT =  Data[0].forecast.forecastday[1].day.mintemp_c;

    let cartona = '' ;

    cartona += `
    <div class="day1 pt-2  " >
    <p>${time}</p>
  </div>
  <div class="card1" >
    <div class="card1-img">
      <img src="https:${icon}" alt="icon">
    </div>
    <div class="fs-1" >
      ${tempC}°C
    </div>
    <div class="fs-5" >
      ${tempT}°C
    </div>
    <div class="mt-3 card1-s " >
      <span>${text}</span>
    </div>
  </div>
    `

    document.getElementById("card2").innerHTML = cartona
}










function   displayA () {
    const time = Data[0].forecast.forecastday[2].date ;
    const text = Data[0].forecast.forecastday[2].day.condition.text  ;
    const icon =  Data[0].forecast.forecastday[2].day.condition.icon ;
    const tempC = Data[0].forecast.forecastday[2].day.maxtemp_c;
    const tempT =  Data[0].forecast.forecastday[2].day.mintemp_c;

    let cartona = '' ;

    cartona += `
    <div class="day2 pt-2 " >
    <p>${time}</p>
  </div>
  <div class="card2" >
    <div class="card2-img">
      <img src="https:${icon}" alt="icon">
    </div>
    <div class="fs-1" >
      ${tempC}°C
    </div>
    <div class="fs-5" >
      ${tempT}°C
    </div>
    <div class="mt-3 card2-s " >
      <span>${text}</span>
    </div>
  </div>
    `

    document.getElementById("card3").innerHTML = cartona
}
















// let Data = [];

// async function getData() {
//   try {
//     const response = await fetch(
//       'https://api.weatherapi.com/v1/current.json?key=98e8778e13354f138f5155304241301&q=paris'
//     );
//     const finalResponse = await response.json();
//     Data.push(finalResponse);
//     console.log(Data[0].location.name);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// getData();




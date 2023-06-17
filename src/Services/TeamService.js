// async function handleGetExampleAPI(){
//     await fetch (`http://localhost:11000/WeatherForecast/GetWeatherForecast`,{
//       method: 'get',
//       headers: {
//         'Authorization' : 'Bearer ' + token,
//         'Content-type': 'application/json',
//       }
//     })
//       .then(res => res.json())
//       .then(res => {
//         if(res.length > 0){
//           setResponsedate(res[0].date)
//           setResponsesummary(res[0].summary)
//           setResponsetemperatureC(res[0].temperatureC)
//           setResponsetemperatureF(res[0].temperatureF)
//           alert("API request succeed");
//         }else{
//           alert("API request failed");
//         }
//       })
//   }

const TeamService = {
  
};
  
export default TeamService;
  
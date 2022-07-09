import React, { useEffect, useState } from 'react'

 const Weathercard = ({tempInfo}) => {
const [weatherState,setWeatherState]=useState("");

    const {temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=tempInfo;

    useEffect(() =>{
        if(weathermood){
            switch(weathermood){
                case "Clouds": setWeatherState("wi-cloudy");
                break;
                case "Haze" : setWeatherState("wi-fog");
                break;
                case "Clear" : setWeatherState("wi-day-sunny");
                break;
                case "Rain" : setWeatherState("wi-rain");
                break;
                case "Mist" : setWeatherState("wi-dust");
                break;
                case "Thunderstorm" : setWeatherState("wi-day-lightning");
               
                break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    },[weathermood]);


    let sec=sunset;
    let date=new Date(sec*1000);
    let timestr=`${date.getHours()}:${date.getMinutes()}`

  return (
    <>
    <article className='widget'>
    <div className='weatherIcon'>
        <i className={`wi ${weatherState}`}></i>
        {/* <i className="wi wi-night-sleet"></i> */}
    </div>
<div className='weatherInfo'>
    <div className='temperature'>
        <span>{temp}&deg;</span>

    </div>
    <div className='description'>
        <div className='weatherCondition'>
            {weathermood}
        </div>
        <div className='place'> {name} ,{country}</div>
    </div>
</div>
<div className='date'>{new Date().toLocaleString()}</div>


<div className='extra-temp'>
    <div className='temp-info-minmax'>
    <div className='two-sided'>

        <p> <i className={'wi wi-sunset'}></i></p>
        {/* <p><i className={'wi wi-rain'}></i></p> */}
        <p className='extra-info-leftside'>
           {timestr} PM<br/> sunset
        </p>
    </div>
    <div className='two-sided'>
        {/* <p> <i className={'wi wi-humidity'}></i></p> */}
        <p><i className={'wi wi-humidity'}></i></p>
        <p className='extra-info-leftside'>
           {humidity} <br/> Humidity
        </p>
    </div>
    </div>



    <div className='weather-extra-info'>
 <div className='two-sided'>

        <p> <i className={'wi wi-rain'}></i></p>
        {/* <p><i className={'wi wi-rain'}></i></p> */}
        <p className='extra-info-leftside'>
           {pressure} <br/> Pressure
        </p>
    </div>
    <div className='two-sided'>
        {/* <p> <i className={'wi wi-sunset'}></i></p> */}
        <p><i className={'wi wi-strong-wind'}></i></p>
        <p className='extra-info-leftside'>
           {speed} <br/> Speed
        </p>
    </div>
    
    </div>
    
    
    </div>


</article>
<div className='foot'>
<hr className="mb-4" />
        <section className="mb-4 text-center">
          <a
            className="btn btn-outline-dark btn-floating m-1 fa-1x btn btn-primary"
            href="https://www.facebook.com/yash.kaka.5"
            role="button"
          >
            <i className="fab fa-facebook-f fa-2x" /></a>

            <a
           className="btn btn-outline-info btn-floating m-1 fa-1x btn btn-info"
           href="https://twitter.com/Yashkaka02"
           role="button"
           ><i className="fab fa-twitter fa-2x" style={{color:"white"}}></i
          ></a>

        {/* <a
           className="btn btn-outline-danger btn-floating m-1 fa-1x btn btn-light"
           href="https://mail.google.com/"
           role="button"
           ><i className="fab fa-google fa-2x " style={{color:"black"}}></i
          ></a> */}
       <a
           className="btn btn-outline-dark btn-floating m-1 fa-1x btn btn-dark"
           href="#!"
           role="button"
           ><i className="fab fa-instagram fa-2x"style={{color:"#8a3ab9"}} ></i
          ></a>
        <a
           className="btn btn-outline-dark btn-floating m-1 fa-1x btn btn-primary"
           href="https://www.linkedin.com/in/yash-kaka-33a56a1bb"
           role="button"
           ><i className="fab fa-linkedin-in fa-2x "style={{color:"white"}}></i
          ></a>
          <a
           className="btn btn-outline-dark btn-floating m-1 fa-1x btn btn-dark bold"
           href="https://github.com/Yashkaka"
           role="button"
           ><i className="fab fa-github fa-2x"style={{color:'bisque'}}></i></a>

          
</section>
</div>
    </>
  )
}


export default Weathercard;
// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=22e55085f53f22c8c0d1da3227ebd46c
import React ,{useEffect, useState} from 'react';
import './style.css';
import Weathercard from './weathercard';


const Temp =()=>{


    const [searchValue,setSearchValue]=useState('Mumbai');
    const [tempInfo,settempInfo]=useState({})
    const getWeatherInfo=async()=>{
        try{
             let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=22e55085f53f22c8c0d1da3227ebd46c`
          const res=await fetch(url);
          const data=await res.json();
            const {temp,humidity,pressure,}=data.main;
            const {main:weathermood}=data.weather[0]
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
            // console.log(data)
                const myNewWeatherInfo ={
                    temp,humidity,pressure,weathermood,name,speed,country,sunset
                };

                settempInfo(myNewWeatherInfo);
         }catch(error){
            console.log(error)
        }
    };

    useEffect(() =>{getWeatherInfo();},[])
    return (<>
<div className='wrap'>
  <div className='search'>
      <input type="search"
      placeholder='search...'
      autoFocus id='search'
      className='searchTerm'
      value={searchValue}
      onChange={(e)=> setSearchValue(e.target.value)}/>
     
     <button className='searchButton' type='button' onClick={getWeatherInfo}>
         search
     </button>
      </div>  
    </div>  

{/* temp card */}

<Weathercard tempInfo ={tempInfo}/>

 </> );
};

export default Temp;
import React from 'react'
// import {TiWeatherSunny, TiWeatherPartlySunny, TiWeatherCloudy, TiWeatherNight} from 'react-icons/ti';

const InfoTab = ({handleShow, show, city, temp, min, max, message, weather}) => {

  return (
        <div className = {`${show === true ? "h-2/5" : "h-0"} overflow-hidden relative w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all rounded-b-2xl text-white shadow-blue-500 pt-4`}>    

            <div className='flex flex-col justify-center items-center space-y-4 p-8'>

            <button onClick={handleShow} className={`${show === true ? "top-0 opacity-100" : "bottom-0 opacity-0"} bg-white absolute right-0 h-8 aspect-square text-black`}>X</button>

            {
                !city ? (<p className='text-3xl font-bold'>{message}</p>) : (
                    <div> 
                        <div className='flex flex-col items-center'>
                            <span className='text-3xl'>
                                  {city}</span>
                            <span className='text-2xl'>{"Temperature : " + temp + " deg"}</span>
                        </div>
                        <div className='w-full flex justify-around'>
                        <span>{"Max Temp : " + max + " "}</span>
                        <span>{"Min Temp : " + min}</span>
                        </div>
                    </div>
                )
            }


            <div/> 

            </div>
        </div>
  )
}

export default InfoTab
import { useState, useEffect } from "react";
import InfoTab from "./components/infoTab";
import SearchTab from "./components/searchTab";

function App() {
  const [city, setCity] = useState(null);

  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchApi = async () =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=74da3836de68daf018dc9abb8690c92b`;
      const response = await fetch(url);
      const res = await response.json();

      if(res.message === "city not found"){
        setCity(null);
      }else {
        setCity({
          city : search.toUpperCase(),
          temp : res.main.temp,
          max : res.main.temp_max,
          min : res.main.temp_min,
        })
      }

    }
    fetchApi();
  }, [search])

  const handleShow = () =>{
    setShow(prev => !prev);
    setSearch("");
  }

  const handleSearch = (event) =>{
    setSearch(event.target.value);
  }

  const handleSubmit = (res) => {
    if(!show) setShow(prev => !prev);
  }

  return (
    <div className="h-screen w-screen p-4 flex flex-col justify-center space-y-1">
      <SearchTab handleSearch = {handleSearch} handleSubmit = {handleSubmit} value = {search} />
      {
        !city ? <InfoTab handleShow={handleShow} show = {show} city = {city} message = {"City Not Found"}/> : <InfoTab handleShow = {handleShow} show = {show} city = {city.city} temp = {city.temp} max = {city.max} min = {city.min}/>
      }
    </div>
  );
}

export default App;

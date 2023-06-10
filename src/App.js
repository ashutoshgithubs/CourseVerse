import React, { useState,useEffect } from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter";
import { apiUrl, filterData  } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";



const App = () => { 

  const [courses, setCourses]=useState(null); //If passing empty array [] then loader has to be set true initially.
  const [loader, setLoader]=useState(true);
  const [category, setCategory]=useState(filterData[0].title);

  
  async function fetchData() {
    setLoader(true);
    try{
      let response = await fetch(apiUrl);
      let result = await response.json();
      setCourses(result.data);
      }
      catch(error) {
        toast.error("404 Not Found!");
      }
      setLoader(false);
    }
  
    useEffect(() => {
      fetchData();
    }, [])

  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)] bg-no-repeat bg-center bg-cover min-h-screen">
      <div>
        <Navbar/>
      </div>
      <div >
      <div >
        <Filter filterData={filterData} category={setCategory} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loader? (<Spinner/>): (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>
      
  
    </div>
  );
};

export default App;

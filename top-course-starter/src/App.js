import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify"
const App = () => {

  const [courses, setCourses] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl)
        const output = await res.json();
        // console.log(data);
        setCourses(output.data);

      } catch (error) {
        toast.error("Wrong")
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  )
};

export default App;

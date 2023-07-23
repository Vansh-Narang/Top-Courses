import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify"
const App = () => {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState(null)
  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(apiUrl)
      const output = await res.json();
      // console.log(data);
      setCourses(output.data);
    } catch (error) {
      toast.error("Wrong")
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} />)
        }
      </div >
    </>

  )
};

export default App;

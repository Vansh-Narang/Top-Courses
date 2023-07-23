import React from 'react'
import Card from "../Components/Card"
const Cards = (props) => {
    let courses = props.courses
    function getCourses() {
        let allCourses = [];
        // console.log("first")
        // console.log(courses)
        Object.values(courses).forEach(array => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    return (
        <div>
            {
                getCourses().map((course) => {
                    return < Card key={course.id} course={course} />
                })
            }
        </div>
    )
}

export default Cards
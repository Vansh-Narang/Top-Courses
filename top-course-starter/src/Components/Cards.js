import React from 'react'
import Card from "../Components/Card"
function Cards({ courses }) {
    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }

    return (
        <div>
            {
                getCourses().map((course) => {
                    <Card />
                })
            }
        </div>
    )
}

export default Cards
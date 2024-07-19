import ExploreCourses from '@/components/ExploreCourses';
import React from 'react'

const courses = () => {
  return (
    <div>
      <ExploreCourses/>
    </div>
  )
}
export function generateMetadata(){
  return{
    title:" Courses",
    description:"Contains  courses",
    keywords:"Courses,details,study material,academic topper",
    robots:"index, follow",
    language:"EN",

  }
}


export default courses;

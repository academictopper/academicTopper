import { AllCourses } from '@/components/AllCourses'
import React from 'react'

function page() {
  return (
    <div><AllCourses/>
    </div>
  )
}

export function generateMetadata(){
  return{
    title:"All Courses",
    description:"Contains all the courses",
    keywords:"Courses,details,study material,academic topper",
    robots:"index, follow",
    language:"EN",

  }
}


export default page
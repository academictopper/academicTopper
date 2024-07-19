import Profile from "@/components/Profile"
import React from 'react'

function ProfileComp() {
  return (
    <div><Profile/></div>
  )
}
export function generateMetadata(){
  return{
    title:"Profile",
    description:"Contains Profile",
    keywords:"Courses,details,study material,academic topper",
    robots:"index, follow",
    language:"EN",

  }
}


export default ProfileComp
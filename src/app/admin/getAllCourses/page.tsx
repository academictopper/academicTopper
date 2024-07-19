import AdminCourses from '@/components/AdminCourses'
import { Spotlight } from "@/components/ui/Spotlight";

import React from 'react'

const AdminData = () => {
  return (
    <div className='bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <AdminCourses/>
    </div>
  )
}
export function generateMetadata(){
  return{
    title:"Academic Topper",
    description:"Academic topper",
    keywords:"Academic topper",
    robots:"index, follow",
    language:"EN",

  }
}

export default AdminData;

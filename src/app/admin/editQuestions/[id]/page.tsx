// import { BookCompetetionFormDynamic } from '@/components/BookCompetetionFormDynamic'
import { EditAdminCoursesDynamic } from '@/components/EditAdminCoursesDynamic';
import React from 'react'

const EditQuestionsDynamic = ({ params }: any) => {

  return (
    <div >
        <EditAdminCoursesDynamic params={params}/>
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

export default EditQuestionsDynamic;
import { AdminPortal } from "@/components/AdminPortal";


const AdminPage = () => {
  return (
    <div>
        <AdminPortal/>
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

export default AdminPage;
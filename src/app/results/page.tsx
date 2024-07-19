import { Suspense } from "react";
import Results from "@/components/Results";

const ShowResult = ({ params }: any) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Results />
      </Suspense>
    </div>
  );
};

export function generateMetadata(){
  return{
    title:"Results",
    description:"Contains all the Results",
    keywords:"Courses,details,study material,academic topper",
    robots:"index, follow",
    language:"EN",

  }
}

export default ShowResult;

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

export default ShowResult;

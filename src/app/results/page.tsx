import Results from '@/components/Results';
import React from 'react'

const ShowResult = ({ params }: any) => {
  return (
    <div>
      <Results params={params} />
    </div>
  )
}

export default ShowResult;

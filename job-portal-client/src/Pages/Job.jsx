import React from "react"
const Job = ({result}) => {
  return (
    <>
     
      <div>
        {/* for showing no of jobs in form of cards  like 4 jobs*/}
        <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
      </div>
      {/* //here result is all the data we are filtering in form of card,,,, in card
      we have data */}
      <section >{result}</section>
    </>
  );
}
export default Job
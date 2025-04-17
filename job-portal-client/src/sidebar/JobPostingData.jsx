import React from "react"
import InputField from "../components/InputField";
const JobPostingData = ({handleChange}) => {
    const now=new Date();//gives current date and time
    console.log(now);//16 jul with time
 const twentyFourHoursAgo=new Date(now-24*60*60*1000)//*60 is hor then*60 is min*1000 is milisec
 const SevenDaysAgo = new Date(now - 7*24 * 60 * 60 * 1000);
 const ThirtyDaysAgo = new Date(now - 30*24 * 60 * 60 * 1000);
 console.log(twentyFourHoursAgo); //15jul with time
 //convert date to string
 const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
 const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0, 10);
 const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10);
 console.log(twentyFourHoursAgoDate);//2024-07-15
 return (
   <div>
     <h4 className="text-lg font-medium mb-2">Date Of posting</h4>
     <div>
       <label className="sidebar-label-container">
         <input
           type="radio"
           name="test"
           id="test"
           value=""
           onChange={handleChange}
         />
         <span className="checkmark"></span>Alltime
       </label>
       <InputField
         handleChange={handleChange}
         value={twentyFourHoursAgoDate}
         title="Last 24 Hours"
         name="test"
       />
       <InputField
         handleChange={handleChange}
         value={SevenDaysAgoDate}
         title="Last 7 Days"
         name="test"
       />
       <InputField
         handleChange={handleChange}
         value={ThirtyDaysAgoDate}
         title="Last Month"
         name="test"
       />
      
     </div>
   </div>
 );
       
  
}
export default JobPostingData
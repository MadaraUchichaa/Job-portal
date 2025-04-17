// using rafce
// 1.home 2 nd banner  we pass this query and set query in home and then as props in banner and use in banner
import { useState ,useEffect} from "react";
import React from "react"
import Banner from "../components/Banner"
import Card from "../components/Card";
import Job from "./Job";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";
const Home = () => {
  const [selectedCategory,setSelectedCategory]=useState(null);
  //defalut valueis array of jobs(jobs.json)
  const[jobs,setJobs]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  //for giving on page page not found ya loading if w dont get any filtered item
  const[currentPage,setCurrentPage]=useState(1);
  const itemsPerPage=6;//6 items per page
  //ny this we will get data which is prent in jobs.json on console
  useEffect(()=>{
    setIsLoading(true);
      fetch("http://localhost:3000/all-jobs")//"jobs.json"
        .then((res) => res.json())
        .then((data) => {
          //console.log(data)
          //now data jobs.json set in jobs
          setJobs(data);
          //when we get data then setisloading is false
          setIsLoading(false);
        });
     
  },[])
  //now in jobs we have data(jobs.json)
  console.log(jobs);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);//when we type anything
  };
//filter jobs by title
 const filteredItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1);//mtlb hum jo enter kr rhe (query)usko filter kr rhe accroding to job (jobs.json) aur filter nikal rhe
 console.log(filteredItems)

//Radio based  filtering
const handleChange=(event)=>{
  setSelectedCategory(event.target.value);
}
//button based fitering
const handleClick=(event)=>{
   setSelectedCategory(event.target.value);
}
//claculate the index range
const claculatePageRange =()=>{
  const startIndex=(currentPage-1)*itemsPerPage;
  const endIndex=startIndex+itemsPerPage;
  return {startIndex,endIndex};
}
//function for the next page
const nextPage=()=>{
  if(currentPage<Math.ceil(filteredItems.length/itemsPerPage))
  {
    setCurrentPage(currentPage+1);
  }
}
//function for the previous page
const prevPage=()=>{
  if(currentPage>1)
    setCurrentPage(currentPage-1);

}
//main task or main function
const filteredData=(jobs,selected,query)=>{
  let filteredjobs=jobs;
  //filtering input items
  if(query){
    filteredjobs=filteredItems;
  }
  //category filtering
  if(selected){
    filteredjobs = filteredjobs.filter(({
      jobLocation,
      maxPrice,
      experienceLevel,
      salaryType,
      employmentType,
      postingDate
    })=>(
        jobLocation?.toLowerCase()===selected.toLowerCase()||
        //since max price is in string so converted to integer and selected also to intger
      parseInt(maxPrice)<=parseInt(selected)||
      postingDate>=selected||//this checks the given date in card >=what we are selecting ex.last 24 hours ...upon which filtering is  done...(return true or false)..this not working tbhi word krrha jb sb commemnt out kr rhe saare filter aur bs isko likh rhe//selected mtlb jo hum selct kr rhe aur posting date mtlb jobs.json vala
        salaryType?.toLowerCase()===selected.toLowerCase() ||
        //4.home.jsx me main function me filtering perform kro
        employmentType?.toLowerCase()===selected.toLowerCase()||//emplyment type from card and selected mtlb vo jo hum select kr rhe radio button se like full-time.. any..etc and based upon that filtering
        experienceLevel?.toLowerCase()===selected.toLowerCase()
       


    ));
    console.log(filteredjobs)

    
  }
 

 //slide the data based upon current page
 //destructuring the function
 const{startIndex,endIndex}=claculatePageRange();
 filteredjobs=filteredjobs.slice(startIndex,endIndex);
  return filteredjobs.map((data,i)=><Card key={i} data={data}/>)

}
 const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* this is for job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm ">
          {/* first job then card  */}
          {/* if loading is true then loadding... else loading false mtlb data is loaded showing data ....if result.length>0 then only result else 0jobs nodatafound */}
          {isLoading ? <p className="font-medium">Loading....</p> : result.length>0?(<Job result={result} />):<>
          <h3 className="text-lg font-bold mb-2">{result.length} jobs </h3>
          <p>No data found</p>
          </>}
         {/* pagination here */}
         {
          result.length>0?(
            <div className="flex justify-center t-4 space-x-8">
              <button onClick={prevPage} disabled={currentPage===1} className="hover:underline"> Previous</button> 
              <span className="mx-2">Page {currentPage} of{Math.ceil(filteredItems.length/itemsPerPage)}</span>
              {/* disabled  if vo page exist hi na kre aage ie filtereditems>item perpage mtlb next kaam nhi krga */}
              <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemsPerPage)} className="hover:underline">Next</button>
           </div>

          ):""
         }
        </div>
        {/* right side */}
        <div className="bg-white p-4 rounded"><Newsletter/></div>
      </div>
    </div>
  );
}
export default Home
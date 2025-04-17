
import React from "react";
import { useState } from "react";
//from react from hook website install react hook in teminal

import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
    // cpoied from react hook form
    const[selectedOption,setSelectedOption]=useState(null);
  const {
    register,
    handleSubmit,
    reset,
  
    formState: { errors },
  } = useForm();
//API CALL AND DATA IN FORM OF JSON 
//for bringing data to server localhost:3000/postjob and to database
  const onSubmit = (data) => {
    data.skills=selectedOption;
    //console.log(data)
    //console.log(data.skills);
    
    fetch("http://localhost:3000/post-job",{
      method:"POST",
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(data)
    }).then((res)=>res.json()).then((result)=>{
      console.log(result);
      if(result.acknowledged===true)
      {
        alert("job posted succcesfully");
      }
      reset()
    })


  };
 const options=[
    {value:"Javascript",label:"javascript"},
     {value:"C++",label:"C++"},
      {value:"React",label:"React"},
       {value:"HTML",label:"HTML"},
        {value:"CSS",label:"CSS"},


 ]
 
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        {/* copied from react hook form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* present in app.css gap-8 vala */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json  1st row*/}
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                //prenst in app.css border-1 vala
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            {/* //2. for company name */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json  in ....register*/}
              <input
                type="text"
                placeholder={"Microsoft"}
                {...register("companyName")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* //for  2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <input
                type="text"
                placeholder={"$20k"}
                {...register("minPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            {/* for max salary */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum salary</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <input
                type="text"
                placeholder={"$120k"}
                {...register("maxPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <select
                {...register("salaryType")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                {/* isse dropdown */}
                <option value="">Choose your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            {/* for max salary */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <input
                type="text"
                placeholder={"Ex:New York"}
                {...register("jobLocation")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 4 th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <input
                type="date" //this changed isse pura date aaya
                placeholder={"Ex:2023-11-28"}
                {...register("postingDate")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <select
                {...register("experienceLevel")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                {/* value from job.json file */}
                <option value="">Choose your Experience</option>
                <option value="NoExperience">NoExperience</option>
                <option value="Internship">Internship</option>
                <option value="WorkRemotely">WorkRemotely</option>
              </select>
            </div>
            {/* for max salary */}
          </div>
          {/* 5 th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill sets:</label>

            <CreatableSelect
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 "
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>
          {/* 6 th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <input
                type="url" // isse pura url aaya
                placeholder={"Paste your company logo url"}
                {...register("companyLogo")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              {/* //copied from react root demo */}
              {/* //here we have given job title from job.json */}
              <select
                {...register("emplymentType")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                {/* value from job.json file */}
                <option value="">Choose your Experience</option>
                <option value="NoExperience">Full-Time</option>
                <option value="Internship">Part-Time</option>
                <option value="WorkRemotely">Temporary</option>
              </select>
            </div>

            {/* for max salary */}
          </div>
          {/* 7 th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-50"
              rows={6}
              placeholder="Job Description"
              defaultValue={"hiii welcome to our company"}
              {...register("description")}
            ></textarea>
          </div>
          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted by</label>
            <input
              type="email"
              placeholder={"your email"}
              {...register("postedBy")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm  cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
export default CreateJob
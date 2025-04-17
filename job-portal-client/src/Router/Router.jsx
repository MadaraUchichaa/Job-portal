
import  {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from"../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../sidebar/Salary";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    //for app exporting the thing written in app
    element: <App />,
    //importing the home in chil section
    children: [
      //1 st child
      {
        path: "/",
        element: <Home />,
      },
      // // 2 nd child
      // {
      //     path:"/about",
      //     element:<About/>
      // }
      // mtlb whenver we hit post-job create job will openroute to create job
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },

      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/job/:id",
        element: <JobDetails/>,
      },
    ],
  },
]);
export default router;

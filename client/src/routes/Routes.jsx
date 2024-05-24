import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import OtpPage from "../pages/otpPage/OtpPage";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import Home from "../pages/HomoComponents/home/Home";
import AdminDashboard from "../admin/dashboard/adminDashboard/AdminDashboard";
import DashboardContent from "../admin/dashboard/dashboardContent/DashboardContent";
import Projects from "../admin/projectComponents/porjects/Projects";
import Blogs from "../admin/blogs/Blogs";
import AddAdmin from "../admin/addAdmin/AddAdmin";
import AllUsers from "../admin/allUsers/AllUsers";
import OtpProtected from "./OtpProtected";
import AdminProtected from "./AdminProtected";
import AllProjects from "../pages/ProjectComponents/projects/AllProjects";
import AllBlogs from "../pages/blogsComponents/AllBlogs/AllBlogs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<OtpProtected><Root></Root></OtpProtected>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/forgot-password',
                element:<ForgotPassword></ForgotPassword>
            },
            {
                path:'/reset/:token',
                element:<ResetPassword></ResetPassword>
            },
            {
                path:'/projects',
                element:<AllProjects></AllProjects>
            },
            {
                path:'/blogs',
                element:<AllBlogs></AllBlogs>
            }
        ]
    },            
    {
        path:'/otp',
        element:<OtpPage></OtpPage>
    },
    {
        path:'/admin',
        element:<AdminProtected><AdminDashboard></AdminDashboard></AdminProtected>,
        children:[
            {
                path:'dashboard',
                element:<DashboardContent></DashboardContent>
            },
            {
                path:'projects',
                element:<Projects></Projects>
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'add-admin',
                element:<AddAdmin></AddAdmin>
            },
            {
                path:'users',
                element:<AllUsers></AllUsers>
            }
        ]
    }
])

export default router;
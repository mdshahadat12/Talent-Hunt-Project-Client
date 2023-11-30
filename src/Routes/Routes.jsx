import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Stats from "../Components/Dashborad/Stats";
import AllContest from "../Pages/AllContest";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import CardDetails from "../Components/Home/CardDetails";
import ManageUser from "../Components/Dashborad/ManageUser";
import AddContest from "../Components/Dashborad/ContestCreator/AddContest";
import MyCreatedPage from "../Components/Dashborad/ContestCreator/MyCreatedPage";
import ManageContest from "../Components/Dashborad/Admin/ManageContest";
import SeeAllContest from "../Components/Dashborad/Admin/SeeAllContest";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Pages/Profile";
import Win from "../Components/Dashborad/User/Win";
import Perticipated from "../Components/Dashborad/User/Perticipated";
import AdminRoute from "./AdminRoute";
import SelectWinner from "../Components/Dashborad/ContestCreator/SelectWinner";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/profile",
                element: <PrivetRoute><Profile></Profile></PrivetRoute>,
            },
            {
                path: "/allcontest",
                element:<AllContest/>
            },
            {
                path: "/contetst/:id",
                element: <PrivetRoute><CardDetails/></PrivetRoute>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivetRoute> <DashboardLayout/></PrivetRoute>,
        children:[
            {
                path:'/dashboard',
                element:<PrivetRoute><Stats/></PrivetRoute> 
            },
            {
                path:'profile',
                element:<PrivetRoute><Stats/></PrivetRoute> 
            },
            {
                path:'participated',
                element:<PrivetRoute><Perticipated/></PrivetRoute> 
            },
            {
                path:'win',
                element:<PrivetRoute><Win/></PrivetRoute> 
            },
            // admin
            {
                path:'manageuser',
                element: <PrivetRoute><AdminRoute><ManageUser/></AdminRoute></PrivetRoute>
            },
            {
                path:'managecontest',
                element:<PrivetRoute><AdminRoute><ManageContest/></AdminRoute></PrivetRoute>
            },
            {
                path:'allcontest',
                element:<PrivetRoute><AdminRoute><SeeAllContest/></AdminRoute></PrivetRoute> 
            },
            // Creator
            {
                path:'addcontest',
                element:<PrivetRoute><AddContest/></PrivetRoute>
            },
            {
                path:'contestsubmitted',
                element: <PrivetRoute> <h1>Contest Submitted Page</h1></PrivetRoute>
            },
            {
                path:'createdcontest',
                element:<PrivetRoute><MyCreatedPage/></PrivetRoute> 
            },
            {
                path:'selectwinner/:id',
                element:<PrivetRoute><SelectWinner/></PrivetRoute> 
            },
        ]
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'signup',
        element:<SignUp/>
    }
])
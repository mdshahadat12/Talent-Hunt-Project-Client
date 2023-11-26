import { Outlet, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Stats from "../Components/Dashborad/Stats";
import AllContest from "../Pages/AllContest";


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
                element:<h1>profile</h1>
                // element: <PrivetRoute><Profile></Profile></PrivetRoute>,
            },
            {
                path: "/allcontest",
                element:<AllContest/>
            },
            // {
            //     path: "/addfood",
            //     element:<PrivetRoute><AddFood></AddFood></PrivetRoute>
            // },
            // {
            //     path: "/myaddedfood",
            //     element:<PrivetRoute><MyAdded></MyAdded></PrivetRoute>
            // },
            // {
            //     path: "/blogs",
            //     element:<Blogs></Blogs>
            // },
            // {
            //     path: "/cart",
            //     element:<PrivetRoute><Cart></Cart></PrivetRoute>
            // },
            // {
            //     path: "/fooddetails/:id",
            //     element:<PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>
            // },
            // {
            //     path: "/purchase/:id",
            //     element:<PrivetRoute><Purchase></Purchase></PrivetRoute>
            // },
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Stats/>
            },
            {
                path:'profile',
                element:<Stats/>
            },
            {
                path:'manageuser',
                element:<Stats/>
            },
            {
                path:'managecontest',
                element:<Stats/>
            },
        ]
    },
    // {
    //     path:'login',
    //     element:<Login></Login>
    // },
    // {
    //     path:'registration',
    //     element:<Registration></Registration>
    // }
])
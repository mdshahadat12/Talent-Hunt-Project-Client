import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        errorElement:<h1>err</h1>,
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
            // {
            //     path: "/allfood",
            //     element:<AllFood></AllFood>
            // },
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
    // {
    //     path:'login',
    //     element:<Login></Login>
    // },
    // {
    //     path:'registration',
    //     element:<Registration></Registration>
    // }
])
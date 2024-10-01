import React from "react";
import ReactDom from "react-dom/client";
import App from "./app.js"
import Error from "./component/Error.js";
import Body from "./component/Body";
import About from "./component/About.js";
import Skills from "./component/Skills.js";
import Contact from "./component/Contact.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const appRouter= createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/skills',
                element:<Skills/>
            },
            {
                path:'/About',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }

        ],
        errorElement:<Error/>
    }
])

const root= ReactDom.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )
root.render(<RouterProvider router={appRouter}/>);
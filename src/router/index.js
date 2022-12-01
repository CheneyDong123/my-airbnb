import Demo from "@/views/demo";
import React from "react";
import { Navigate } from 'react-router-dom'


// import Home from "@/views/home";
// import Detail from "@/views/details";
// import Entire from "@/views/entire";

const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/details'))
const Entire = React.lazy(() => import('@/views/entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/details',
    element: <Detail />,
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes;
import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";

import MainLayout from "../MainLayout/MainLayout";
import AllTreatments from "../components/AllTreatments";
import MyAppointments from "../components/MyAppointments";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedbackRes = await fetch("/happyClients.json");
          const feedbackData = await feedbackRes.json();

          return { servicesData, feedbackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          // console.log(data, params.id);
          const singleData = data.find((d) => d.id === parseInt(params.id));
          // console.log(singleData);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

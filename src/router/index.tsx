
import {
    createBrowserRouter,
} from "react-router-dom";

import Layout from "../components/layout/_layout";
import App from '../App'
import IceBox from "../pages/ice-box";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,

            },
            {
                path: "/ice-box",
                element: <IceBox />,
            },
        ],
    },
]);

export default router;
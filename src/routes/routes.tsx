import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./admin.routes";
import { routeGenerators } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
    },
    {
        path: '/admin',
        element : <App/>,
        children :routeGenerators(adminPaths),
    },
    {
        path: '/faculty',
        element : <App/>,
        children :routeGenerators(facultyPaths),
    },
    {
        path: '/student',
        element : <App/>,
        children :routeGenerators(studentPaths),
    },
    {
        path: 'login',
        element : <Login/>
    },
    {
        path: 'signUp',
        element : <h1>sginUp page here</h1>
    }
])

export default router;
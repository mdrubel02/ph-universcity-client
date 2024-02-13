// import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
// import { NavLink } from "react-router-dom";


export const adminPaths = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element : <AdminDashboard/>
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester/>
            }
        ]
    },
    {
        name: "User Management",
        children : [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element : <CreateAdmin/>
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element : <CreateFaculty/>
            },
            {
                name: 'Create Student',
                path : 'create-student',
                element : <CreateStudent/>
            }
        ] 
    }
]

//  export const adminRoutes = adminPaths.reduce((acc : IAdminPath[], item) => {
//     if(item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     // console.log('children =>',item.children)
//     if(item.children){
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc;
// },[])

// export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItem[] , item) => {
//     if(item.name && item.element) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//     }
   

//     if(item.children){
//         acc.push({
//             key : item.name,
//             label : item.name,
//             children : item.children.map((child) => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//             }))
//         })
//     }
//     return acc;
// },[])

// const adminPath = [
//     {
//         path: 'dashboard',
//         element : <AdminDashboard/>
//     },
//     {
//         path: 'create-admin',
//         element : <CreateAdmin/>
//     },
//     {
//         path: 'create-faculty',
//         element : <CreateFaculty/>
//     },
//     {
//         path : 'create-student',
//         element : <CreateStudent/>
//     }
// ] 

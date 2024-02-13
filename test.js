// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, item)=> {

//     acc.push(acc + item)
//     return acc
// },[])
// console.log(sum);

const adminPath2 = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element : 'ADMIN_DASHBOARD',
    },
    {
        name: "User Management",
        children : [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element : 'CREATE_ADMIN',
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element : 'CREATE_FACULTY',
            },
            {
                name: 'Create Student',
                path : 'create-student',
                element : 'CREATE_STUDENT'
            }
        ] 
    }
]

const newArray = adminPath2.reduce((acc , item) => {
    if(item.name && item.element) {
        acc.push({
            key: item.name,
            element: item.element
        })
    }
   

    if(item.children){
        acc.push({
            key : item.name,
            label : item.name,
            children : item.children.map((child) => ({
                key: child.name,
                label: child.element
            }))
        })
    }
    return acc;
},[])

// const items : MenuProps['items'] = [
//     {
//       key : 'Dashboard',
//       label : <NavLink to='/admin/dashboard'> Dashboard</NavLink>
//     },
//     {
//       key : 'User Management',
//       label : 'User Management',
//       children : [
//         {
//           key: 'Create Admin',
//           label : <NavLink to='/admin/create-admin'>Create admin</NavLink>
//         },
//         {
//           key: 'Create Faculty',
//           label : <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>
//         },
//         {
//           key: 'Create Student',
//           label : <NavLink to='/admin/create-student'>Create Student</NavLink>
//         },
//       ]
//     }
//   ]


// const newArray = adminPath2.reduce((acc , item) => {
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
console.log(newArray)
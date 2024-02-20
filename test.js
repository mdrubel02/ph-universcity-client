// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, item)=> {

//     acc.push(acc + item)
//     return acc
// },[])
// console.log(sum);

// const adminPath2 = [
//     {
//         name: "Dashboard",
//         path: 'dashboard',
//         element : 'ADMIN_DASHBOARD',
//     },
//     {
//         name: "User Management",
//         children : [
//             {
//                 name: 'Create Admin',
//                 path: 'create-admin',
//                 element : 'CREATE_ADMIN',
//             },
//             {
//                 name: 'Create Faculty',
//                 path: 'create-faculty',
//                 element : 'CREATE_FACULTY',
//             },
//             {
//                 name: 'Create Student',
//                 path : 'create-student',
//                 element : 'CREATE_STUDENT'
//             }
//         ] 
//     }
// ]

// const newArray = adminPath2.reduce((acc , item) => {
//     if(item.name && item.element) {
//         acc.push({
//             key: item.name,
//             element: item.element
//         })
//     }
   

//     if(item.children){
//         acc.push({
//             key : item.name,
//             label : item.name,
//             children : item.children.map((child) => ({
//                 key: child.name,
//                 label: child.element
//             }))
//         })
//     }
//     return acc;
// },[])

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
// console.log(newArray)

class Person {
    constructor(nickname, favUtensil) {
      this.nickname = nickname
      this.favUtensil = favUtensil
    }
  
    eatsCereal() {
      return `${this.nickname} eats cereal with ${this.favUtensil}`
    }
    
    operate() {
      return 'umm, I am not a doctor. I don\'t do this.'
    }
  }

  class Doctor extends Person {
    // static keyword indicates a property of the class as opposed to instance
    static all = [];
    // new private key char (#) as of summer 2021!
    #degree;
  
    constructor(nickname, favUtensil, name, color, specialty) {
      //super passes down attributes from super class, in this case from Person
      super(nickname, favUtensil)
      this.name = name
      this.scrubs = color
      this.#degree = 'MD'
      this.specialty = specialty
      Doctor.all.push(this)
    }
  
    //using private variable, the value of which was assigned inside our constructor
  medicalLicense(){
      return `${this.name}, ${this.#degree}`
    }
    
  //static keyword indicates class method
    static findDocBySpecialty(specialty) {
      //finding first doctor in our list that matches
      const foundDoc = Doctor.all.find((doctor) => doctor.specialty === specialty)
      return foundDoc ? foundDoc.name : null
    }
  
    static operate(specialty) {
      if (
        this.findDocBySpecialty(specialty) &&
        specialty === 'orthopedicSurgeon'
      ) {
        return `${this.findDocBySpecialty(specialty)}, ${specialty}, is drilling into bones`
      } else if (
        this.findDocBySpecialty(specialty) &&
        specialty === 'neoNatalSurgeon'
      ) {
        return `${this.findDocBySpecialty(specialty)}, ${specialty}, is operating on a tiny heart`
      } else return 'Nope, not operating.'
    }
  
  }
  
const drMontgomery = new Doctor('addie', 'chopsticks', 'Addison Montgomery', 'pink', 
'neoNatalSurgeon')
const Shelby = new Person('Shel', 'teaspoon')

console.log(drMontgomery.medicalLicense()) // => Addison Montgomery, MD

console.log(Shelby.eatsCereal()) //  => Shel eats cereal with teaspoon
console.log(drMontgomery.eatsCereal()) // => addie eats cereal with chopsticks

console.log(Shelby.operate())// => umm, I am not a doctor. I don't do this.
console.log(Doctor.operate('neoNatalSurgeon'))
// => Addison Montgomery, neoNatalSurgeon, is operating on a tiny heart
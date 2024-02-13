import OfferedCourse from "../pages/faculty/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";


export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'Dashboard',
        element : <StudentDashboard/>
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element : <OfferedCourse/>
    }
]
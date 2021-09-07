import {useEffect} from 'react'
import Routes from "./routes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Landing from "./modules/landing";
import Login from "./modules/auth/views/login";
import CodeEditor from "./modules/editor";
import StudentDashboard from "./modules/student-dash";
import {useDispatch} from "react-redux";
import {checkAuthentication} from "./redux/actions";

const appRoute = [
    {
        label: 'landing',
        component: Landing,
        path: '/',
        exact: true,
        isAuth: false
    },
    {
        label: 'login',
        component: Login,
        path: '/login',
        exact: true,
        isAuth: false
    },
    {
        label: 'codeEditor',
        component: CodeEditor,
        path: '/codeEditor',
        exact: true,
        isAuth: false
    },
    {
        label: 'studentDashboard',
        component: StudentDashboard,
        path: '/student/:id',
        exact: true,
        isAuth: true
    }
]

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkAuthentication())
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes appRoute={appRoute}/>
        </>
    );
}

export default App;

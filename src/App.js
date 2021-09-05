import Routes from "./routes";
import Landing from "./modules/landing";
import Login from "./modules/auth/views/login";
import CodeEditor from "./modules/editor";

// const appRoute = [
//     {
//         label: 'landing',
//         component: Landing,
//         path: '/',
//         exact: true
//     },
//     {
//         label: 'login',
//         component: Login,
//         path: '/login',
//         exact: true
//     },
//     {
//         label: 'codeEditor',
//         component: CodeEditor,
//         path: '/codeEditor',
//         exact: true
//     }
// ]

const App = () => {
    return (
        <Routes/>
    );
}

export default App;

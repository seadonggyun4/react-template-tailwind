import {createBrowserRouter} from "react-router-dom";
import Root from 'pages/Root'
import Home from "../pages/Home";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <section className="text-error">Error가 발생하였습니다.</section>,
        children: [
            {index: true, element: <Home /> },
            {path: '/test', element: <section className="text-success">TEST화면 입니다.</section>},
        ]
    }
])


export default router
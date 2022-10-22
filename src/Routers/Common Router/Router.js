import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Category from '../../Pages/category/Category/Category';
import Home from '../../Pages/Home/Home';
import News from '../../Pages/News/News/News';
import LogIn from '../../Shared/LogIn/LogIn';
import SignIn from '../../Shared/SignIn/SignIn';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    }
]);
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Category from '../../Pages/category/Category/Category';
import Home from '../../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home/:id',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    }
]);
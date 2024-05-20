import { createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './utils'
import FullLayout from '../layout'

const router = createBrowserRouter([
    {
        path: RoutePath.Index,
        element: <FullLayout />,
    },
    {
        path: RoutePath.HomeShop,
        element: <FullLayout />,
    }
])

export default router

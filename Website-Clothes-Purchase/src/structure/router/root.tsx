import { createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './utils'
import FullLayout from '../layout'
import { Register, HomeShop, BlogNews, CollectionAll, ContactAdmin, OrderCollection } from '../../page'

const router = createBrowserRouter([
    {
        path: RoutePath.Index,
        element: <FullLayout />
    },
    {
        path: RoutePath.Register,
        element: <Register />
    },
    {
        path: RoutePath.HomeShop,
        element: <HomeShop />
    },
    {
        path: RoutePath.Collection,
        element: <CollectionAll />
    },
    {
        path: RoutePath.BlogNews,
        element: <BlogNews />
    },
    {
        path: RoutePath.Contact,
        element: <ContactAdmin />
    },
    {
        path: RoutePath.CheckOrder,
        element: <OrderCollection />
    }
])

export default router

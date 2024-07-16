import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LoadingArea } from '../../commonComponent'
import { BlogNews, CollectionAll, ContactAdmin, HomeShop, OrderCollection, Register } from '../../page'
import FullLayout from '../layout'
import ProtectedRoute from './protectedRoute'
import { RoutePath } from './utils'

const router = createBrowserRouter([
    {
        path: RoutePath.Index,
        element: (
            <ProtectedRoute>
                <FullLayout></FullLayout>
            </ProtectedRoute>
        )
    },
    {
        path: RoutePath.Register,
        element: (
            <Suspense fallback={<LoadingArea></LoadingArea>}>
                <ProtectedRoute>
                    <Register />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: RoutePath.HomeShop,
        element: (
            <Suspense fallback={<LoadingArea></LoadingArea>}>
                <ProtectedRoute>
                    <HomeShop />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: RoutePath.Collection,
        element: (
            <Suspense fallback={<LoadingArea></LoadingArea>}>
                <ProtectedRoute>
                    <CollectionAll />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: RoutePath.BlogNews,
        element: (
            <Suspense fallback={<LoadingArea></LoadingArea>}>
                <ProtectedRoute>
                    <BlogNews />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: RoutePath.Contact,
        element: (
            <Suspense fallback={<LoadingArea></LoadingArea>}>
                <ProtectedRoute>
                    <ContactAdmin />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: RoutePath.CheckOrder,
        element: (
            <Suspense fallback={<LoadingArea></LoadingArea>}>
                <ProtectedRoute>
                    <OrderCollection />
                </ProtectedRoute>
            </Suspense>
        )
    }
])

export default router

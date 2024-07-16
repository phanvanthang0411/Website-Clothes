import { Header, BaseNavigation } from '../../commonComponent'

interface IProtectedRoute {
    children: JSX.Element
}
const ProtectedRoute = ({ children }: IProtectedRoute) => {
    return (
        <>
            <Header></Header>
            <BaseNavigation></BaseNavigation>
            {children}
        </>
    )
}

export default ProtectedRoute

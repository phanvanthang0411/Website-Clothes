import { Header, BaseNavigation, BaseFooter } from '../../commonComponent'

interface IProtectedRoute {
    children: JSX.Element
}
const ProtectedRoute = ({ children }: IProtectedRoute) => {
    return (
        <>
            <Header></Header>
            <BaseNavigation></BaseNavigation>
            {children}
            <BaseFooter></BaseFooter>
        </>
    )
}

export default ProtectedRoute

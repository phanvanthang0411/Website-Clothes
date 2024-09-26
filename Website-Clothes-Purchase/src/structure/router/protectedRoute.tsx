import { Header, BaseFooter } from '../../commonComponent'

interface IProtectedRoute {
    children: JSX.Element
}
const ProtectedRoute = ({ children }: IProtectedRoute) => {
    return (
        <>
            <Header></Header>
            {children}
            <BaseFooter></BaseFooter>
        </>
    )
}

export default ProtectedRoute

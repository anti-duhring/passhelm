import { useContext } from "react"
import AuthRoutes from "./AuthRoutes"
import NoAuthRoutes from "./NoAuthRoutes"
import { AuthContext } from "../context/auth"

const Routes = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
            {
                userData ?
                <AuthRoutes /> :
                <NoAuthRoutes />
            }
        </>
    )
}

export default Routes;
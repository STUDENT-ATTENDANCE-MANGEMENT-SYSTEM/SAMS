import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { appContext } from "../App"

const ProtectedRoute = ({ children }) => {
  const { lecturer } = useContext(appContext)
  if (!lecturer) {
    return <Navigate to='/signin' />
  }
  return children
}

export default ProtectedRoute

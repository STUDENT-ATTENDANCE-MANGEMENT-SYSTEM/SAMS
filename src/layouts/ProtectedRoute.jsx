// import { useContext } from "react"
// import { Navigate } from "react-router-dom"
// import { appContext } from "../App"

// const ProtectedRoute = ({ children, role }) => {
//   const context = useContext(appContext)
//   const user = context[role]
//   if (!user) {
//     return <Navigate to='/signin' />
//   }
//   return children
// }

// export default ProtectedRoute
import { useContext, useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { appContext } from "../App"

const ProtectedRoute = ({ children, role }) => {
  const context = useContext(appContext)
  const user = context[role]
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate an async operation, like fetching user data
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <div>Loading...</div> // Replace with your loading component
  }

  if (!user) {
    return <Navigate to='/signin' />
  }

  if (!["student", "lecturer"].includes(role)) {
    console.error(`Error: Invalid role "${role}"`)
    return <Navigate to='/error' /> // Replace with your error component
  }

  return children
}

export default ProtectedRoute

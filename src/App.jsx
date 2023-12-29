import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom"
import { useState, createContext } from "react"

import "./App.css"
import { Home } from "./pages/Home"
import About from "./pages/About"
import Price from "./pages/Price"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import RootLayouts from "./layouts/RootLayouts"
import NotFound from "./pages/NotFound"

import Student from "./pages/signin/Student"
import Lecturer from "./pages/signin/Lecturer"
import Register_Institution, {
  institutionRegister,
} from "./pages/Register_Institution"
import InstitutionMain from "./pages/institution/InstitutionMain"
import StudentLayout from "./layouts/StudentLayout"
import RegisterLayout from "./layouts/RegisterLayout"
import Signin from "./pages/Signin"
import LecturerLayout from "./layouts/LecturerLayout"
import LecturerMain from "./pages/lecturer/LecturerMain"
import StudentMain from "./pages/student/StudentMain"
import LecturerHome from "./pages/lecturer/LecturerHome"
import InstitutionLayout from "./layouts/InstitutionLayout"
import Construction from "./pages/Construction"
import InstitutionHome from "./pages/institution/InstitutionHome"
import ProtectedRoute from "./layouts/ProtectedRoute"
import {QueryClientProvider, QueryClient} from 'react-query'

export const appContext = createContext()

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='price' element={<Price />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route
          path='register-institution'
          element={<Register_Institution />}
          action={institutionRegister}
        />
      </Route>
      <Route path='signin' element={<RegisterLayout />}>
        <Route index element={<Signin />} />
        <Route
          path='student'
          element={<Student />}
          // action={studentRegister}
        />
        <Route
          path='lecturer'
          element={<Lecturer />}
          // action={lecturerRegister}
        />
      </Route>
      <Route
        path='lecturer'
        element={
          <ProtectedRoute role='lecturer'>
            <LecturerLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<LecturerMain />} />
        <Route path='home' element={<LecturerHome />} />
      </Route>
      <Route
        path='student'
        element={
          <ProtectedRoute role='student'>
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentMain />} />
      </Route>
      <Route path='institution' element={<InstitutionLayout />}>
        <Route index element={<InstitutionMain />} />
        <Route path='home' element={<InstitutionHome />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      <Route path='construction' element={<Construction />} />
    </>
  )
)

function App() {
  const [student, setStudent] = useState(null)
  const [lecturer, setLecturer] = useState(null)
  return (
    <appContext.Provider value={{ student, setStudent, lecturer, setLecturer }}>
      <RouterProvider router={router} />
    </appContext.Provider>
  )
}

export default App

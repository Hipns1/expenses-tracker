import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Providers() {
  return (
    <>
      <Outlet />
      <ToastContainer position='top-right' />
    </>
  )
}

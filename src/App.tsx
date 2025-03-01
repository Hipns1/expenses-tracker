import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useBoundStore } from '@/modules'
import { Providers } from '@/providers'
import { filterAccessibleRoutes, routes } from '@/routes'

import './App.css'
import NotFound from './pages/404'

function App() {
  const user = useBoundStore((s) => s.user)

  const filteredRoutes = [
    ...filterAccessibleRoutes(routes, { role: user?.roleName }),
    { path: '*', element: <NotFound /> }
  ]

  return (
    <RouterProvider
      router={createBrowserRouter(
        [
          {
            children: filteredRoutes as RouteObject[],
            element: <Providers />
          }
        ],
        { basename: '/' }
      )}
    />
  )
}

export default App

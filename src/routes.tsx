import { ReactNode } from 'react'
import { Role } from './modules/core/types'
import { type RouteObject } from 'react-router-dom'

import { BiSolidDashboard } from 'react-icons/bi'

export type RouteRoles = '*' | Role[]
export type RouteByRole = {
  children?: RouteByRole[]
  excludeNav?: boolean
  icon?: ReactNode
  isAuthRestricted?: boolean
  roles?: RouteRoles
  titleMenu?: string
} & Omit<RouteObject, 'children'>

export const routes: RouteByRole[] = [
  {
    isAuthRestricted: true,
    lazy: async () =>
      await import('@/pages/login.tsx').then(({ Login }) => ({
        element: <Login />
      })),
    path: '/'
  },
  {
    isAuthRestricted: true,
    lazy: async () =>
      await import('@/pages/login.tsx').then(({ Login }) => ({
        element: <Login />
      })),
    path: '*'
  },
  {
    titleMenu: 'Home',
    icon: <BiSolidDashboard size={24} />,
    lazy: async () =>
      await import('@/pages/home.tsx').then(({ Home }) => ({
        element: <Home />
      })),
    path: '/',
    roles: '*'
  }
]

export function filterAccessibleRoutes(routes: RouteByRole[], auth: { role?: any }): RouteObject[] {
  if (!(routes instanceof Array)) throw new Error('"routes" param must be an array')
  if (typeof auth !== 'object') throw new Error('"auth" must be an object')

  const isAuthenticated = typeof auth.role !== 'undefined'
  const filteredRoutes = routes.reduce<RouteObject[]>((filteredRoutes, roleRoute) => {
    const { isAuthRestricted, roles, ...route } = roleRoute
    if (!isAuthenticated && roles !== undefined) return filteredRoutes
    if (isAuthenticated && (isAuthRestricted ?? false)) return filteredRoutes
    if (isAuthenticated && Array.isArray(roles) && !roles.includes(auth.role!)) return filteredRoutes

    const filteredChildren = route.children !== undefined ? filterAccessibleRoutes(route.children, auth) : undefined

    const routeWithFilteredChildren = {
      ...route,
      children: filteredChildren
    }

    return [...filteredRoutes, routeWithFilteredChildren as RouteObject]
  }, [])

  return filteredRoutes
}

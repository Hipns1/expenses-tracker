//import { AxiosError } from 'axios'
//import { toast } from 'react-toastify'
//import { LoginResponse,  SERVICES_MSGS, fetchApi, useBoundStore } from '@/modules'
import { LoginProps } from '../login'
import { useNavigate } from 'react-router-dom'
import { AuthSlice } from '../auth-slice-store'
import { useBoundStore } from '@/modules'

type SessionData = Pick<AuthSlice, 'user'>

export function useAuth() {
  const navigate = useNavigate()
  const { resetAuth, setAuth, user } = useBoundStore((s) => ({
    resetAuth: s.resetAuth,
    setAuth: s.setAuth,
    user: s.user,
    accessToken: s.accessToken,
    refreshToken: s.refreshToken
  }))

  const login = async (data: LoginProps): Promise<void> => {
    console.log(data)
    setAuth({
      accessToken: '123',
      refreshToken: '123',
      user: {
        userId: '123',
        userName: 'jesus',
        fullName: 'Jesus',
        domain: 'jesus',
        extension: 'jesus',
        roleName: 'admin',
        roleId: 1,
        avatar: 'https://i.pravatar.cc/150?img=1'
      }
    })

    /* funcion del login para mas adelante */
    /*  await fetchApi
      .post<never, LoginResponse, Login>('/auth/login', data)
      .then((response: any) => {
        setAuth({
          ...response,
          loggedInAt: new Date()
        })
      })
      .catch((error: AxiosError<any>) => {
        const { response } = error
        if (response?.data?.errors) {
          toast.warn(response?.data?.errors)
        } else {
          console.log(error)
          toast.error(SERVICES_MSGS.ERROR)
        }
      }) */
  }

  const logout = async (): Promise<void> => {
    resetAuth()
    navigate('/')
  }

  const getSessionData = (): SessionData => {
    return {
      user
    }
  }

  return {
    getSessionData,
    login,
    logout,
    user
  }
}

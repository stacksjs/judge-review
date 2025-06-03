interface User {
  name: string
  email: string
  password: string
}

const baseUrl = 'http://localhost:3008'

export function useAuth() {
  async function register(user: User) {
    const url = `${baseUrl}/register`
    const { data } = await useFetch(url).post(user).json()

    return data
  }

  async function login(user: User) {
    const url = `${baseUrl}/login`
    const { data } = await useFetch(url).post(user).json()

    return data
  }

  return {
    register,
    login,
  }
}

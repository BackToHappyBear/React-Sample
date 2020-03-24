import Axios from 'axios'

interface ResponseData<D = any> {
  code: number
  result: D
  message: string
}

async function Request<D, P = {}>(params: P): Promise<D> {
  try {
    const res = await Axios.request<ResponseData<D>>(params)
    if (res.status === 0) {
      throw new Error(res.statusText)
    }
    return res.data.result
  } catch (err) {
    return err
  }
}

Request<{ name: string; age: number }, { name: string }>('https://xxx')
  .then(res => {
    return { age: res.age }
  })
  .then(res => {
    console.log(res.age)
  })

async function api<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    // made up logging service
    throw error // rethrow the error so consumer can still catch it
  }
}

api<{ title: string; message: string }>('v1/posets/1')
  .then(({ title, message }) => {
    console.log(title, message)
  })
  .catch(error => {
    // show error message
  })

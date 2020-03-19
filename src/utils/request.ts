import Axios from 'axios'

interface ResponseData<D = any> {
  code: number
  result: D
  message: string
}

// Promise<ResponseData<D> | undefined>
export async function Request<D, P = {}>(params: P): Promise<ResponseData<D> | undefined> {
  try {
    const res = await Axios.request(params)
    if (res.data.code === '0') {
      throw new Error(res.data.code)
    }
    return res.data
  } catch (err) {
    console.log('error!')
  }
}

function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then<T>(data => {
      return data.data
    })
    .catch((error: Error) => {
      // made up logging service
      throw error // rethrow the error so consumer can still catch it
    })
}

api<{ title: string; message: string }>('v1/posets/1')
  .then(({ title, message }) => {
    console.log(title, message)
  })
  .catch(error => {
    // show error message
  })

import fetch from 'node-fetch'
import { POST, TASK } from '../types/Types'

export const getAllPostsData = async (): Promise<POST[]> => {
  return (await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )).json()
}

export const getAllTasksData = async (): Promise<TASK[]> => {
  return (await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos/?_limit=10')
  )).json()
}

export const getAllPostIds = async () => {
  const posts = await getAllPostsData()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getPostData = async (id: String): Promise<POST> => {
  return (await fetch(
    new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
  )).json()
}

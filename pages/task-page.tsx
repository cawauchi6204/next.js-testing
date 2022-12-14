import Layout from "../components/Layout"
import { GetStaticProps } from "next"
import { getAllTasksData } from "../lib/fetch"
import useSWR from "swr"
import { TASK } from "../types/Types"
import axios from "axios"

interface STATICPROPS {
  staticTasks: TASK[]
}

const axiosFetcher = async () => {
  return (await axios.get<TASK[]>(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  )).data
}

const TaskPage: React.FC<STATICPROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('todosFetch', axiosFetcher, {
    fallbackData: staticTasks,
    revalidateOnMount: true
  })
  if (error) return <span>Error!</span>

  return (
    <Layout title="Todos">
      <p className="text-4xl mb-10">
        todos page
      </p>
      <ul>
        {tasks && tasks.map((task) => (
          <li key={task.id}>
            {task.id}
            {': '}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default TaskPage

// サーバーサイドで処理が実行される
export const getStaticProps: GetStaticProps = async () => {
  const staticTasks = await getAllTasksData()
  return {
    props: { staticTasks }
  }
}

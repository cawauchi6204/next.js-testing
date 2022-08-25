import Layout from "../components/Layout"
import useSWR from "swr"
import axios from "axios"
import Comment from "../components/Comment"
import { COMMENT } from "../types/Types"

const axiosFetcher = async () => {
  return (await axios.get<COMMENT[]>(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10'
  )).data
}

const CommentPage: React.FC = () => {
  const { data: comments, error } = useSWR('commentsFetch', axiosFetcher)

  // クライアントサイドでfetchするのがswr
  // データを取得するまでに古いデータを表示させることができる
  if (error) return <span>Error!</span>

  return (
    <Layout title="Comment">
      <p className="text-4xl m-10">
        comment page
      </p>
      <ul>
        {comments && comments.map((comment) => <Comment key={comment.id} {...comment} />)}
      </ul>
    </Layout>
  )
}
export default CommentPage

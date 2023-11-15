import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
  return (
    <div className="posts">
      <Link to="/post/:postId" className="link"><Post/></Link>
      <Link to="/post/:postId" className="link"><Post/></Link>
      <Link to="/post/:postId" className="link"><Post/></Link>
      <Link to="/post/:postId" className="link"><Post/></Link>
      <Link to="/post/:postId" className="link"><Post/></Link>
      <Link to="/post/:postId" className="link"><Post/></Link>
    </div>
  )
}

import Sidebar from "../sidebar/Sidebar"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img classname="SinglePostImg" src={require('./singlepostcar.jpg')} alt="" />
        <h1 className="singlePostTitle">
            This is the title of a single Post
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Huda</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Random sentences that describe the post abhi mainko wo lorem epsum nahi dhundna tha karke maine ye daaldi maza aa 
          raha hai react karne main par ek cheeze ke liye ek folder banana padh raha hai thodi magaj maari hai par ye point tak aake 
          error aana kam hoagye hai aur error solving bhi meri fast hoagyi hai itna bhi bura nahi hai react jinta maine sochi thi aur 
          ye sab main isiliye likh rahi hu kyuke mainko description ka paragraph bada karna tha.
          random sentences that describe the post abhi mainko wo lorem epsum nahi dhundna tha karke maine ye daaldi maza aa 
          raha hai react karne main par ek cheeze ke liye ek folder banana padh raha hai thodi magaj maari hai par ye point tak aake 
          error aana kam hoagye hai aur error solving bhi meri fast hoagyi hai itna bhi bura nahi hai react jinta maine sochi thi aur 
          ye sab main isiliye likh rahi hu kyuke mainko description ka paragraph bada karna tha.
          random sentences that describe the post abhi mainko wo lorem epsum nahi dhundna tha karke maine ye daaldi maza aa 
          raha hai react karne main par ek cheeze ke liye ek folder banana padh raha hai thodi magaj maari hai par ye point tak aake 
          error aana kam hoagye hai aur error solving bhi meri fast hoagyi hai itna bhi bura nahi hai react jinta maine sochi thi aur 
          ye sab main isiliye likh rahi hu kyuke mainko description ka paragraph bada karna tha.
          random sentences that describe the post abhi mainko wo lorem epsum nahi dhundna tha karke maine ye daaldi maza aa 
          raha hai react karne main par ek cheeze ke liye ek folder banana padh raha hai thodi magaj maari hai par ye point tak aake 
          error aana kam hoagye hai aur error solving bhi meri fast hoagyi hai itna bhi bura nahi hai react jinta maine sochi thi aur 
          ye sab main isiliye likh rahi hu kyuke mainko description ka paragraph bada karna tha.
        </p>
      </div>
    </div>
  )
}

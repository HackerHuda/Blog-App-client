import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitlesLg">Blogger</span>
      </div>
      <img className="headerImg" src={require('./header.jpg')} alt="" />
    </div>
  )
}

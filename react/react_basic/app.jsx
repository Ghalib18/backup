// App.jsx
import './App.css'
import { useState } from 'react'
import Post from './Post'

export default function App() {
  const [data, setData] = useState([
    { title: "Ghalib Hussain", subtitle: "full-stack developer", time: "12 min ago", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EdaVAtRcpMSIvrK2qmO_9xaS4Ex5t7xuKA&s", desc:"Working as full stack devloper at google hyderabd india, which is the best place to work in hyderabad"}
  ])

  const handle = () => {
    setData([
      ...data,
      { title: "Virat kohli", subtitle: "software developer-1", time: "51 min ago", img: "https://m.media-amazon.com/images/I/51Jeu+ot7EL._AC_UF1000,1000_QL80_.jpg", desc:" Working as software devloper engineer-1 at uber banglore india, which is the best place to work in banglore" }
    ])
  }
    const postcomponent=data.map((post, index) => (
      <div style={{marginBottom:"20px"}}>
        <Post
          key={index}
          title={post.title}
          subtitle={post.subtitle}
          time={post.time}
          img={post.img}
          desc={post.desc}
        />
        </div>
      ))
  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <button onClick={handle}>Add New Post</button>
     <div style={{display:"flex", justifyContent:"center"}}>
      <div>{postcomponent}</div>
       </div>
    </div>
  )
}

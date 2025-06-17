const style={width:200,background:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20}
export default function Post(props) {
  return (
    <div style={style}>
      <div style={{display:"flex" ,gap:10}}>
      <img
        src={props.img}
        alt="postimage"
       style={{width:40,height:50, borderRadius:20}} 

      />
      <div  style={{display:"flex",flexDirection:"column"}}>
        <h1 style={{textAlign:"center",fond:"bold",fontSize:15}}>{props.title}</h1>
        <h4 style={{textAlign:"center",fontSize:10}}>{props.subtitle}</h4>
       
        <div style={{display:"flex", gap:10}}>
          <p style={{textAlign:"center",fontSize:10}}>{props.time}</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/957/220/non_2x/black-clock-and-time-management-business-icon-clipart-illustration-graphic-design-vector.jpg"
            alt="postimage"
           style={{width:15,height:15}} 
          />
        </div>
      </div>
      </div>
      <div>
        <p style={{fontSize:15}}>{props.desc}</p>
        </div>
      
    </div>
  )
}

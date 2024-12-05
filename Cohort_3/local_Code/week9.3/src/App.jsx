import { useState } from "react";

function App() {
  return (
    <>
      <div style={{background:"#dfe6e9",height:"100vh"}}>
        <ToggleMessage/>

        <h1>Hello Tridib</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div>
          <PostComponent name="Rohan" followerCount={2300} time={12} description="Testing props"/>
          <PostComponent name="Sunaina" followerCount={900} time={7} description="Testing props"/>
          <PostComponent name="100xdevs" followerCount="100K" time={12} description="Testing props"/>
          <PostComponent name="10xdevs" followerCount="100K" time={12} description="working"/>
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding:20,
  marginTop:10
};


const ToggleMessage=()=>{
  const[isVisible,setIsVisible]=useState(false)
  return <div>
    <button onClick={()=>{
      setIsVisible(!isVisible)
    }}>Toggle Button</button>
    {isVisible==true?<p>This message is conditionaly rendered</p>:<p></p>}
  </div>
}

function PostComponent({name,followerCount,time,description}) {
  return (
    <div style={style}>
      <div style={{display:"flex"}}>
        <img
          src={
            "https://media.istockphoto.com/id/2165724939/photo/girl-with-her-hamster-smiling-at-home.jpg?s=2048x2048&w=is&k=20&c=V8dtlrS7Cljtx646RQ-w9RrZGardO7SqIjLWCoL86Xc="
          }
          style={{
            width: 30,
            height: 20,
            borderRadius: 20,
          }}
        />
        <div style={{fontSize:10,marginLeft:10}}>
          <b>{name}</b>
          <div>{followerCount} followers</div>
          <div>{time}m</div>
        </div>
      </div>
      <div style={{fontSize:12}}>{description}</div>
    </div>
  );
}

export default App;

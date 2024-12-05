function App() {
  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <PostComponent />
        <PostComponent />
        <PostComponent />
        </div>
      </div>
    </div>
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

function PostComponent() {
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
          <b>100xdevs</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div style={{fontSize:12}}>want to know how to win big? check this out of $6000 bounties</div>
    </div>
  );
}

export default App;

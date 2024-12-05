import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { index: 1, name: "Rohan", followerCount: 2300, time: 12, description: "Testing props" },
    
  ]);

  return (
    <>
      <div style={{ background: "#dfe6e9", height: "100vh" }}>
        <ToggleMessage />

        <h1>Hello Tridib</h1>

        {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}> */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap",  
          gap: "20px", // Add space between cards
          padding: "20px" // Add padding around the container
        }}>
          {posts.map((post) => (
            <PostComponent
              key={post.index}
              name={post.name}
              followerCount={post.followerCount}
              time={post.time}
              description={post.description}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setPosts([
            ...posts,
            {
              index: posts.length + 1,
              name: "New User",
              followerCount: 1500,
              time: 5,
              description: "New post description"
            }
          ]);
        }}
      >
        Add new post
      </button>
    </>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  marginTop: 10
};

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Button</button>
      {isVisible === true ? <p>This message is conditionally rendered</p> : <p></p>}
    </div>
  );
};

function PostComponent({ name, followerCount, time, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={
            "https://media.istockphoto.com/id/2165724939/photo/girl-with-her-hamster-smiling-at-home.jpg?s=2048x2048&w=is&k=20&c=V8dtlrS7Cljtx646RQ-w9RrZGardO7SqIjLWCoL86Xc="
          }
          style={{
            width: 30,
            height: 20,
            borderRadius: 20
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{followerCount} followers</div>
          <div>{time}m</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{description}</div>
    </div>
  );
}

export default App;

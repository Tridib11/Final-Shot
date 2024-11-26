import "./App.css"
function App(){
  return <div>
    <Header title={"Task1"}/>
    <Header title={"Task2"}/>
  </div>
}


function Header({title}){
  return <div>
    <h2>{title}</h2>
  </div>
}

export default App
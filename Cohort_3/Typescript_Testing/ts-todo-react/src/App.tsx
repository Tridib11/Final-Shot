
import "./App.css"
function App() {
  return (
    <div>
      <Todo title='Buy groceries' description='Milk, Bread, Eggs' done='true' />
      <Todo title='Finish project report' description='Due by end of the week' done='false' />
      <Todo title='Call mom' description='Catch up and check in' done='true' />
      <Todo title='Read a book' description='Start with chapter 1' done='false' />
      <Todo title='Plan weekend trip' description='Decide on destination and book hotel' done='false' />
    </div>
  )
}

interface TodoProp {
  title: string,
  description: string,
  done: string
}

function Todo( {title,description,done}:TodoProp) {
  return <div>
    <h1>{title}</h1>
    <br />
    <h2>{description}</h2>
    <br />
    <h3>{done}</h3>
  </div>
}

export default App

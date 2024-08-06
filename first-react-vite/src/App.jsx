import Hello from "./components/Hello"
import Content from "./components/Content"
import "./Style.css"


const name = "Sultan"

function App() {
  return(
    <div className="body">
          <h1>About Mr. {name}</h1>
          <Content />
          
          <h1>About Mr. {name}</h1>
          <Content />

          <h1>About Mr. {name}</h1>
         <Content />

         <Hello />
    </div>
  )
}

export default App

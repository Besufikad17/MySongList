import './App.css'

function App() {

  var lists = [1,2,4,5,6]
  var listItems = lists.map(l => (
    <h1>{l}</h1>
  ));

  return (
    <div className="App">
        <div className="container">
          <div className="cards-row2">
            {listItems}
          </div>
        </div>
    </div>
  )
}

export default App

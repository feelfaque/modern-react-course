import './App.css';
import SearchBar from "./search-bar/SearchBar";

function App() {
    const onSearchSubmit = (term) => {
        console.log(term)
    }
  return (
    <div className="ui container" style={{marginTop: 10}}>
      <SearchBar onSearchSubmit={onSearchSubmit}/>
    </div>
  );
}

export default App;

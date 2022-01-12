import './App.css';
import SearchBar from "./search-bar/SearchBar";
import unsplash from "../api/unsplash/unsplash";
import {useState} from "react";
import ImageList from "./image-list/ImageList";

function App() {
    const [images, setImages] = useState([]);
    const onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: {query: term}
        });
        setImages(res.data.results);
    }
    return (
        <div className="ui container" style={{marginTop: 10}}>
            <SearchBar onSearchSubmit={onSearchSubmit}/>
            <ImageList images={images}/>
        </div>
    );
}

export default App;

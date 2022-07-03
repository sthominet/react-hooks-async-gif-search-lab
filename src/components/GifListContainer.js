import React, {useState, useEffect} from  'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer () {
   
    const [gifsThree, setGifsThree] = useState([]);
    const[gifSearchTerm, setGifSearchTerm] = useState('dogs');
    const SEARCH_URL = "https://api.giphy.com/v1/gifs/search?api_key=tvV3NoebXqUnLX0tmXawkWWE4KoOP18i&rating=g&q=" + gifSearchTerm;

    useEffect ( () => {
        fetch(SEARCH_URL)
        .then(response => response.json())
        .then(json => setGifsThree(json.data.slice(0,3)))
    }, [gifSearchTerm])

    return (
        <>
        <p>{"gif list container"}</p>
        <GifList threeGifs={gifsThree} />
        <GifSearch updateSearchTermInState={setGifSearchTerm}/>
        </>
    )
}

export default GifListContainer;
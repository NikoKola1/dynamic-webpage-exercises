import axios from 'axios';
import React, {useState} from 'react';
import './opendata.css';

//component to fetch and display data
function OpenData(){
    //states to hold data, seacrh input and error msg
    const [pokemon, setPokemon] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    //function to do searcg when user clicks search button
    const handleSearch = () => {
        if (searchInput) {
            //fetch data from api based on user input
            axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`)
            //store fetched data and clear previous error msg
            .then(response => {
                setPokemon(response.data);
                setErrorMsg('');
            })
            //if no matching pokemon name found this message comes up and reset pokemon data
            .catch(error => {
                setErrorMsg('Pokemon not found. Try again.')
                setPokemon(null);
            });
        }
    };
    //input box and button for user to search
    return (
        <div className='opendata-container'>
            <h1>Pokemon Search</h1>
            <input type='text' placeholder='Enter Pokemon name' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            {errorMsg && <p className='errormsg'>{errorMsg}</p>}

        {pokemon ? (
            //shows name, weight, height from the pokemon user searched
            <div>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                {pokemon.sprites && pokemon.sprites.front_default ? (
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    ) : (
                        <p>No image available.</p>
                    )}
            </div>
        ) : (
            !errorMsg && <p>Search pokemon by name</p>
        )}
        </div>
    );

};

//parent component
function OpenDataAssignment () {
    return (
        <div>
            <OpenData/>
        </div>
    );
};



export default OpenDataAssignment;
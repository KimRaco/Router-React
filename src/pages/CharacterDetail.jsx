
import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Searcher from '../components/Searcher/Searcher'

const API_URL = 'https://rickandmortyapi.com/api/character/'

const CharacterDetail = () => {
    const { characterId } = useParams()

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCharacters(data);
                
            });
    }, []);

    return (
        <>

            <div className="d-flex container h-100 w-100">

                <div className='row justify-content-center'>

                    <div className="card col-8 m-3 ">
                        <img src={characters?.image} />
                        <h3>{characters?.name}
                        </h3>
                        <p>{characters.status}</p>
                        <p>{characters.species}</p>
                        
                        <Link to="/"> <button className="btn btn-info">Go back</button> </Link>

                    </div>

                </div>

            </div>

        </>
    )
}

export default CharacterDetail
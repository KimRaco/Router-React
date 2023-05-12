import React from 'react'
import { useState, useEffect } from 'react'
const API_URL = "https://rickandmortyapi.com/api/character/"
import { Routes, Route, Link } from 'react-router-dom'
import "./searcher.css"



const Searcher = () => {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);


    //useEfect start
    useEffect(() => {
        //if (search.trim() === '') return;

        // aqui hago la peticion
        searchCharacter()

    }, [setCharacters]);
    //useEfect end

    const searchCharacter = async () => {
        const resp = await fetch(`${API_URL}?name=${search}`);
        const data = await resp.json();
        setCharacters(data.results)
    };

    const handleText = (e) => {
        setSearch(e.target.value.toLowerCase());

    };


    return (
        <>
            <div className="d-flex justify-content-center mb-4">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
                    alt="" />
            </div>

            <div className='d-flex'>

                <input
                    className="border-2 border-black/20 w-full p-1 px-6 form-control"
                    value={search}
                    onChange={handleText}

                />
                <button
                    className="btn btn-info "
                    onClick={searchCharacter}

                >
                    Search
                </button>
            </div>

            <div className="d-flex container h-100 w-100">

                <div className='row justify-content-center'>

                    {

                        characters.map(char =>
                            <React.Fragment key={char.id} >
                                <div className="card  m-3  col-xs-12 col-sm-6 col-md-3">
                                    <img src={char?.image} /> 
                                    <h3 className='mt-2'>{char?.name}
                                    </h3>
                                    <Link to={`${char.id}`}><button className="btn btn-info mt-2">Details</button></Link>

                                </div>
                            </React.Fragment>
                        )
                    }
                </div>


            </div>

        </>
    )
}

export default Searcher
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { API } from "../constants/apiurl";

function StarWarsDetails() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let history = useHistory()

    const { id } = useParams();

    if (!id) {
        history.push('/')
    }

    const url = API + 'id/' + id+'.json';

    useEffect(
        function () {
            async function fetchCharacter() {
                try {
                    const response = await fetch(url);

                    if (response.ok) {
                        const json = await response.json()
                        setCharacters(json)
                    } else {
                        setError('An error occured')
                    }

                }
                catch (error) {
                    console.log(error.toString())
                }

                finally {
                    setLoading(false)
                }
            }
            fetchCharacter();
        },
        [url]
    );


    if (loading) {
        return <div>Loading.....</div>
    }

    if (error) {
        return <div>An error occured: {error}</div>
    }

    return (
        <div>
            <h1 className="character__heading">{characters.name}</h1>
            <div className="character__container">
                <img className="character__img" src={characters.image} alt="character from star wars"/>
            </div>
            <p className="character__txt">Specie: {characters.species}</p>
            <p className="character__txt">From: {characters.homeworld}</p>
            <p className="character__txt">Gender: {characters.gender}</p>
        </div>
    )

}

export default StarWarsDetails;
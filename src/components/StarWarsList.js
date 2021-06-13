import { useState, useEffect } from "react";
import { API } from "../constants/apiurl";
import StarWarsCharacter from "./StarWarsCharacter";

function StarWarsList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sorting, setSorting] = useState(true)

    function sortByAscendingOrder() {
        characters.sort((nameA, nameB) => nameA.name > nameB.name ? 1 : -1);
        setSorting(false);
    }

    function sortByDescendingOrder() {
        characters.reverse((nameA, nameB) => nameA.name > nameB.name ? 1 : -1);
        setSorting(true);
    }

    useEffect(function () {
        async function fetchCharacter() {
            try {
                const response = await fetch(API + 'all.json')

                if (response.ok) {
                    const json = await response.json()
                    setCharacters(json);
                }

            } catch (error) {
                setError(console.toString())

            } finally {
                setLoading(false)
            }
        }
        fetchCharacter();
    }, [])

    if (loading) {
        return <div>loading....</div>
    }

    if (error) {
        return <div>An error occured</div>
    }

    return (
        <>
        <h1 className="list__heading">Star Wars Characters</h1>
            {sorting
                ? <div className="button__container"><button className="button__sort" onClick={sortByAscendingOrder}>Sort A-Z</button></div>
                : <div className="button__container"><button className="button__sort" onClick={sortByDescendingOrder}>Sort Z-A</button></div>}
            <div className="container">
                {characters.map(function (swCharacters) {
                    const { id, name, image, species, homeworld } = swCharacters
                    return <StarWarsCharacter key={id} id={id} name={name} image={image} species={species} homeworld={homeworld} />;
                })}
            </div>
        </>
    )
}

export default StarWarsList
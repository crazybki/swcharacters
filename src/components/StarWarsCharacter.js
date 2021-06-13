import { Link } from "react-router-dom";

function StarWarsCharacter({ id, name, image, species, homeworld }) {
    return (
        <div className="list__container">
			<h2 className="list__heading">{name}</h2>
            <img className="list__image" src={image} alt="character from star wars movie"/>
			<p className="list__txt">{species}</p>
            <p className="list__txt">{homeworld}</p>
            <div className="list__link_container">
                <Link to={`detail/${id}`}>
                    <p className="list__link">Details</p>
                </Link>
            </div>
        </div>
	);
}

export default StarWarsCharacter;
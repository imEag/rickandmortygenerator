import React from "react";

export const Character = (props) => {
    /* const { loading, error, data } = useQuery(GET_RANDOM_CHARACTER); */
    const character = props.data
    return (
        <div>
            <h2>{character.name ? character.name : "Unknown"}</h2>
            <div className="data_container">
                <img src={character.image ? character.image : "http://via.placeholder.com/400x400"} />
                <table className="table">
                    <tbody className="body">
                        <tr className="row">
                            <td data-label="Name">{character.name ? character.name : "Unknown"}</td>
                            <td data-label="Status">{character.status ? character.status : "Unknown"}</td>
                            <td data-label="Species">{character.species ? character.species : "Unknown"}</td>
                            <td data-label="Gender">{character.gender ? character.gender : "Unknown"}</td>
                            <td data-label="Origin">{character.origin ? character.origin.name : "Unknown"}</td>
                            <td data-label="Location">{character.location ? character.location.name : "Unknown"}</td>
                            <td data-label="Created">{character.created ? character.created : "Unknown"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

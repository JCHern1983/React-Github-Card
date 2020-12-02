import React from 'react';

function Followers({ image, name, html_url, id }) {
    return(
        <div className="followers">
            <img src={image} alt="avatar photo" />
            <div className="url-container">
            <h2 className ="name">{name} </h2>
            <h2 className="ids">ID:{id}</h2>
            <a href={html_url} className="url">Go to user's GitHub</a>
            </div>
        </div>
    )
}

export default Followers; 
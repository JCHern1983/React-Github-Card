import React from 'react';

function User({username}) {
    const {avatar_url, login, html_url, id} = username
    return(
        <div className="my-profile">
            <img src={avatar_url} alt="avatar photo" />
            <div className="url-container">
                <h2> {login} </h2>
                <h2 className="ids">ID:{id}</h2>
            <a href={html_url} className="url">Go to user's GitHub</a>
            </div>
        </div>
    )
}

export default User; 
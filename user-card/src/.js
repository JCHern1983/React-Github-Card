import React from 'react';
import FollowerCard from './User';
import './Followers.css';

function Followers(props) {
	//console.log("Followers props ~", props);

	return(

		<div className="FollowerContainer">
			{props.props.map((follower, i) => (
				<FollowerCard data={follower} key="i" />
			))}
		</div>
	)
}
export default Followers;
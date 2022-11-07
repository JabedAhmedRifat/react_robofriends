import React from 'react';


const Card = ({id ,name, email}) => {
	// const { id ,name , email } = props;
	return(
	  <div className='bg-blue dib br4 shadow-3 pa3 ma2 grow bw2'>
      	<img alt ='img' src={`https://robohash.org/${id}?size=200x200`}/>
      	<div>
      	  <h2>{name}</h2>
      	  <p>{email}</p>
      	</div>
	  </div>

	);
}

export default Card;
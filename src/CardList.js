import React from 'react';
import Card from './Card';


const CardList = ( {robots} ) => {
  return(
  	<div>
  	  {
        robots.maps((user,i) =>{
          return (
            <Card 
              key={i} 
              id={user.id}
              name={user.name} 
              email={user.email}
            />
          );
        })
      }
  	</div>
  );
}



export default CardList;
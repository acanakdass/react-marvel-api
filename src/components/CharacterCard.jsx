import React from 'react'

function CharacterCard({ character }) {
   return (
      <div className='content'>
         <div className='content-inner'>
            <div className='content-front'>
               <img src={character.thumbnail.path + "/portrait_incredible.jpg"} alt='' />
            </div>
            <div className='content-back'>
               <h1>{character.name}</h1>
               <ul>
                  <li>
                     <strong>Name:</strong> {character.name}
                  </li>
                  <li>
                     <strong>Description:</strong> {character.description}
                  </li>
                  <li>
                     {/* <button type="button" onClick={() => favorite(character)}>Favorite</button> */}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default CharacterCard

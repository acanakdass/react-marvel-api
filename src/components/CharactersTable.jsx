import React from 'react'
import CharacterCard from './CharacterCard'

function CharactersTable({ charactersArray, isLoading }) {

   return isLoading ? <div className="lds-hourglass"></div> :
      <section className=" contents">
         {
            charactersArray.map((item) => (
               <CharacterCard key={item.id} character={item} />
            ))
         }
      </section>
}

export default CharactersTable

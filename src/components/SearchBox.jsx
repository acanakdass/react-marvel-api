import React, { useState } from 'react'

function SearchBox({ searchFunc }) {
   const [text, setText] = useState('')
   const onSearch = (q) => {
      setText(q)
      searchFunc(q)
   }
   return (
      <div>
         <section className="search">
            <form action="">
               <input type="text"
                  className="form-control"
                  placeholder="Find a character"
                  value={text}
                  onChange={(e) => onSearch(e.target.value)}
                  autoFocus />
            </form>
         </section>
      </div>
   )
}

export default SearchBox

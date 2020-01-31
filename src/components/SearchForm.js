import React, { useState } from "react";

function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filtered = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(filtered);
    console.log(filtered);
  };

  return (
    <section className="search-form">
     
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></input>
      </form>
    </section>
  );
}

export default SearchForm; 


// function SearchForm(props) {
//   const [result, setResult] = useState();
//   const handleChanges = event => {
//     setResult(event.target.value);
//   };

//   const submitHandler = event => {
//     event.preventDefault();

//   const filter = props.character.filter(character => {
//     return character.name.toLowerCase().indexOf(result.toLowerCase()) !== -1;
//   });
//   props.searching(filter)
// };

//   return (
//     <section>
//   <form onSubmit={submitHandler}>
//   <input
//     onChange={handleChanges}
//     type='text'
//     name='character'
//     id='character'
//     placeholder='Search'
//   />
//   </form>
//   </section>
//   );
// }

// export default SearchForm;

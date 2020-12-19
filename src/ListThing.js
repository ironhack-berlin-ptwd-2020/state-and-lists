import React from 'react';



// class-based component ( can have state )
class ListThing extends React.Component {

  state = {

    movies: [
      { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg", hasOscars: false },
      { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante", hasOscars: false },
      { id: "z2uykusRE", title: "Titanic", director: "James Cameron", hasOscars: true }
    ]

  }

  // write your click handlers with this syntax
  clickHandler = () => {

    const newMovies = this.state.movies.concat({ id: "545678zgcz", title: "The Godfather Part III (Rework)", director: "Francis Coppola", hasOscars: false })
    // alternative:
    // const newMovies = [...this.state.movies, { title: "The Godfather Part III (Rework)", director: "Francis Coppola" }]

    this.setState({
      movies: newMovies
    })
  }

  deleteHandler = (id) => {

    // we could be doing this, but I suggest using filter for deletion
    // find using indexOf
    // create a copy
    // let arrayCopy = [...originalArray]
    // splice()

    this.setState({
      movies: this.state.movies.filter(movie => movie.id !== id)
    })

  }

  render() {


    const myMappingFunction = (element) => {

      return (
        <div key={element.id}>
          <h2>{element.title}</h2>
          <p>Director: {element.director}</p>
          {/* ternary operator, it's nice :-) */}
          <p>{element.hasOscars ? "Yes, it has Oscars" : "Unfortunately never won any Oscars"}</p>

          {/* for future reference */}
          {/* {element.hasOscars && <div><h1> Oscars</h1><p>Yes, this one has at least one Oscars </p></div>}
          {!element.hasOscars && <div><h1> No Oscars</h1><p>No, this one does not have at least one Oscar </p></div>} */}

          <button onClick={() => this.deleteHandler(element.id)}>Delete</button>
        </div>
      )
    }

    const myElements = this.state.movies.map(myMappingFunction)

    return (
      <div>
        <ul>
          {myElements}
        </ul>
        <button onClick={this.clickHandler}>Add The Godfather</button>
      </div>
    );
  }
};

export default ListThing;

import { Component } from "react";

// const AddMovie = (props) => {

//   const harryPotter = { id: "AMLshshs", title: "Harry Potter", director: "Chris Columbus", hasOscars: true }

//   return(
//     <button onClick = {() => {props.addMovie(harryPotter)}}>Add Harry Potter</button>
//   )
// }

class AddMovie extends Component {

  state = {
    title: "",
    director: "",
    hasOscars: false,
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({
      [name]: value,
    });
  };

  // handleTitleInput = (event) => {
  //   console.log(event);
  //   this.setState({
  //     title: event.target.value,
  //   });
  // };

  // handleDirectorInput = (event) => {
  //   this.setState({
  //     director: event.target.value,
  //   });
  // };

  // handleHasOscarsCheck = (event) => {
  //   this.setState({
  //     hasOscars: event.target.checked,
  //   });
  // };

  handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    
    this.props.addMovie(this.state);

    this.setState({
      title: "",
      director: "",
      hasOscars: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={this.state.director}
          onChange={this.handleChange}
        />

        <label>Has Oscars</label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={this.state.hasOscars}
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddMovie;

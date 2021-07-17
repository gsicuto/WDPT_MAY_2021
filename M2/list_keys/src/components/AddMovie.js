const AddMovie = (props) => {

  const harryPotter = { id: "AMLshshs", title: "Harry Potter", director: "Chris Columbus", hasOscars: true }

  return(
    <button onClick = {() => {props.addMovie(harryPotter)}}>Add Harry Potter</button>
  )
}
export default AddMovie
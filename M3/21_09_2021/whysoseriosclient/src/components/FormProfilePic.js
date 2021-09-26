import React, { useState } from 'react'
import api from '../utils/api.utils'

 const  FormProfilePic = () => {

  const [file, setFile] = useState()
  const [imageUrl, setImageUrl] = useState()


  const handleChange = (e) => {
    const file = e.target.files[0]
    const imageUrl = URL.createObjectURL(file);
    setFile(file)
    setImageUrl(imageUrl)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const info = await api.uploadPic(file);
      console.log(info)
    } catch (error) {
      console.log(error)
    }
  }

  
    return (
      <div>
        <h2>Profile Pic</h2>
        <form onSubmit={handleSubmit}>
          <label>Change Your Profile Pic</label>
          <input type='file' onChange={handleChange} />

          <img src={imageUrl}/>
          <button type='submit'>Upload</button>
        </form>
      </div>
    )
  
}

export default FormProfilePic


// Class Component

// import React, { Component } from "react";
// import api from "../utils/api.utils";

// export default class FormProfilePic extends Component {
//   state = {
//     file: {},
//   };

//   handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const objectUrl = URL.createObjectURL(file);
//     console.log(objectUrl);
//     this.setState({
//       file,
//       objectUrl,
//     });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const uploadData = new FormData();
//     uploadData.append("image", this.state.file);
//     try {
//       const updatedUser = await api.uploadProfilePic(uploadData);
//       console.log(updatedUser);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h2>Profile Pic</h2>
//         <img src={this.state.objectUrl}/>
//         <form onSubmit={this.handleSubmit}>
//           <label>Change your profile pic</label>
//           <input type="file" onChange={(e) => this.handleFileUpload(e)} />
//           <button type="submit">Save new thing</button>
//         </form>
//       </div>
//     );
//   }
// }
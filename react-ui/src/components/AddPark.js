import React from "react";
import $ from "jquery";
import { storage } from "../firebase/index";

class AddPark extends React.Component {
  constructor(props) {
    super(props);
    this.imagePreviewCanvasRef = React.createRef();
    this.state = {
      selectedFile: null,
      imgSrc: null
    };
    this.acceptedFileTypes = "image/x-png, image/png, image/jpg,image.jpeg";
  }
  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    var reader = new FileReader();

    reader.onload = e => {
      this.setState({ imgSrc: e.target.result });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  fileUploadHandler = event => {
    const image = this.state.selectedFile;
    //starting put request to firebase storage
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //the on function is event listener that provide 3 functions progress,error,complete
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function
      },
      error => {
        // error function
        console.log("errr", error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
          });
      }
    );
  };

  render() {
    return (
      <div className="addParkDiv">
        <input
          type="file"
          accept={this.acceptedFileTypes}
          multiple={false}
          onChange={this.fileSelectedHandler}
        />
        <button onClick={this.fileUploadHandler}>Uploaad</button>
      </div>
    );
  }
}

export default AddPark;

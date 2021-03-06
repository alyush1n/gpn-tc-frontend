import React, { useState } from "react";

export default function Upload(props) {
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      //   console.log("e.target.result", e.target.result);
    //   console.log(props);
    //   console.log(e.target.result)
      props?.addToStore(JSON.parse(e.target.result));
      //   setFiles(e.target.result);
    };
  };
  return (
    <>
      {/* <h1>Upload Json file - Example</h1> */}

      <p>
        <input type="file" onChange={(e)=>handleChange(e)} />
      </p>
      {/* <br /> */}
      {/* {"uploaded file content -- " + files} */}
    </>
  );
}

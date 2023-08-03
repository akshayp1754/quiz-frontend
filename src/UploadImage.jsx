import React, { useState } from "react";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <button onClick={() => setSelectedFile(null)}>Clear</button>
      {selectedFile && (
        <div>
          <h3>Selected Image:</h3>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ maxWidth: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;

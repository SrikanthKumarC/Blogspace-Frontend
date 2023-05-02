import axios from "axios";
import { useState } from "react";


const Upload = ({hidden = true}) => {
  const [file, setFile] = useState(null);
  const isHidden = hidden ? 'hidden' : '';
  
  const uploadImage = async (file) => {
    try {
      console.log("Upload Image", file);
      const formData = new FormData();
      formData.append("name", 'bro');
      formData.append("file", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      const API = "upload";
      const HOST = process.env.NEXT_PUBLIC_HOST_URL;
      const url = `${HOST}/${API}`;
      
      const result = await axios.post(url, formData, config);
      console.log("Result: ", result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`${isHidden} flex justify-center items-center w-full`}>
      <div>
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={() => uploadImage(file)} type="submit">Upload</button>
      </div>
    </div>
  );
};




export default Upload
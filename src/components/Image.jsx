import e from "express";
import axios from "axios";
import { response } from "express";
function Image(){
    const [image,setImage] = UseState(null);
    const handleImageChange = (e)=>{
         setImage (e.target.file[0]);
    };
    const handleSubmit = async()=>{
         e.preventDefault();
         const FormData = new FormData();
         FormData.append("image",image);
         try{
            const response = await axios.post('/upload',FormData);
         }
         catch(error){
             console.log(error);
         }
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange}/>
            </form>
            <br/>
            <button type="submit">
                Upload
            </button>
        </div>
    )
}
export default Image;
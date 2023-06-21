import axios from "axios";

export function DeleteFile (file){  
    if (file.length != 0)
    {
    axios.post("http://localhost:4444/delete/file/" + file, file)
        .then (res => console.log(res))
        .catch (err => console.log(err))
    }

}
    
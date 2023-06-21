import axios from "axios";

export function UploadFile (id, table, param, file){
    if (file.length != 0)
    {
    const formData = new FormData();
    formData.append("images", file);
    axios.post("http://localhost:4444/upload/image/" + id +'/' + table +'/' + param , formData)
        .then (res => {
            if (res.data.Status === "Success")
            {
                console.log("Succeded")
            }else{
                console.log("Failed")
            }
        })
        .catch (err => console.log(err))
    }

}

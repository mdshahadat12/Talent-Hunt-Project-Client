import axios from 'axios';

export const ImageUpload = async (img)=>{
    let formData= new FormData()
    formData.append('image',img)
    const { data } = await axios.post('https://api.imgbb.com/1/upload?key=f7f8506721d5a4f427d981b6647755b0',formData)
    return data
}
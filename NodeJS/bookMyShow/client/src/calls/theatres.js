const {axiosInstance} = require("./index");

//add a new movie
export const AddTheatre = async(value) => {
    try{
        const response = await axiosInstance.post("/api/theatres/", value);
        return response.data;
    }catch(err){
        console.log(err);
        return err 
    }
}

export const GetAllTheatres = async() => {
    try{
        const response = await axiosInstance.get("/api/theatres/");
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const UpdateTheatre = async(id,value) => {
    try{
        const response = await axiosInstance.put(`/api/theatres/${id}`, value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const DeleteTheatre = async(id) => {
    try{
        const response = await axiosInstance.delete(`/api/theatres/${id}`);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const GetAllTheatresPartnerOwns = async(ownerId) => {
    try{
        const response = await axiosInstance.get(`/api/theatres/${ownerId}`);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}


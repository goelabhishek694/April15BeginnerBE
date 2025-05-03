const {axiosInstance} = require("./index");

//add a new movie
export const AddMovie = async(value) => {
    try{
        const response = await axiosInstance.post("/api/movies/", value);
        return response.data;
    }catch(err){
        console.log(err);
        return err 
    }
}

export const GetAllMovies = async() => {
    try{
        const response = await axiosInstance.get("/api/movies/");
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const UpdateMovie = async(id,value) => {
    try{
        const response = await axiosInstance.put(`/api/movies/${id}`, value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const DeleteMovie = async(id) => {
    try{
        const response = await axiosInstance.delete(`/api/movies/${id}`);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const MovieById = async(id) => {
    try{
        const response = await axiosInstance.get(`/api/movies/${id}`);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data
    }
}


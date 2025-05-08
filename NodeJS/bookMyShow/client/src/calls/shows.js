import { axiosInstance } from ".";

export const AddShow = async (payload) => {
 try {
   const response = await axiosInstance.post("/api/shows/", payload);
   return response.data;
 } catch (err) {
   return err.message;
 }
};


export const UpdateShow = async (id, payload) => {
 try {
   const response = await axiosInstance.put(`/api/shows/${id}`, payload);
   console.log(payload, response);
   return response.data;
 } catch (err) {
   return err.response;
 }
};

export const GetShowsByTheatre = async (id) => {
 try {
   const response = await axiosInstance.get(
     `/api/shows/all-shows-by-theatre/${id}`
   );
   return response.data;
 } catch (err) {
   return err.response;
 }
};

export const DeleteShow = async (id) => {
 try {
   const response = await axiosInstance.delete(
     `/api/shows/${id}`
   );
   return response.data;
 } catch (err) {
   return err.response;
 }
};

export const GetAllTheatresByMovie = async ({ movie, date }) => {
 try {
   const response = await axiosInstance.get(
     `/api/shows/all-theatres-by-movie-date/${movie}/${date}`
   );
   return response.data;
 } catch (err) {
   return err.response;
 }
};

export const GetShowById = async (id) => {
 try {
   const response = await axiosInstance.get(
     `/api/shows/${id}`
   );
   return response.data;
 } catch (err) {
   return err.message;
 }
};
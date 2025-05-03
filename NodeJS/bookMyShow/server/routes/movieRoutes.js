const movieRouter = require("express").Router();
const { addMovie, getAllMovies, updateMovie, deleteMovie, movieById} = require("../controller/movieController");

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);
movieRouter.get("/:id", movieById);



module.exports = movieRouter;
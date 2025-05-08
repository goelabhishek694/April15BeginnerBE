const showRouter = require("express").Router();
const {addShow, allShowsByTheatre, allTheatresByMovieDate, updateShow, deleteShow, showById } = require("../controller/showController");

showRouter.post("/", addShow);
showRouter.get("/all-shows-by-theatre/:theatreId", allShowsByTheatre);
//get all the theatres which have some shows , filter by movie and date 
showRouter.get("/all-theatres-by-movie-date/:theatreId", allTheatresByMovieDate);
showRouter.put("/:id", updateShow);
showRouter.delete("/:id", deleteShow);
showRouter.get("/:id", showById);



module.exports = showRouter;
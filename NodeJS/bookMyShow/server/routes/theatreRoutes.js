const theatreRouter = require("express").Router();
const {addTheatre, updateTheatre, deleteTheatre, getAllTheatres, getAllTheatresPartnerOwns} = require("../controller/theatreController");

theatreRouter.post("/", addTheatre);
theatreRouter.put("/:id", updateTheatre);
theatreRouter.delete("/:id", deleteTheatre);

//get all the theatres -> will be used to approve/deny request 
theatreRouter.get("/", getAllTheatres);

//get all the theatres that are owned by Ajay Bijli -> owner of PVR 
theatreRouter.get("/:ownerId", getAllTheatresPartnerOwns);


module.exports = theatreRouter;
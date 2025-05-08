const Show = require("../models/showModel");
exports.addShow = async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "New show has been added!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

exports.allShowsByTheatre = async (req, res) => {
  try {
    const {theatreId} = req.params;
    const shows = await Show.find({theatre: theatreId}).populate("movie");
    if(shows.length == 0){
        res.send({
            success: true,
            message: "No shows found for this theatre!",
            data: []
          });
    }
    res.send({
      success: true,
      message: "shows found for this theatre!",
      data: shows
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

// get all the theatres by movie and date 
exports.allTheatresByMovieDate = async (req, res) => {
  try {
    const {movie, date} = req.params;
    const  shows = await Show.find({movie, date}).populate("theatre");
    let uniqueTheatres =[];
    shows.forEach((show) => {
        let theatre = show.theatre._id;
        let oldTheatre = uniqueTheatres.find((uniqueTheatre) => uniqueTheatre == theatre);
        //this means this is a unique theatre which is not present in our uniqueTheatres array , so we add it 
        if(!oldTheatre){
            let showsOfThisTheatre = shows.filter(show=> show.theatre._id == theatre);
            uniqueTheatres.push({
                ...show.theatre._doc,
                shows: showsOfThisTheatre
            })
        }
    })
    res.send({
      success: true,
      message: "All Thetares with shows fetched for a movie and date!",
      data: uniqueTheatres
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

exports.updateShow = async (req, res) => {
  try {
    await Show.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "The show has been updated!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

exports.deleteShow = async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "The show has been deleted!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

exports.showById = async (req, res) => {
  try {
    const show = await Show.findById(req.params.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "Show fetched!",
      data: show,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

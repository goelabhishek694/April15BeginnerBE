const Movie = require("../models/movieModel");

exports.addMovie = async (req, res) => {
    try{
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message: "movie has been added",
            data: newMovie
        })

    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.getAllMovies = async (req, res) => {
    try{
        const allMovies = await Movie.find();
        res.send({
            success: true,
            message: "movies fetched successfully",
            data: allMovies
        })

    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.updateMovie = async (req, res) => {
    try{
        const {id: movieId} = req.parms ;
        const update = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, update);
        res.send({
            success: true,
            message: "movie updated successfully",
            data: updatedMovie
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.deleteMovie = async (req, res) => {
    try{
        const {id: movieId} = req.parms ;
        await Movie.findByIdAndDelete(movieId);
        res.send({
            success: true,
            message: "movie updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.movieById = async (req, res) => {
    try{
        const {id: movieId} = req.parms ;
        const movie = await Movie.findById(movieId);
        res.send({
            success: true,
            message: "movie fetched successfully",
            data: movie
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
const Theatre = require("../models/theatreModel");

exports.addTheatre = async (req, res) => {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success: true,
            message: "theatre has been added",
            data: newTheatre
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.updateTheatre = async (req, res) => {
    try{
        const {id: theatreId} = req.params ;
        const update = req.body;
        const updatedTheatre = await Theatre.findByIdAndUpdate(theatreId, update);
        res.send({
            success: true,
            message: "theatre updated successfully",
            data: updatedTheatre
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.deleteTheatre = async (req, res) => {
    try{
        const {id: theatreId} = req.params ;
        const updatedTheatre = await Theatre.findByIdAndDelete(theatreId);
        res.send({
            success: true,
            message: "theatre deleted successfully",
            data: updatedTheatre
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.getAllTheatres = async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate("owner");
        res.send({
            success: true,
            message: "theatres fetched successfully",
            data: allTheatres
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.getAllTheatresPartnerOwns = async (req, res) => {
    try{
        const {ownerId} = req.params;
        const allTheatres = await Theatre.find({owner: ownerId});
        res.send({
            success: true,
            message: "theatres by owner fetched successfully",
            data: allTheatres
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
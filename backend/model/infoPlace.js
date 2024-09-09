const mongoose = require("mongoose");
const infoSchema = mongoose.Schema(
    {
        Zone: { type: String},
        State: { type: String},
        City: { type: String},
        Name: { type: String},
        Type: { type: String},
        Entrance_Fee_in_INR: { type: String},
    }
);
const Ticket = mongoose.model("Ticket", infoSchema);
module.exports = Ticket;
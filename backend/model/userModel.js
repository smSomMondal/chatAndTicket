const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ticTnfo = mongoose.Schema(
    {
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            unique:true,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        people: {
            type: String,
            required: true
        },
        total: {
            type: String,
            required: true
        },
        time : {
            type: String,
        } ,
    },
    { _id: false, id: false ,timestamps: true}
);
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique:true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        
        ticketHistory: [ticTnfo],
        
    },    
    {
        timestamps: true
    }
);
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
userSchema.methods.comparePassword = async function(pass){
    return await bcrypt.compare(pass, this.password);
}
module.exports = mongoose.model("User", userSchema);
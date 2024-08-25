import { Schema, model } from "mongoose";

const journeySchema = new Schema({
    passengerId: {
        type: String,
        required: true
    },
    driverId: {
        type: String,
        required: true
    },
    pickOff: {
        type: {latitude: Float64Array, longitude: Float64Array},
        required: true
    },
    dropOff: {
        type: {latitude: Float64Array, longitude: Float64Array},
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["ACTIVE", "COMPLETED", "CANCELLED"],
        default: "ACTIVE"
    }
}, { timestamps: true });

const Journey = model("Journey", journeySchema);

export default Journey;

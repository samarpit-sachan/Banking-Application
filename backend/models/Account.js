"use strict";

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const accountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});
const Account = model("Account", accountSchema);
export default Account
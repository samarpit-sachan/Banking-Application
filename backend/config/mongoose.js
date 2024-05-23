"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConn = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, `../.env.${process.env.ENVIROMENT}`) });
exports.dbConn = mongoose_1.default.createConnection(process.env.MONGODB_URI, {
    autoCreate: true,
    autoIndex: true,
    directConnection: true
});

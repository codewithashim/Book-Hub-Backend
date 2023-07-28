"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const books_constant_1 = require("./books.constant");
const reviewSchema = new mongoose_1.Schema({
    userName: { type: String },
    userProfile: { type: String },
    comment: { type: String },
}, {
    timestamps: true,
});
const bookSchema = new mongoose_1.Schema({
    status: {
        enum: books_constant_1.bookStatus,
        type: String,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
    reviews: [reviewSchema],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)('Books', bookSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookValidator = void 0;
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    userName: zod_1.z.string(),
    userProfile: zod_1.z.string().url(),
});
const reviewZodSchema = zod_1.z.object({
    user: userZodSchema,
    comment: zod_1.z.string(),
});
const bookZodSchema = zod_1.z.object({
    status: zod_1.z.string().optional(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    author: zod_1.z.string(),
    genre: zod_1.z.string(),
    email: zod_1.z.string(),
    publicationYear: zod_1.z.string(),
    image: zod_1.z.string().url(),
    reviews: zod_1.z.array(reviewZodSchema).optional(),
});
const createBookZodSchema = zod_1.z.object({
    body: bookZodSchema,
});
exports.createBookValidator = {
    createBookZodSchema,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/create-user', (0, validateRequest_1.default)(user_validation_1.createUserValidator.createUserZodSchema), user_controller_1.UserController.createUser);
router.get('/email/:email', user_controller_1.UserController.getUserByEmail);
router.get('/id/:id', user_controller_1.UserController.getUserById);
router.get('/', user_controller_1.UserController.getAllUsers);
exports.UserRoutes = router;

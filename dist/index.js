"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./controller/index"));
dotenv_1.default.config();
if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}
const PORT = parseInt(process.env.PORT);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

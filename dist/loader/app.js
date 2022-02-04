"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.default = () => {
    const app = (0, express_1.default)();
    app.get('/hello', (_req, res) => {
        res.send('hello world');
    });
    return app;
};
//# sourceMappingURL=app.js.map
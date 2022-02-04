"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
exports.default = () => {
    var _a;
    try {
        const app = (0, app_1.default)();
        app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080, () => {
            console.log('Server is Running!');
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
//# sourceMappingURL=index.js.map
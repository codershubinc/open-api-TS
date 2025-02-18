"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("../v0.1/user/routes/user.routes");
var router = (0, express_1.Router)();
router.use('/users', user_routes_1.default);
exports.default = router;

import asynchandler from "../../../../common/handlers/async.handler";

const user = asynchandler(async (req, res) => {
    res.send("Hello, User!");
});




export {
    user
};
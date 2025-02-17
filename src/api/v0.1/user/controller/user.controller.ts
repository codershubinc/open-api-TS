import asynchandler from '@/common/handlers/async.handler';
import data from '@/data/contryData/utils/handler/contry.data.controller';

const user = asynchandler(async (req, res) => {


    res.send("this api is under development ...............");
});

export {
    user
};
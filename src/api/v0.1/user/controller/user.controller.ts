import asynchandler from '@/common/handlers/async.handler';
import data from '@/data/contryData/utils/handler/contry.data.controller';

const user = asynchandler(async (req, res) => {
    const ftData = await data();
    console.log('ftData', ftData);


    res.send(ftData);


});

export {
    user
};
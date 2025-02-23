import firstName from './firstName';
import lastName from './lastName';
import streets from './streets';
import states from './states';
import cities from './cities';
import femaleFirst from './femaleFirstName';
import maleFirst from './maleFirstName';
import { ContryData } from '../../utils/interfaces/contry.data.interface';

const data = {
    firstName,
    lastName,
    streets,
    states,
    cities,
    femaleFirst,
    maleFirst
};

export default data as ContryData;
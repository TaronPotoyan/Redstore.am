import express from 'express'; 
import obj_phon from '../controllers/controll_phons';


const route_phons = express();


route_phons.get('/',obj_phon.getPhonesController);
route_phons.post('/',obj_phon.postPhonesController);
route_phons.get ('/:_id', obj_phon.getPhon);

export default route_phons;


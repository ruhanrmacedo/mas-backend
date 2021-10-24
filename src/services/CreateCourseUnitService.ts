/*import { getRepository} from "typeorm";
import { CourseUnit } from "../models/CourseUnit";*/
interface CouseUnitData {
    name: string;
    description: string;
}

class CreateCourseUnitService{
    public async execute(data:CouseUnitData){
        const {name,description} = data;

        /*const courseUnitRepository = getRepository(CourseUnit);

        const checkCourseUnitExists = await courseUnitRepository.findOne({name});

        if(checkCourseUnitExists){
            return{
                error:"Course Unit already exist"
            }
        }*/
        const courseUnit = {
            name,
            description
        };
        
        /*await courseUnitRepository.save(courseUnit);*/

        return courseUnit;

    }
}

export {CreateCourseUnitService};
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';

import { CourseUnit } from './CourseUnit';

class Activy {

    constructor(){
        if(!this.id){
            this.id = uuid()
        }

    }
    
    @PrimaryColumn()
    readonly id: string

    @Column()
    name:string;

    @CreateDateColumn()
    activy_date:Date;

    @Column()
    CourseUnit:string;

    @CreateDateColumn()
    crated_at:Date;

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit

}

export {Activy}
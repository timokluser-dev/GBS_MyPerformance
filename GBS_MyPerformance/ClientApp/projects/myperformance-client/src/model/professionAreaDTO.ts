/**
 * GBS_MyPerformance
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ProfessionDTO } from './professionDTO';
import { SchoolClassDTO } from './schoolClassDTO';
import { SubjectDTO } from './subjectDTO';

export interface ProfessionAreaDTO { 
    id?: string;
    name?: string;
    professions?: Array<ProfessionDTO>;
    schoolClasses?: Array<SchoolClassDTO>;
    subjects?: Array<SubjectDTO>;
}
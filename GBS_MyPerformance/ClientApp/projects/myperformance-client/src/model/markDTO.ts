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
import { RatingDTO } from './ratingDTO';
import { StudentDTO } from './studentDTO';

export interface MarkDTO { 
    id?: string;
    value?: number;
    studentId?: string;
    student?: StudentDTO;
    ratingId?: string;
    rating?: RatingDTO;
}
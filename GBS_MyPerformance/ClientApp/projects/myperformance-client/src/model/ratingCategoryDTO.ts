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
import { RatingDTO } from './ratingDTO';
import { RoundingTypeDTO } from './roundingTypeDTO';
import { SemesterRatingDTO } from './semesterRatingDTO';

export interface RatingCategoryDTO { 
    id?: string;
    name?: string;
    diplomaFactor?: number;
    categoryAverageRoundingType?: RoundingTypeDTO;
    professionId?: string;
    profession?: ProfessionDTO;
    semesterRatings?: Array<SemesterRatingDTO>;
    singleRatings?: Array<RatingDTO>;
}
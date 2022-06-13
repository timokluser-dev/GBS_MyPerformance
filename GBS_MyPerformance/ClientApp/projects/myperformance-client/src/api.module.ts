import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CompanyService } from './api/company.service';
import { ConfigurationService } from './api/configuration.service';
import { EditTimeSpanService } from './api/editTimeSpan.service';
import { HealthService } from './api/health.service';
import { LoginDomainService } from './api/loginDomain.service';
import { MarkService } from './api/mark.service';
import { OidcConfigurationService } from './api/oidcConfiguration.service';
import { ProfessionService } from './api/profession.service';
import { ProfessionAreaService } from './api/professionArea.service';
import { RatingService } from './api/rating.service';
import { RatingCategoryService } from './api/ratingCategory.service';
import { SchoolClassService } from './api/schoolClass.service';
import { SemesterService } from './api/semester.service';
import { SemesterRatingService } from './api/semesterRating.service';
import { StudentService } from './api/student.service';
import { SubjectService } from './api/subject.service';
import { UserConfigurationService } from './api/userConfiguration.service';
import { WeatherForecastService } from './api/weatherForecast.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CompanyService,
    ConfigurationService,
    EditTimeSpanService,
    HealthService,
    LoginDomainService,
    MarkService,
    OidcConfigurationService,
    ProfessionService,
    ProfessionAreaService,
    RatingService,
    RatingCategoryService,
    SchoolClassService,
    SemesterService,
    SemesterRatingService,
    StudentService,
    SubjectService,
    UserConfigurationService,
    WeatherForecastService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}

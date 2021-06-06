import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForCapitalComponent } from "./countries/pages/for-capital/for-capital.component";
import { ForCountyComponent } from "./countries/pages/for-county/for-county.component";
import { ForRegionComponent } from "./countries/pages/for-region/for-region.component";
import { ViewCountryComponent } from "./countries/pages/view-country/view-country.component";

const routes : Routes = [
    {
        path: '',
        component: ForCountyComponent,
        pathMatch: "full"
    },
    {
        path: "por-capital",
        component: ForCapitalComponent
    },
    {
        path: "por-continente",
        component: ForRegionComponent
    },
    {
        path: "por-pais/:id",
        component: ViewCountryComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {

}
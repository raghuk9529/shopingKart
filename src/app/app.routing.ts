import {Routes,RouterModule} from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { TvComponent } from './tv/tv.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ToysComponent } from './toys/toys.component';
import { EproductdetailsComponent } from './eproductdetails/eproductdetails.component';
import { MensProductDetailsComponent } from './mens-product-details/mens-product-details.component';
import { WProductDetailsComponent } from './w-product-details/w-product-details.component';
import { TproductdetailsComponent } from './tproductdetails/tproductdetails.component';
import { SportsComponent } from './sports/sports.component';



const routes:Routes=[
  {path:"",redirectTo:"/electronics",pathMatch:'full'},
   {path:'electronics',component:ElectronicsComponent},
   {path:'men',component:MensComponent},
    {path:'women',component:WomensComponent},
    {path:'toys',component:ToysComponent},
    {path:'sports',component:SportsComponent},
    {path:'epd/:proid',component:EproductdetailsComponent},
    {path:"mpd/:proid",component:MensProductDetailsComponent},
    {path:'wpd/:proid',component:WProductDetailsComponent},
    {path:'tpd/:proid',component:TproductdetailsComponent}
   
]
export const routing=RouterModule.forRoot(routes);
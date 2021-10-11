import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMzComponent } from './about-mz/about-mz.component';
import { ContentComponent } from './content/content.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [{
  path:"",component:ContentComponent
},
{
  path:"about",component:AboutMzComponent
},
{
  path:"impressum",component:HomePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMzComponent } from './about-mz/about-mz.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [{
  path:"",component:ContentComponent
},
{
  path:"about",component:AboutMzComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

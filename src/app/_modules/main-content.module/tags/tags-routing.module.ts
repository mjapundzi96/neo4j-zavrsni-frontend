import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TagsComponent } from './tags.component'
import { TagComponent } from './tag/tag.component' 

const routes: Routes = [
    {
        path: '',
        component: TagsComponent,
        children: [
            {
                path: ':name',
                component: TagComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class TagsRoutingModule { }

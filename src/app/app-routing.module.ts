import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomQuoteComponent } from './random-quote/random-quote.component';

const routes: Routes = [
    { path: 'quote', component: RandomQuoteComponent },
    { path: '', redirectTo: 'quote', pathMatch: 'full' },
    { path: '**', redirectTo: 'quote' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

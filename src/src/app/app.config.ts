import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';

// определение маршрутов
const appRoutes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: '**', component: NotFoundPageComponent },
];

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(appRoutes)],
};

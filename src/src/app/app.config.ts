import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { FAQPageComponent } from './pages/faq/faq.component';
import { LessonPageComponent } from './pages/lesson/lesson.component';
import { LessonsPageComponent } from './pages/lessons/lessons.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { SandboxPageComponent } from './pages/sandbox/sandbox.component';

// определение маршрутов
const appRoutes: Routes = [
	{ path: '', component: SandboxPageComponent },
	{ path: 'faq', component: FAQPageComponent },
	{ path: 'lessons', component: LessonsPageComponent },
	{ path: 'lesson/:id', component: LessonPageComponent },
	{ path: '**', component: NotFoundPageComponent },
];

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(appRoutes)],
};

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppLanding } from "./pages/landing/app.landing";

const routes: Routes = [
    { path: "", redirectTo: "/AppLanding", pathMatch: "full" },
    { path: "AppLanding", component: AppLanding },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
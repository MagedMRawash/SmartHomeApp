"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { jsmodbus } from 'jsmodbus';
// import { nativescript-nodeify }
// declare function require(name:string);
// console.log( require('nativescript-nodeify') ); 
// var jsmodbus = require('jsmodbus');
// console.log(jsmodbus);
var http = require("http");
var AppLanding = (function () {
    function AppLanding(route) {
        this.route = route;
    }
    AppLanding.prototype.onTouch = function () {
        // console.log('"Touch point: [" + args.getX() + ", " + args.getY()  ] activePointers: " + args.getActivePointers().length');
        var LampURL = "http://192.168.1.4:3000/open";
        // http.get('').subscribe(res => {
        //     console.log(JSON.stringify(res) )
        // });        
        // http.getString(LampURL).then(function (res) {
        http.getJSON("http://httpbin.org/get").then(function (res) {
            //// Argument (r) is string!
            console.log(res);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });
    };
    AppLanding.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
    };
    AppLanding = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "app.landing.html",
            styleUrls: ["app.landing.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AppLanding);
    return AppLanding;
}());
exports.AppLanding = AppLanding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmxhbmRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAubGFuZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFFakQsdUNBQXVDO0FBQ3ZDLGtDQUFrQztBQUVsQyx5Q0FBeUM7QUFDekMsbURBQW1EO0FBRW5ELHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFFekIsMkJBQTZCO0FBVzdCO0lBQ0ksb0JBQ1ksS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFJaEMsQ0FBQztJQUdGLDRCQUFPLEdBQVA7UUFDSSw2SEFBNkg7UUFDN0gsSUFBSSxPQUFPLEdBQUcsOEJBQThCLENBQUE7UUFDNUMsa0NBQWtDO1FBQ2xDLHdDQUF3QztRQUN4QyxjQUFjO1FBRWQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBRXJELDRCQUE0QjtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFBO1FBQ3JCLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDViwyQkFBMkI7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFJRCw2QkFBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQS9CUSxVQUFVO1FBUHRCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztTQUNoQyxDQUFDO3lDQUlxQix1QkFBYztPQUZ4QixVQUFVLENBZ0N0QjtJQUFELGlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuLy8gaW1wb3J0IHsganNtb2RidXMgfSBmcm9tICdqc21vZGJ1cyc7XG4vLyBpbXBvcnQgeyBuYXRpdmVzY3JpcHQtbm9kZWlmeSB9XG5cbi8vIGRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShuYW1lOnN0cmluZyk7XG4vLyBjb25zb2xlLmxvZyggcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW5vZGVpZnknKSApOyBcblxuLy8gdmFyIGpzbW9kYnVzID0gcmVxdWlyZSgnanNtb2RidXMnKTtcbi8vIGNvbnNvbGUubG9nKGpzbW9kYnVzKTtcblxuaW1wb3J0IGh0dHAgPSByZXF1aXJlKCdodHRwJylcbmltcG9ydCBqc21vZGJ1cyA9IHJlcXVpcmUoJ2pzbW9kYnVzJylcblxuIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAubGFuZGluZy5odG1sXCIsXG4gICAgc3R5bGVVcmxzOltcImFwcC5sYW5kaW5nLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcExhbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgLy8gcHJpdmF0ZSBodHRwOkh0dHBcbiAgICApIHtcbiAgICBcbiAgICAgfVxuXG5cbiAgICBvblRvdWNoKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnXCJUb3VjaCBwb2ludDogW1wiICsgYXJncy5nZXRYKCkgKyBcIiwgXCIgKyBhcmdzLmdldFkoKSAgXSBhY3RpdmVQb2ludGVyczogXCIgKyBhcmdzLmdldEFjdGl2ZVBvaW50ZXJzKCkubGVuZ3RoJyk7XG4gICAgICAgIGxldCBMYW1wVVJMID0gXCJodHRwOi8vMTkyLjE2OC4xLjQ6MzAwMC9vcGVuXCJcbiAgICAgICAgLy8gaHR0cC5nZXQoJycpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSApXG4gICAgICAgIC8vIH0pOyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBodHRwLmdldFN0cmluZyhMYW1wVVJMKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cDovL2h0dHBiaW4ub3JnL2dldFwiKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIHN0cmluZyFcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyApXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLy8vIEFyZ3VtZW50IChlKSBpcyBFcnJvciFcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAgXG5cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgIH1cbn1cblxuXG4gXG4iXX0=
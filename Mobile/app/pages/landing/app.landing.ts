import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { jsmodbus } from 'jsmodbus';
// import { nativescript-nodeify }

// declare function require(name:string);
// console.log( require('nativescript-nodeify') ); 

var jsmodbus = require('jsmodbus');
// console.log(jsmodbus);

import http = require('http')
import jsmodbus = require('jsmodbus')

 
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.landing.html",
    styleUrls:["app.landing.css"]
})

export class AppLanding {
    constructor(
        private route: ActivatedRoute,
        // private http:Http
    ) {
    
     }


    onTouch() {
        // console.log('"Touch point: [" + args.getX() + ", " + args.getY()  ] activePointers: " + args.getActivePointers().length');
        let LampURL = "http://192.168.1.4:3000/open"
        // http.get('').subscribe(res => {
        //     console.log(JSON.stringify(res) )
        // });        
        
        // http.getString(LampURL).then(function (res) {
        http.getJSON("http://httpbin.org/get").then(function (res) {
                
            //// Argument (r) is string!
            console.log(res )
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e)
        });
    }
     


    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
    }
}


 

import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Modal } from 'ng2-modal';

@Component({
    selector: 'ip-home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
    }

    public pages = [
        { title: "Image 1", src: "../assets/photos/main.jpg" },
        { title: "Image 1", src: "../assets/photos/presentation.jpg" }
    ];
}

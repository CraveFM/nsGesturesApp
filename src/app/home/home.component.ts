import { Component, OnInit } from "@angular/core";
import { SwipeDirection } from "@nativescript/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {

    log = [];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onTap() {
        this.log.unshift({ text: "You performed a tap" });
    }

    onDoubleTap() {
        this.log.unshift({ text: "You performed a double tap" });
    }

    onLongPress() {
        this.log.unshift({ text: "You performed a long press" });
    }

    onSwipe(args) {
        let direction = args.direction == SwipeDirection.down ? "down" :
            args.direction == SwipeDirection.up ? "up" :
            args.direction == SwipeDirection.left ? "left" : "right";
        this.log.unshift({ text: "You performed a " + direction + " swipe" });
    }

    onPan() {
        // Commenting this out as pan events are pretty noisy.
        // this.log.unshift({ text: "You performed a pan" });
    }

    onPinch() {
        this.log.unshift({ text: "You performend a pinch" });
    }

    onRotation() {
        this.log.unshift({ text: "You performed a rotation" });
    }

}

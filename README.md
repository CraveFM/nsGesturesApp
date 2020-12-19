# Gestures App

[<img src="https://github.com/angular/angular/blob/master/aio/src/assets/images/logos/angular/angular.png" width="31" height="31"></img>](https://play.nativescript.org/?template=play-ng&id=Wh9rvG&v=49) Adding Basic Gestures to Your Apps

[<img src="https://raw.githubusercontent.com/NativeScript/code-samples/master/screens/basic-gestures.png" width="124" height="270"></img>](https://play.nativescript.org/?template=play-ng&id=Wh9rvG&v=49)

Example taken from [:bookmark:`nativescript.rocks`](https://plugins.nativescript.rocks/samples) and can be used as a template since it has already been converted to [NativeScript 7](https://nativescript.org/blog/nativescript-7-announcement)

## :o: Create a project by using this template

```
$ ns create nsGesturesApp --template https://github.com/CraveFM/nsGesturesApp
```


## :m: From Scratch

* Create a blank NativeScript/Angular/sass project

```
$ ns create nsGesturesApp --template @nativescript/template-blank-ng
```

## :a: Home Component

:round_pushpin: in the HomeComponent `Class`

- [ ] Add the `log` instance variables that will be used later on

```typescript
    log = [];
```

- [ ] Add all the methods associated with the gestures

```typescript
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
```

:round_pushpin: Styles

- [ ] Add the `styleUrls` operator to the `@Component` decorator

```typescript
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
```

- [ ] Let's add a new `home.component.css` stylesheet and add the following stylesheet classes

```css
.target {
    background-color: red;
    color: white;
    vertical-align: middle;
    text-align: center;
    height: 150;
}
.instructions {
    padding: 20;
}
```


:round_pushpin: Template

- [ ] Let finish with the XML template

```
<ActionBar>
    <Label text="Gestures 👌"></Label>
</ActionBar>
```

```
<GridLayout rows="auto, auto, *">
	<Label row="0" class="target" text="Target Area"
		(tap)="onTap()"
		(doubleTap)="onDoubleTap()"
		(longPress)="onLongPress()"
		(swipe)="onSwipe($event)"
		(pan)="onPan()"
		(pinch)="onPinch()"
		(rotation)="onRotation()">
	</Label>

	<Label row="1" class="instructions" textWrap="true" text="Try to perform the following gestures in the target area—tap, double tap, long press, swipe, pinch, and rotation."></Label>

	<ListView row="2" class="list-group" [items]="log">
		<ng-template let-entry="item">
			<Label class="m-20" [text]="entry.text"></Label>
		</ng-template>
	</ListView>
</GridLayout>
```


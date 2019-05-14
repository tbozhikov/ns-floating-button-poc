import { Component, ElementRef, ViewChild } from "@angular/core";
import { isIOS } from 'tns-core-modules/platform';

declare const IQKeyboardManager: any;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    @ViewChild("fabItemContainer") fabItemContainer: ElementRef;

    isActive: boolean = false;
    private iqKeyboard;

    onLoaded() {
        if (isIOS) {
            console.log("settingiqKeyboard")
            this.iqKeyboard = IQKeyboardManager.sharedManager();
            this.iqKeyboard.keyboardDistanceFromTextField = 90;
        }
    }

    onButtonTap(args) {
        this.isActive = !this.isActive
    }
}

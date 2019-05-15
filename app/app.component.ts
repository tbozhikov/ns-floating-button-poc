import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { isIOS } from 'tns-core-modules/platform';
// import { android } from "tns-core-modules/application/application";
import { Page } from "tns-core-modules/ui/page/page";

declare const IQKeyboardManager: any;
declare const android: any;

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

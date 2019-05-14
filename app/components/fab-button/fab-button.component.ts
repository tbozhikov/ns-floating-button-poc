import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "FabButton",
	moduleId: module.id,
	templateUrl: "./fab-button.component.html",
	styleUrls: ['./fab-button.component.css']
})
export class FabButtonComponent {

	@Input() isActive: boolean = false;
	@Output() buttonTap: EventEmitter<any> = new EventEmitter();

	onButtonTap(args) {
		this.buttonTap.emit(args);
	}
}
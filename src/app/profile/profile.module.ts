import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
		ProfileComponent,
    ],
    imports: [CommonModule, FormsModule],
    exports: [ProfileComponent],
    entryComponents: [ProfileComponent],
})
export class ProfileModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ProfileModule
		}
	}
}

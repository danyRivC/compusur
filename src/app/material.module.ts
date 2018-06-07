import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatGridListModule, MatRadioModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
const modules= [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatExpansionModule,
    MatProgressSpinnerModule
]
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule{

}
import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatCardModule} from "@angular/material/card"
import {MatRadioModule} from "@angular/material/radio"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatSortModule} from "@angular/material/sort"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatTableModule} from "@angular/material/table"
import {MatDialogModule} from "@angular/material/dialog"
import {MatButtonModule} from "@angular/material/button"
@NgModule({
    exports:[
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatRadioModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})
export class MaterialModule {}
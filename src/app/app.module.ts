import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';

import { MatInputModule, MatButtonModule, MatFormFieldModule, 
  MatDialogModule, MatCardModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    FormsModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
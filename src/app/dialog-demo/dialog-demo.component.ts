import { MyDialogComponent } from './../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'This text is passed to dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed ${result}');
      this.dialogResult = result;
    })
  }
}

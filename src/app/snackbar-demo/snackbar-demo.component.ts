import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.css']
})
export class SnackbarDemoComponent implements OnInit {

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackbar.open("This is a snackbar", "Got it!");
  }

}

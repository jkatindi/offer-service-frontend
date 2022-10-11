import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ServiceOffer} from "../services/service.offer";
import {DialogModifyComponent} from "../dialog-modify/dialog-modify.component";

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {
  detail:any;
  constructor(@Inject(MAT_DIALOG_DATA) data: any,
              private serviceOffer: ServiceOffer,private dialog: MatDialog) {
    this.detail=data;
  }

  ngOnInit(): void {
  }

  modifiyOffer(id:any) {
    let ref=  this.dialog.open(DialogModifyComponent,{data: this.detail});
      ref.afterClosed().subscribe(data => console.log(data) );
  }
}

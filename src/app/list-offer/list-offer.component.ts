import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ServiceOffer} from "../services/service.offer";
import {Router} from "@angular/router";
import {JobOffer} from "../models/job-offer";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogDetailComponent} from "../dialog-detail/dialog-detail.component";

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements AfterViewInit{
  displayedColumns: string[] = ["id", "title","availablePlace"];
  @ViewChild('matPaginator') paginator!: MatPaginator;
  dataSource !:MatTableDataSource<JobOffer>;
  @ViewChild('dialogDetail')
  dialogDetail!: TemplateRef<any>;



  constructor(public dialog: MatDialog,private serviceOffer: ServiceOffer,private  router:Router) {
  }
  ngOnInit() {
    this.serviceOffer.getAllJobOffers().subscribe((data)=>
    {
      this.dataSource=new MatTableDataSource<JobOffer>(data);
      console.log('this  is ', this.paginator)
    })
    this.dataSource.paginator = this.paginator;
  }


  detailOffer(row: any) {
    //this.router.navigate(["detail-offer/",id]);
    const myDetailDialog=this.dialog.open(DialogDetailComponent,
      {data: row,
             panelClass: 'fullscreen-dialog',
             height: '90vh',
             width: '100%'
           });
    myDetailDialog.afterClosed().subscribe((response)=>{
      console.log(response)
    })
  }

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';






@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent {
  animal: string;
  name: string;
  address:string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal,address:this.address}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result!==undefined){
        this.name = result.name;
        this.address = result.address;
      }
      
    });
  }
  saveStudent(){
    console.log('name= '+this.name+ ' address= '+this.address);
  }
}
  

   
 




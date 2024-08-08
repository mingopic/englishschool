import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catalogDet } from 'src/app/model/catalogDet';
import { catalogDetService } from 'src/app/shared/catalogDet.service';

interface Student {
  name: string;
  currentLevel: string;
  levelProgress: number;
  pendindTask: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [MessageService]
})
export class StudentsComponent implements OnInit {

  lsStudent: Student[] = [];
  lsCatalogDet: any[] = [];
  selectedSize = {name: ' ', class: 'p-datatable-sm'};

  constructor(private catalogDetService: catalogDetService,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.lsStudent = [
      { name: "César Domingo Luna Gutiérrez", currentLevel: "ViewPoint 2", levelProgress: 80, pendindTask: 0 },
      { name: "María Guadalupe Flores Quiroz", currentLevel: "ViewPoint 2", levelProgress: 60, pendindTask: 0 },
      { name: "Mario Daniel Luna Gutiérrez", currentLevel: "ViewPoint 2", levelProgress: 20, pendindTask: 2 },
    ]
    this.getLsCatalogDetByCatId();
  }

  getLsCatalogDetByCatId() {
    this.catalogDetService.GetGetAllByCatId(1).subscribe(
      (response) => {
            this.lsCatalogDet = response;
            console.log(JSON.stringify(this.lsCatalogDet));
    }, (error) => {
        this.showToastMessage('Error',error.message);
    });
  }

  showToastMessage(messageType:string, message:string) {
    this.messageService.add({ severity: messageType.toLowerCase(), summary: messageType, detail: message, sticky: true });
  }


}

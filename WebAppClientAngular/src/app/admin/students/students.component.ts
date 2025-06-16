import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { catalogDet } from '../../core/models/catalogDet';
import { catalogDetService } from '../../core/services/catalogDetService';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';

interface Student {
  name: string;
  currentLevel: string;
  levelProgress: number;
  pendindTask: number;
}


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [TableModule, IconFieldModule, InputTextModule, InputIconModule],
  providers: [MessageService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
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

import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  currentLevel: string;
  levelProgress: number;
  pendindTask: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  lsStudent: Student[] = [];
  selectedSize = {name: ' ', class: 'p-datatable-sm'};

  ngOnInit(): void {
    this.lsStudent = [
      { name: "César Domingo Luna Gutiérrez", currentLevel: "ViewPoint 2", levelProgress: 80, pendindTask: 0 },
      { name: "María Guadalupe Flores Quiroz", currentLevel: "ViewPoint 2", levelProgress: 60, pendindTask: 0 },
      { name: "Mario Daniel Luna Gutiérrez", currentLevel: "ViewPoint 2", levelProgress: 20, pendindTask: 2 },
    ]
  }


}

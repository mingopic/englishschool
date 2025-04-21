import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

interface Material {
  name: string;
  code: string;
}

@Component({
  selector: 'app-mylearning',
  templateUrl: './mylearning.component.html',
  styleUrls: ['./mylearning.component.scss']
})
export class MylearningComponent implements OnInit {
  units!: any[];
  selectedSize = {name: ' ', class: 'p-datatable-sm'};

  materials: Material[] = [];
  selectedMaterial: Material | undefined;

  data = [
    {
      "name": "Unit 1",
      "title": "Social networks",
      "pendingTask": 4,
      "completedTask": 5,
      "totalTask": 9,
      "progress": 50,
      "lessons": [
        {
          "lesson": "Lesson A",
          "topic": "Speed-friending",
          "studentbook": true,
          "studentbook_endDate": "2024/05/01",
          "workbook": true,
          "workbook_endDate": "2024/05/02",
          "type": "lesson"
        },
        { 
          "lesson": "Lesson B",
          "topic": "Networking",
          "studentbook": true,
          "studentbook_endDate": "2024/05/01",
          "workbook": true,
          "workbook_endDate": "2024/05/02",
          "type": "lesson"
        },
        { 
          "lesson": "Lesson C",
          "topic": "And why's that?",
          "studentbook": true,
          "studentbook_endDate": "2024/05/03",
          "workbook": false,
          "workbook_endDate": "-",
          "type": "lesson"
        },
        { 
          "lesson": "Lesson D",
          "topic": "Online footprints",
          "studentbook": false,
          "studentbook_endDate": "-",
          "workbook": false,
          "workbook_endDate": "-",
          "type": "lesson"
        },
        { 
          "lesson": "",
          "topic": "Quiz Unit 1",
          "studentbook": false,
          "studentbook_endDate": "-",
          "workbook": false,
          "workbook_endDate": "-",
          "type": "quiz"
        }
      ]
    },
    {
      "name": "Unit 2",
      "title": "The media",
      "pendingTask": 6,
      "completedTask": 3,
      "totalTask": 9,
      "progress": 70,
      "lessons": [
        {
          "lesson": "Lesson A",
          "topic": "Speed-friending",
          "studentbook": true,
          "studentbook_endDate": "2024/05/01",
          "workbook": true,
          "workbook_endDate": "2024/05/02",
          "type": "lesson"
        },
        { 
          "lesson": "Lesson B",
          "topic": "Networking",
          "studentbook": true,
          "studentbook_endDate": "2024/05/01",
          "workbook": false,
          "workbook_endDate": "2024/05/02",
          "type": "lesson"
        },
        { 
          "lesson": "Lesson C",
          "topic": "And why's that?",
          "studentbook": false,
          "studentbook_endDate": "2024/05/03",
          "workbook": false,
          "workbook_endDate": "-",
          "type": "lesson"
        },
        { 
          "lesson": "Lesson D",
          "topic": "Online footprints",
          "studentbook": false,
          "studentbook_endDate": "-",
          "workbook": false,
          "workbook_endDate": "-",
          "type": "lesson"
        },
        { 
          "lesson": "",
          "topic": "Quiz Unit 2",
          "studentbook": false,
          "studentbook_endDate": "-",
          "workbook": false,
          "workbook_endDate": "-",
          "type": "quiz"
        }
      ]
    }
  ]

  ngOnInit() {
    this.materials = [
      {name: "TouchStone 1", code: "1"},
      {name: "TouchStone 2", code: "2"},
      {name: "TouchStone 3", code: "3"},
      {name: "TouchStone 4", code: "4"},
      {name: "ViewPoint 1", code: "5"}
    ]
    this.units = this.data
  }

}

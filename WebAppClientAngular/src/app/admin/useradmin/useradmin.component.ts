import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PdropDownGrouped } from '../../core/models/pdropDownGrouped';
import { Table } from 'primeng/table';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-useradmin',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule, DialogModule],
  providers: [MessageService],
  templateUrl: './useradmin.component.html',
  styleUrl: './useradmin.component.css'
})
export class UseradminComponent implements OnInit {
  projectList : PdropDownGrouped[] = [];
  selectedProjects: number[] = []

  userList : any[] = [
    {
       "name":"Administrator",
       "role":"Administrator",
       "status": true,
       "userName":"admin",
       "userId":1,
       "visible":true
     },
     {
       "name":"Alejandro Espinoza",
       "role":"Teacher",
       "status": true,
       "userName":"alex",
       "userId":2,
       "visible":false
     },
     {
       "name":"Jimena Guzman",
       "role":"Student",
       "status": false,
       "userName":"jguzman",
       "userId":3,
       "visible":true
     }
  ];

  roleList : any[] = [
    {
      roleId: 1,
      roleName:"Administrador sistema"
    },
    {
      roleId: 2,
      roleName:"Administrador de proyectos"
    },
    {
      roleId: 3,
      roleName:"Usuario"
    }
  ];

  selectedSize = {name: 'large', class: 'p-datatable-sm'};
  isShowModal1 : boolean = false;
  isShowModal2 : boolean = false;
  dt1: any;

  constructor(
    private messageService: MessageService,
    @Inject(LOCALE_ID) public locale: string
    )
    {
    }


  ngOnInit(): void {}

  showDialogCreate() {
    this.isShowModal1 = true;
  }

  showDialogEdit() {
    this.isShowModal2 = true;
  }

  showToastMessage(messageType:string, message:string) {
    this.messageService.add({ severity: messageType.toLowerCase(), summary: messageType, detail: message, sticky: true });
  }

  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt1?.filterGlobal(input.value, 'contains');
  }
}


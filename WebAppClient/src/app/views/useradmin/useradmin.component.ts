import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PdropDownGrouped } from 'src/app/model/pdropDownGrouped';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.scss'],
  providers: [MessageService]
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

  constructor(
    private messageService: MessageService, 
    @Inject(LOCALE_ID) public locale: string
    ) 
    {
    }


  ngOnInit(): void {}

  private transformToDropDown(projectList : Project[]) {
    let dropDownProject : PdropDownGrouped[] = [];

    projectList.forEach(project => {
      var group = dropDownProject.find(d => d.value == project.groupProjectId);
      if (group == null) {
        let groupItem : PdropDownGrouped;
        groupItem = { 
          label: project.groupProjectName,
          value: project.groupProjectId, 
          items:  projectList.filter(item => item.groupProjectId == project.groupProjectId)
                             .map(item => 
            ({
              label: item.projectName,
              value: item.projectId,
              data: item
            })
          )
        }
        dropDownProject.push(groupItem);
      }
    });
    this.projectList = dropDownProject;
    //console.log(dropDownProject);
  }
  
  showDialogCreate() {
    this.isShowModal1 = true;
  }

  showDialogEdit() {
    this.isShowModal2 = true;
  }

  showToastMessage(messageType:string, message:string) {
    this.messageService.add({ severity: messageType.toLowerCase(), summary: messageType, detail: message, sticky: true });
  }
}

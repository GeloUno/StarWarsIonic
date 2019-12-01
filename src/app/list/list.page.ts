import { Component, OnInit } from '@angular/core';
import { PeopelsHttpsService } from '../services/peopels-https.service';
import { Peoples } from '../model/peoples';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  peoplesData: Peoples[];
  private selectedItem: any;

  constructor(
    private peoplesHttpsService: PeopelsHttpsService,
    private router: Router
  ) {
    this.peoplesHttpsService.getPostAll().subscribe(data => {
      console.log(data);
      console.log(data.length);
      this.peoplesData = data;
    });
  }

  ngOnInit() {}
  onClick(namePeople) {
    console.log(namePeople);
    //  this.router.navigate(['detail']);
  }
  setNext() {
    this.peoplesHttpsService.setNextUrl(this.peoplesData['next']);
    this.peoplesData = null;
    // setTimeout(a => {
    this.peoplesHttpsService.getPostAll().subscribe(data => {
      this.peoplesData = data;
    });
    // }, 100); // Time animation
  }

  setPrevious() {
    this.peoplesHttpsService.setPreviousUrl(this.peoplesData['previous']);
    this.peoplesData = null;
    // setTimeout(b => {
    this.peoplesHttpsService.getPostAll().subscribe(data => {
      this.peoplesData = data;
    });
    // }, 100); // Time animation
  }
}

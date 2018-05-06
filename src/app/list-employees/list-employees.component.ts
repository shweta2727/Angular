import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NapipPipe } from '../napip.pipe';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
emp:Employee[];
url="http://localhost:3000/data";

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.getEmp();
  }
getEmp(){
this._http.get(this.url).subscribe((data : Employee[])=>
{console.log(data);
this.emp = data;
console.log(this.emp);
});
}

}

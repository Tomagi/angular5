import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from './../../service/http.service';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss'],
  providers:[HttpService]
})
export class DynamicCompComponent implements OnInit {
  @Input() message : string = 'from url';
  data: any;

  constructor(private http: HttpService) { }

  ngOnInit() {

    //this.testCalls();

    //this.http.getData2();

    // this.http.getData().subscribe(results=>{
    //   console.log('http get results', results);
    // });

    // this.http.getData().toPromise().then(res=> {});

    this.http.sendData().subscribe(results=> {
      console.log('http post results', results);
    });
  } 

  // async testCalls(){
  //   let postResult = await this.http.sendData().toPromise();

  //   if (postResult){
  //     console.log('postResults', postResult);
  //     let getResults = await this.http.getData().toPromise();
  //     console.log('getResults', getResults);
  //   }
  // }
}

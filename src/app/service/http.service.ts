import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private client: HttpClient) {
  }

  getData() {
    return this.client.get('https://jsonplaceholder.typicode.com/posts');

    //const userId = 1;
    //return this.client.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getData2() {
    this.client.get<GetResponse[]>('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      console.log(res[0].body);
    });
  }

  sendData() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8','bbb':'aaa' });
    let options = { headers: headers };

    let body = {
      title: 'foo',
      body: 'bar',
      test: 'zdfcx'
    }

    return this.client.post('https://jsonplaceholder.typicode.com/posts',
      body, options);
  }
}

interface GetResponse {
  body: string,
  id: number,
  title: string
  userId: number
}

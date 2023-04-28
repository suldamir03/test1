import {Post} from "./post";

export class User {
  id: number;
  login: string;
  pass: string;
  first_name: string;
  last_name: string;
  status: string;


  constructor(id: number, login: string, pass: string, first_name: string, last_name: string, status: string) {
    this.id = id;
    this.login = login;
    this.pass = pass;
    this.first_name = first_name;
    this.last_name = last_name;
    this.status = status;
  }



}

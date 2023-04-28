import {User} from "./user";

export class Post {
  id: number;
  user: User;
  header: string;
  text: string;
  date: string;


  constructor(id: number, user: User, header: string, text: string, date: string) {
    this.id = id;
    this.user = user;
    this.header = header;
    this.text = text;
    this.date = date;
  }
}

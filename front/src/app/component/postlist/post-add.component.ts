import { Component } from '@angular/core';
import {Post} from "../../entity/post";
import {PostService} from "../../service/post.service";
import {UserService} from "../../service/user.service";
import {FormBuilder} from "@angular/forms";
import {User} from "../../entity/user";


@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
})
export class PostAddComponent {
  // @ts-ignore
  post:Post = {
    id: 1,
    user:{
      id:1,
      first_name: '',
      last_name: '',
      login: '',
      pass: '',
      status: ''
    },
    header: '',
    text: '',
    date: '2023-04-27',
  }


  constructor(private postService: PostService, private userService:UserService, private _formBuilder: FormBuilder) { }

  onSubmit() {

    this.userService.getUser(1).subscribe(
      data=>{
        this.post.user=data
      }
    )
    this.postService.createPost(this.post)
      .subscribe( data => {
        alert("Post created successfully." ) ;
      });
  }
}

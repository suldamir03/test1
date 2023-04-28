import {Component, OnInit} from "@angular/core";
import {Post} from "../../entity/post";
import {PostService} from "../../service/post.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entity/user";

@Component({
  selector: 'post-list',
  templateUrl: 'postlist.component.html'
})
export class PostListComponent implements OnInit{
  posts: Post[] =[]
  user!:User;

  constructor(private postService: PostService, private userService:UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe(
      data=>{
        this.user=data;
      }
    )
    this.postService.getPosts().subscribe(
      data=>{
        this.posts=data;
      }
    )
  }



}

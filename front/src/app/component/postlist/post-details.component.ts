import {Component, OnInit} from "@angular/core";
import {Post} from "../../entity/post";
import {PostService} from "../../service/post.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entity/user";

@Component({
  selector:'post-details',
  templateUrl:"./post-details.component.html"
})

export class PostDetailsComponent implements  OnInit {
  post!: Post;

  user!:User;



  constructor(private postService: PostService, private route: ActivatedRoute, private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe(
      data=>{
        this.user=data;
      }
    )
    const par = Number(this.route.snapshot.paramMap.get("id"));
    this.postService.getPost(par).subscribe(
      data => {
        this.post = data;
      }
    )
  }

}

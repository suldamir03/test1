import {User} from "../../entity/user";
import {UserService} from "../../service/user.service";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../entity/post";
import {PostService} from "../../service/post.service";
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  user!: User;
  posts: Post[] = [];
  constructor(private userService: UserService ,private otherroute:Router ,private route: ActivatedRoute, private _postService :PostService) {
  }

  ngOnInit(): void {
    const par = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUser(par).subscribe(
      data=> {
        this.user=data;
        this.user.first_name=data.first_name;
      }
    )

    this.userService.findByUserId(par).subscribe(
      data=> {
        this.posts=data;
      }
    )
  }


  get postService(): PostService {
    return this._postService;
  }

  deletePostByClick(id: number) {
    this.postService.deletePost(id)
      .subscribe( data => {
        alert("Post deleted successfully." ) ;
      });

  }

  editPost(id: number) {
    this.otherroute.navigate(['/posts/edit', id])
  }
}

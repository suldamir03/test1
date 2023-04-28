import {Component, OnInit} from "@angular/core";
import {Post} from "../../entity/post";
import {PostService} from "../../service/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'post-update', templateUrl: './post-update.component.html'
})
export class PostUpdateComponent implements OnInit{
  post!: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private route2: Router) {
  }

  ngOnInit(): void {
    const par = Number(this.route.snapshot.paramMap.get("id"));
    this.postService.getPost(par).subscribe(
      data => {
        this.post = data;
      }
    )
  }

  editPost() {
    this.postService.updatePost(this.post).subscribe(data => {
      alert("Post updated successfully.");
    });
    this.route2.navigate(['/users', this.post.user.id])
  }
}

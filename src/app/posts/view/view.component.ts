import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPost, IUser, PostsService } from '../posts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})



export class ViewComponent implements OnInit {

  ID: number = 0;

  post: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  comments: IComment[] = [];

  user: IUser = {
    id: 0,
    name: '',
    username: '',
    email: ''
  }

  constructor(private postsService: PostsService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.ID = this.route.snapshot.params['id'];

    await this.getPost();
    await this.getComments();
    await this.getUser();
  }

  async getPost() {
    this.postsService.getPost(this.ID).subscribe(
      data => this.post = data
    );
  }

  async getComments() {
    this.postsService.getPostComments(this.ID).subscribe(
      data => this.comments = data
    );
  }

  async getUser() {
    setTimeout(() => {
      this.postsService.getUser(this.post.userId).subscribe(
        data => this.user = data
      );
    }, 100);
  }
}

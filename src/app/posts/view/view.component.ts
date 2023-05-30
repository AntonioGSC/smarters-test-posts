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

  loading: boolean = false;
  show: boolean = false;

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

    this.getPost();
  }

  getPost() {
    this.postsService.getPost(this.ID).subscribe(
      async (data) => {
        this.loading = true;
        this.post = data;
        await this.getComments();
        await this.getUser();
        this.loading = false;
        this.show = true;
      }
    );
  }

  async getComments() {
    this.postsService.getPostComments(this.ID).subscribe(
      data => this.comments = data
    );
  }

  async getUser() {
    this.postsService.getUser(this.post.userId).subscribe(
      data => this.user = data
    );
  }

  goToLink(url: string) {
    console.log(url)
    window.open('https://' + url, "_blank");
  }
}

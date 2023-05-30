import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    posts = [];
    post = {}
    postComment = {}
    postUser = {}

    constructor(private postsService: PostsService) { }

    async ngOnInit() {
        this.posts = await this.postsService.getPosts();
    }
}

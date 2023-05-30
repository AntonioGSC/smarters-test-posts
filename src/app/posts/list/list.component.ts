import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    posts: Object = [];

    constructor(private postsService: PostsService) { }

    async ngOnInit() {
        this.posts = this.postsService.getPosts()

        console.log(this.posts);
    }
}

import { Component, OnInit } from '@angular/core';
import { IPost, PostsService } from '../posts.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    posts: IPost[] = [];

    constructor(private postsService: PostsService) { }

    async ngOnInit() {
        this.postsService.getPosts().subscribe(
            data => this.posts = data
        );
    }
}

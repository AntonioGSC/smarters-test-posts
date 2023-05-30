import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() { }

  async getPosts() {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => data);
  }

  async getPost(id: number) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => data);
  }

  async getPostComments(id: number) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => response.json())
      .then(data => data);
  }

  async getUser(id: number) {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => data);
  }
}

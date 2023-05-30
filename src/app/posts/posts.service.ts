import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  address?: Object;
  company?: Object;
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getPostComments(id: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

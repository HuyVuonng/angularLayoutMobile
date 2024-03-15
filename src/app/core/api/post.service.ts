import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { viewAllPost } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getListPost(body: viewAllPost): Observable<any> {
    return this.http.post(this.apiUrl + '/post/view-list-post', body);
  }
  deletePost(postID: any): Observable<any> {
    return this.http.post(this.apiUrl + '/post/move-to-recyclebin', {
      postId: postID,
    });
  }
  duplicatePost(postID: any): Observable<any> {
    return this.http.post(this.apiUrl + '/post/duplicate-post', {
      postId: postID,
    });
  }
}

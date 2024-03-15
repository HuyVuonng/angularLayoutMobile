import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { viewAllPost } from '../model/post.model';
import { Observable } from 'rxjs';
import { viewAllWareHouse } from '../model/dataWareHouse.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  public apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getListDataWareHouse(body: viewAllWareHouse): Observable<any> {
    return this.http.post(
      this.apiUrl + '/Warehouse/dataWarehouse/search-dataWarehouse',
      body,
    );
  }
  getListCategory(): Observable<any> {
    return this.http.get(this.apiUrl + '/Warehouse/category/get-all-category');
  }
  deleteDataWareHouse(ID: any): Observable<any> {
    return this.http.post(
      this.apiUrl + '/Warehouse/dataWarehouse/delete-dataWarehouse',
      {
        dataWarehouseId: ID,
      },
    );
  }
  duplicateDataWareHouse(ID: any): Observable<any> {
    return this.http.post(
      this.apiUrl + '/Warehouse/dataWarehouse/duplicate-dataWarehouse',
      {
        dataWarehouseId: ID,
      },
    );
  }

  getAllTemplates(body: any): Observable<any> {
    return this.http.get(
      this.apiUrl +
        '/Warehouse/template/get-all-template?' +
        `Page=${body.page}&PageSize=${body.pageSize}`,
    );
  }
  searchTemplates(body: any): Observable<any> {
    return this.http.get(
      this.apiUrl +
        '/Warehouse/template/search-template?' +
        `keyword=${body.keyWord}&Page=${body.page}&PageSize=${body.pageSize}`,
    );
  }
}

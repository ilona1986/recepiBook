import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cocktail} from "./cocktail-page.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailPageService {

  constructor(
    private http: HttpClient,
    ) { }

  // searchCocktailByName(params: GetRowsRequest<Cocktail>): Observable<GetRowsResponse<Cocktail>> {
  //   const newParams = buildGetRowsRequest<Cocktail>(params);
  //   return this.http.get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${margarita}`, newParams);
  // }
}

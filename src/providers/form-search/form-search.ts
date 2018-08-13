import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FormSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormSearchProvider {
  
  apiUrlMarcas = 'https://fipeapi.appspot.com/api/1/carros/marcas.json';
  apiUrlModelos = 'https://fipeapi.appspot.com/api/1/carros/veiculos';
  apiUrlVeiculos = 'https://fipeapi.appspot.com/api/1/carros/veiculo'
  apiUrlCarro = 'https://fipeapi.appspot.com/api/1/carros/veiculo';
  
  constructor(public http: HttpClient) { }
  
  getMarcas() {
      return this.http.get(`${ this.apiUrlMarcas }`);
  }
  
  getModelos(id: string) {
    return this.http.get(`${ this.apiUrlModelos  }/${ id }.json`);
  }
  
  getVeiculos(idMarca: string, idVeiculo: string) {
      return this.http.get(`${ this.apiUrlVeiculos  }/${ idMarca }/${ idVeiculo }.json`);
  }

  getCarro(idMarca: string, idVeiculo: string, idCarro: string) {
    return this.http.get(`${ this.apiUrlCarro  }/${ idMarca }/${ idVeiculo }/${ idCarro }.json`);
  }

}

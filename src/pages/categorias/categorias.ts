import { API_CONFIG } from './../../config/api.config';
import { CategoriaService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaDTO } from '../../models/categoria.dto';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public CategoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.CategoriaService.findAll()
      .subscribe(response => {
       this.items = response;
      },
      error => {});
  }

  showProdutos() {
    this.navCtrl.push('ProdutosPage');
  }

}

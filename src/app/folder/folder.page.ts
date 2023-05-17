import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.demo().then( (val) => {
      console.log('val --> ', val);
    }).catch( (err) => {
      console.log('err --> ', err);
    });

    await this.demo()
    .then( (value) => {
      console.log('second call --> ', value)
    }).catch( (error) => {
      console.log(error);
    });
  }

  demo(): Promise<boolean> {
    return new Promise ( (resolve, reject) => {
      if (false) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

}

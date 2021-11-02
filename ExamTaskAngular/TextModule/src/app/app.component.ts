import { Component, OnInit } from '@angular/core';

export interface AutoData {
  CarBrand: string
  CarModel: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
      this.GetCarBrand()
  }
  title = 'TextModule';
  CarModel: AutoData[] = [{CarBrand: "Subaru",CarModel:"Impreza,Forester,XV"},{CarBrand: "Nissan",CarModel:"GT-R(R32),Silvia,Fairlady Z"},{CarBrand: "Toyota",CarModel:"Supra,AE-86 Trueno,Celica"}]
  CarCar: string[] = []
  CarCarCar: string[] = []
  GetCarBrand() {
    for (let i = 0; i < this.CarModel.length; i++) {
      this.CarCar.push(this.CarModel[i].CarBrand)
    }
    console.log(this.CarModel)
  }


}

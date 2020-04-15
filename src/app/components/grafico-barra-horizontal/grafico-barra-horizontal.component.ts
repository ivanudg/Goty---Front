import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    // this.intervalo = setInterval( () => {
    //   console.log('Tick');
    //   const newResults = [...this.results];
    //   // tslint:disable-next-line: forin
    //   for ( let i in newResults ) {
    //     newResults[1].value = Math.round( Math.random() * 500 );
    //   }
    //   this.results = [...newResults];
    // }, 1500);

  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy() {
    // clearInterval( this.intervalo );
  }


}

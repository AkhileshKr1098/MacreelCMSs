import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  @ViewChild('visitorColumnChart', { static: true }) visitorColumnChart!: ElementRef;
  constructor() {
      
  }
  ngOnInit(): void {
    this.createColumnChart();
  }

  createColumnChart(): void {
    const ctxColumn = this.visitorColumnChart.nativeElement.getContext('2d');
    Chart.register(...registerables);
    new Chart(ctxColumn, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Visitors',
          data: [100, 200, 150, 300, 280, 600, 350, 200, 450, 600, 550, 700],
          backgroundColor: '#0163aa',
          borderColor: '#0163aa',
          borderWidth: 1
        }]
      },
    });
  }
}

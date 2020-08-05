import 'what-input';

//polyfill
import './utils/polyfill';

//modules
// import './modules/CustomScroll';

import 'chart.js';


// Start chart
var chart = document.getElementById('myChart');
Chart.defaults.global.animation.duration = 2000; // Animation duration
Chart.defaults.global.title.display = false; // Remove title
Chart.defaults.global.title.text = "Chart"; // Title
Chart.defaults.global.legend.labels.fontColor = "white" // Title
Chart.defaults.global.title.position = 'bottom'; // Title position
Chart.defaults.global.defaultFontColor = '#ffffff'; // Font color
Chart.defaults.global.defaultFontSize = 10; // Font size for every label

Chart.defaults.global.tooltips.backgroundColor = '#536c79'; // Tooltips background color
Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
Chart.defaults.global.tooltips.titleFontSize = 0;
Chart.defaults.global.tooltips.bodyFontSize = 20;
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.global.tooltips.titleMarginBottom = 0;
// Chart.defaults.global.tooltips.bodySpacing = 20;
// Chart.defaults.global.tooltips.yPadding = 35;

Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.global.legend.labels.color = 'white';
Chart.defaults.scale.ticks.beginAtZero = true;
// Chart.defaults.scales.yAxes.ticks.display = 'none';
Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 1)';
Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0)';
Chart.defaults.global.legend.display = false;

var myChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ["Аренда", "Жилая", "178-Ф", "169-Ф3", "Доля города"],
    datasets: [{
      // label: "Lost",
      fill: false,
      lineTension: 0,
      data: [35, 46, 32, 14, 4],
      pointBorderColor: "#ffffff",
      borderColor: '#ffffff',
      bgColor: '#ffffff',
      borderWidth: 2,
      // showLine: true,
    }]
  },
  options: {
    scales: {
      xAxes: [{

        // display: false,
        ticks: {
          // display: false
        },
        gridLines: {
          zeroLineColor: '#63c2de'
        }
      }],
      yAxes: [{
        // display: false,
        ticks: {
          display: false
        },
        gridLines: {
          // zeroLineColor: '#ffcc33'
        }
      }]
    }
  }
});


// Start chart
var chart1 = document.getElementById('myChart1');
// Chart.defaults.global.animation.duration = 2000; // Animation duration
// Chart.defaults.global.title.display = false; // Remove title
// Chart.defaults.global.title.text = "Chart"; // Title
// Chart.defaults.global.title.position = 'bottom'; // Title position
// Chart.defaults.global.defaultFontColor = '#999'; // Font color
// Chart.defaults.global.defaultFontSize = 10; // Font size for every label
//
// // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
// Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
// Chart.defaults.global.legend.labels.padding = 0;
// Chart.defaults.scale.ticks.beginAtZero = true;
// Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
// Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
// Chart.defaults.global.legend.display = false;

var myChart1 = new Chart(chart1, {
  type: 'bar',
  data: {
    labels: ["Аренда", "Жилая", "178-Ф", "169-Ф3", "Доля города"],
    datasets: [{
      // label: "Lost",
      fill: false,
      lineTension: 0,
      data: [35, 46, 32, 14, 4],
      pointBorderColor: "#ffffff",
      borderColor: '#ffffff',
      bgColor: '#ffffff',
      borderWidth: 2,
      // showLine: true,
    }]
  },
  options: {
    scales: {
      xAxes: [{

        // display: false,
        ticks: {
          // display: false
        },
        gridLines: {
          zeroLineColor: '#63c2de'
        }
      }],
      yAxes: [{
        // display: false,
        ticks: {
          display: false
        },
        gridLines: {
          // zeroLineColor: '#ffcc33'
        }
      }]
    }
  }
});

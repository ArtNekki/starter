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
Chart.defaults.global.title.position = 'bottom'; // Title position
Chart.defaults.global.defaultFontColor = '#999'; // Font color
Chart.defaults.global.defaultFontSize = 10; // Font size for every label

// Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
Chart.defaults.global.legend.display = false;

var myChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", 'Jul'],
    datasets: [{
      label: "Lost",
      fill: false,
      lineTension: 0,
      data: [45, 25, 40, 20, 45, 20],
      pointBorderColor: "#536c79",
      borderColor: '#536c79',
      borderWidth: 2,
      showLine: true,
    }, {
      label: "Succes",
      fill: false,
      lineTension: 0,
      startAngle: 2,
      data: [20, 40, 20, 45, 25, 60],
      // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
      backgroundColor: "transparent",
      pointBorderColor: "#63c2de",
      borderColor: '#63c2de',
      borderWidth: 2,
      showLine: true,
    }]
  },
});


// Start chart
var chart1 = document.getElementById('myChart-1');
Chart.defaults.global.animation.duration = 2000; // Animation duration
Chart.defaults.global.title.display = false; // Remove title
Chart.defaults.global.title.text = "Chart"; // Title
Chart.defaults.global.title.position = 'bottom'; // Title position
Chart.defaults.global.defaultFontColor = '#999'; // Font color
Chart.defaults.global.defaultFontSize = 10; // Font size for every label

// Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
Chart.defaults.global.legend.display = false;

var myChart1 = new Chart(chart1, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", 'Jul'],
    datasets: [{
      label: "Lost",
      fill: false,
      lineTension: 0,
      data: [45, 25, 40, 20, 45, 20],
      pointBorderColor: "#536c79",
      borderColor: '#536c79',
      borderWidth: 2,
      showLine: true,
    }, {
      label: "Succes",
      fill: false,
      lineTension: 0,
      startAngle: 2,
      data: [20, 40, 20, 45, 25, 60],
      // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
      backgroundColor: "transparent",
      pointBorderColor: "#63c2de",
      borderColor: '#63c2de',
      borderWidth: 2,
      showLine: true,
    }]
  },
});

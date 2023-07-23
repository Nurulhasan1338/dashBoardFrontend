// const Value1 = 65; // Change this value to your desired percentage
// const Value2 = 70; // Change this value to your desired percentage
// const Value3 = 20; // Change this value to your desired percentage
// const canvas1 = document.getElementById('customDonutChart1');
// const canvas2 = document.getElementById('customDonutChart2');
// const canvas3 = document.getElementById('customDonutChart3');
// const ctx = canvas.getContext('2d');

// const chartRadius = Math.min(canvas.width, canvas.height) / 2;
// const donutWidth = chartRadius * 0.8; // Set the donut width to 1 rem (around 16 pixels)
// const chartCenterX = canvas.width / 2;
// const chartCenterY = canvas.height / 2;


// // Function to draw a customized donut chart
// function drawCustomDonutChart(canvas,percentageValue) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw the green strip (percentage value)
//     const greenEndAngle = (percentageValue / 100) * 2 * Math.PI - Math.PI / 2;
//     ctx.fillStyle = '#22d6aa';
//     ctx.beginPath();
//     ctx.moveTo(chartCenterX, chartCenterY);
//     ctx.arc(chartCenterX, chartCenterY, chartRadius, -Math.PI / 2, greenEndAngle);
//     ctx.lineTo(chartCenterX, chartCenterY);
//     ctx.fill();

//     // Draw the faded green strip (remaining portion)
//     ctx.fillStyle = '#d3f7ee';
//     ctx.beginPath();
//     ctx.moveTo(chartCenterX, chartCenterY);
//     ctx.arc(chartCenterX, chartCenterY, chartRadius-2, greenEndAngle, -Math.PI / 2);
//     ctx.lineTo(chartCenterX, chartCenterY);
//     ctx.fill();

//     // Draw the hole (white circle) in the center of the donut chart
//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.moveTo(chartCenterX + donutWidth, chartCenterY);
//     ctx.arc(chartCenterX, chartCenterY, donutWidth, 0, 2 * Math.PI);
//     ctx.lineTo(chartCenterX + donutWidth, chartCenterY);
//     ctx.fill();

//     // Add percentage text in the center of the donut chart
//     ctx.fillStyle = 'black';
//     ctx.font = '25px bold';
//     ctx.textAlign = 'center';
//     ctx.fillText(percentageValue + '%', chartCenterX, chartCenterY + 8);
// }

// drawCustomDonutChart(canvas1,Value1);
// drawCustomDonutChart(canvas,Value2);
// drawCustomDonutChart(canvas1,Value3);

const canvas1 = document.getElementById('customDonutChart1');
const canvas2 = document.getElementById('customDonutChart2');
const canvas3 = document.getElementById('customDonutChart3');

// Define percentage values for each chart
const percentageValue1 = 40;
const percentageValue2 = 75;
const percentageValue3 = 20;

// Function to draw a customized donut chart
function drawCustomDonutChart(canvas, percentageValue) {
    const ctx = canvas.getContext('2d');

    const chartRadius = Math.min(canvas.width, canvas.height) / 2;
    const donutWidth = chartRadius * 0.8;
    const chartCenterX = canvas.width / 2;
    const chartCenterY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the green strip (percentage value)
    const greenEndAngle = (percentageValue / 100) * 2 * Math.PI - Math.PI / 2;
    ctx.fillStyle = '#22d6aa';
    ctx.beginPath();
    ctx.moveTo(chartCenterX, chartCenterY);
    ctx.arc(chartCenterX, chartCenterY, chartRadius, -Math.PI / 2, greenEndAngle);
    ctx.lineTo(chartCenterX, chartCenterY);
    ctx.fill();

    // Draw the faded green strip (remaining portion)
    ctx.fillStyle = '#d3f7ee';
    ctx.beginPath();
    ctx.moveTo(chartCenterX, chartCenterY);
    ctx.arc(chartCenterX, chartCenterY, chartRadius-2, greenEndAngle, -Math.PI / 2);
    ctx.lineTo(chartCenterX, chartCenterY);
    ctx.fill();

    // Draw the hole (white circle) in the center of the donut chart
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(chartCenterX + donutWidth, chartCenterY);
    ctx.arc(chartCenterX, chartCenterY, donutWidth, 0, 2 * Math.PI);
    ctx.lineTo(chartCenterX + donutWidth, chartCenterY);
    ctx.fill();

    // Add percentage text in the center of the donut chart
    ctx.fillStyle = 'black';
    ctx.font = '27px Roman';
    ctx.textAlign = 'center';
    ctx.fillText(percentageValue + '%', chartCenterX, chartCenterY + 8);
}

drawCustomDonutChart(canvas1, percentageValue1);
drawCustomDonutChart(canvas2, percentageValue2);
drawCustomDonutChart(canvas3, percentageValue3);

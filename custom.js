const data = [
    { label: '1', value1: 40, value2: 30, value3: 20 },
    { label: '2', value1: 60, value2: 10, value3: 50 },
    { label: '3', value1: 25, value2: 45, value3: 30 },
    { label: '4', value1: 25, value2: 45, value3: 30 },
    { label: '5', value1: 25, value2: 45, value3: 30 },
    { label: '6', value1: 25, value2: 45, value3: 30 }
    // Add more data here...
];


const slider1 = document.getElementById('rangeSlider1');
const sliderValue1 = document.getElementById('sliderValue1');
const slider2 = document.getElementById('rangeSlider2');
const sliderValue2 = document.getElementById('sliderValue2');

function updateSliderValue1() {
    sliderValue1.textContent = slider1.value;
}

function updateSliderValue2() {
    sliderValue2.textContent = slider2.value;
}

// Update the value label when the range input value changes
slider1.addEventListener('input', updateSliderValue1);
slider2.addEventListener('input', updateSliderValue2);

// Initial update to show the default values
updateSliderValue1();
updateSliderValue2();


const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

const margin = 50;
const barWidth = 20;
const spaceBetweenBars = 20;
const chartHeight = canvas.height - 2 * margin;
const chartWidth = canvas.width - 2 * margin;

// Find the maximum value for scaling the chart
const allValues = data.reduce((acc, item) => {
    return acc.concat(item.value1, item.value2, item.value3);
}, []);
const maxValue = chartHeight;

// Function to draw a single bar with three sections
function drawBar(x, y, height1, height2, height3) {
    ctx.fillStyle = 'rgb(133 175 255)';
    ctx.fillRect(x, y, barWidth, height1);

    ctx.fillStyle = 'rgb(73 53 255)';
    ctx.fillRect(x, y + height1, barWidth, height2);

    ctx.fillStyle = '#0800a3';
    ctx.fillRect(x, y + height1 + height2, barWidth, height3);
}

// Function to draw the entire bar chart
function drawBarChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText('Y-Axis Label', margin, margin - 20);
    ctx.fillText('X-Axis Label', canvas.width - margin - 80, canvas.height - margin + 40);

    // Draw Y-axis values
    for (let i = 0; i <= 10; i++) {
        const value = maxValue * (i / 10);
        const yCoord = canvas.height - margin - (i / 10) * chartHeight;
        ctx.fillText(value.toFixed(0), margin - 30, yCoord + 5);
    }

    // Draw X-axis labels
    let x = margin;
    data.forEach((item) => {
        ctx.fillText(item.label, x, canvas.height - margin + 20);
        x += spaceBetweenBars + barWidth;
    });

    // Draw bars
    x = margin;
    data.forEach((item) => {
        const height1 = (item.value1 / maxValue) * chartHeight;
        const height2 = (item.value2 / maxValue) * chartHeight;
        const height3 = (item.value3 / maxValue) * chartHeight;

        drawBar(x, canvas.height - margin - height1 - height2 - height3, height1, height2, height3);

        x += spaceBetweenBars + barWidth;
    });
}

drawBarChart();

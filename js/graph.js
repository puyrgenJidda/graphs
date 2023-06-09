apexes = document.getElementsByClassName('circle');
lines = document.getElementsByClassName('line');
button = document.getElementsByTagName('input')[0];
counter_apex = 0;
color_lines = [[0], [0, 1], [0, 2, 3, 6], [0, 0, 0, 4, 5, 10], [0, 0, 7, 8, 9, 10]];
color_apexes = [0, 1, 4, 2, 3, 7, 5, 6, 9, 8];
counter_lines = 0;
drawLine(apexes[0], apexes[1], lines[0])
drawLine(apexes[0], apexes[4], lines[1])
drawLine(apexes[1], apexes[2], lines[2])
drawLine(apexes[1], apexes[3], lines[3])
drawLine(apexes[2], apexes[5], lines[4])
drawLine(apexes[3], apexes[6], lines[5])
drawLine(apexes[4], apexes[7], lines[6])
drawLine(apexes[5], apexes[9], lines[7])
drawLine(apexes[5], apexes[4], lines[8])
drawLine(apexes[6], apexes[8], lines[9])
drawLine(apexes[7], apexes[9], lines[10])


function drawLine(apex1, apex2, line) {
    const x1 = parseInt(apex1.style.left) + 5;
    const y1 = parseInt(apex1.style.top) + 5;
    const x2 = parseInt(apex2.style.left) + 5;
    const y2 = parseInt(apex2.style.top) + 5;

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    line.style.width = distance + "px";
    line.style.transformOrigin = "left";
    line.style.transform = "rotate(" + getAngle(x1, y1, x2, y2) + "deg)";
}

function getAngle(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.atan2(dy, dx) * (180 / Math.PI);
}

function nextStep() {
    if (counter_apex == counter_lines) {
        for (var i = 0; i < color_lines[counter_apex].length; i++) {
            apexes[color_apexes[counter_apex + i]].style.backgroundColor = '#0006fa';
        }
        counter_apex++;
        if(counter_lines == 4){button.style.display='none';}

    } else{
        for (var i = 0; i < color_lines[counter_lines + 1].length; i++) {
            lines[color_lines[counter_lines + 1][i]].src = 'img/arrow_blue.png';
        }
        counter_lines++;
        
    }

}

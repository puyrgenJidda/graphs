counter_apex = 0;
color_lines = [[0], [0, 1], [0, 2, 3, 6, 8], [0, 0, 7, 4, 5, 10], [0, 0, 0, 8, 9, 10]];
color_apexes = [0, 1, 4, 5, 2, 3, 7, 6, 9, 8];
counter_lines = 0;
function nextStep() {
    if (counter_apex == counter_lines) {
        for (var i = 0; i < color_lines[counter_apex].length; i++) {
            apexes[color_apexes[counter_apex + i]].style.backgroundColor = '#696dff';
        }
        counter_apex++;

    } else {
        for (var i = 0; i < color_lines[counter_lines + 1].length; i++) {
            lines[color_lines[counter_lines + 1][i]].style.backgroundColor = '#696dff';
        }
        counter_lines++;
    }
    if(counter_apex==5 && counter_lines==4){
        counter_apex = 0;
        counter_lines = 0;
        for (var i = 0; i < 11; i++) {
            lines[i].style.backgroundColor = '#808080';
        }
        for (var i = 0; i < 10; i++) {
            apexes[i].style.backgroundColor = '#808080';
        }
    }
}
setInterval(nextStep, 1000); 

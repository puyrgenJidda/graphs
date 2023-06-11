apexes = document.getElementsByClassName('circle');
lines = document.getElementsByClassName('line');
button = document.getElementsByTagName('input')[0];
counter_apex = 0;
color_lines = [[0], [0, 1], [0, 2, 3, 6], [0, 0, 0, 4, 5, 10], [0, 0, 7, 8, 9, 10]];
color_apexes = [0, 1, 4, 2, 3, 7, 5, 6, 9, 8];
counter_lines = 0;
function nextStep() {
    if (counter_apex == counter_lines) {
        for (var i = 0; i < color_lines[counter_apex].length; i++) {
            apexes[color_apexes[counter_apex + i]].style.backgroundColor = '#696dff';
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
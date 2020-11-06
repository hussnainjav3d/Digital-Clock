function digitalClock() {
    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let second = document.getElementById('seconds')
    let ampm = document.getElementById('amPm')
    let salutations = document.getElementById('salutations')
    var amPm = 'AM'
    var salutation = 'Good Night'

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()


    if (h < 19 && h > 6) {
        salutation = 'Good Morning'
    }


    // convert 24hours format to 12 hours

    if (h > 12) {
        h -= 12;
        amPm = 'PM'
    }



    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
        //  salutations


    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
    ampm.innerHTML = amPm
    salutations.innerHTML = salutation

}


var intervalID = window.setInterval(digitalClock, 1000)
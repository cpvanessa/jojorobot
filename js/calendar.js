const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
       

    }
    

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();



function toolTip1() {

    let toolTip = document.querySelector(".today")
    toolTip.addEventListener('mouseover', () => {
        toolTip.title = "complet";
    })
   
    
    };


toolTip1();

function toolTip2() {

    let toolTip2 = document.querySelector(".next-date")
    console.log(toolTip2);
    toolTip2.addEventListener('mouseover', () => {
        toolTip2.title = "ferm??";
    })
   
    
    };
    toolTip2();


    function toolTip3(){
        let prev_days = document.getElementsByClassName("prev-date");
    
    console.log(prev_days);

    for (let j = 0; j <= prev_days; j++) {
      prev_days[j].addEventListener('mouseover', () => {
        prev_days[j].innerHTML = "ferm??";
        })
        
    }

    }
    toolTip3();
  



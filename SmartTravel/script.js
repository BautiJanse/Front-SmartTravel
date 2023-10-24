const daysTag = document.querySelector(".dias"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// agarramos la fecha actual
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // primer dia del mes
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // ultima FECHA del mes
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // ultimo dia del mes
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // ultimo dia del anterior mes
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { //lista de ultimos dias de meses anteriores NO ENTENDI BIEN
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // pasamos la mes y anio actual como texto
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        // diferenciamos cual de las flechas se clickeo y se restan o suman meses
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // si el mes actual es menos de 0 o mas de 11 
            // creamos nuevas fechass
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // actualizamos anio actual
            currMonth = date.getMonth(); // actualizamos mes actual
        } else {
            date = new Date(); 
        }
        renderCalendar(); 
    });
});
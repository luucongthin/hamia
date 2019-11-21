$(document).ready(function () {
    var pathname = window.location.pathname;
    var teacher = document.getElementById("teacher");
    var student = document.getElementById("student");
    if (pathname == '/Home/Teacher') {
        teacher.classList.add('active');
        student.classList.remove('active');
    }
    else if (pathname == "/") {
        student.classList.add('active');
        teacher.classList.remove('active');
    }

    
    if (window.localStorage.typeReport == null) {
        window.localStorage.typeReport = 2
    }

    document.getElementById("type-report").value = window.localStorage.typeReport;
    
});

function addDropdown() {
    $('.dropdown.dropdown-user.nav-item').addClass('show');
}

function removeDropdown() {
    $('.dropdown.dropdown-user.nav-item').removeClass('show');
}

function changeTypeReport() {
    var typeReport = document.getElementById("type-report").value
    window.localStorage.typeReport = typeReport;
    window.location.href = "/"
}
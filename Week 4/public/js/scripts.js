const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const getProjects = () => {
$.get('/api/projects',(response) => {
if(response.statusCode==200){
addCards(response.data);
}
});
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    $('#readMore').click(() => {
        alert("The read more was clicked!");
    });
    getProjects();
    $('#authorLink').click(() => {
        alert("Author is Aswin Soman");
    });
});

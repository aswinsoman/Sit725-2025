const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    $('#readMore').click(() => {
        alert("The read more was clicked!");
    });
    $('#authorLink').click(() => {
        alert("Author is Aswin Soman");
    });
});

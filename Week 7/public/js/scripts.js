var socket = io();

socket.on('number', (num) => {
    console.log('Received number:', num);
    document.getElementById('number').innerText = num;
});

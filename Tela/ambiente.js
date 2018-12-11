const player1 = "Agua";
const player2 = "Shuriken";
var playTime = player1;
var gameOver = false;
var Controle = true;


AMostrador();


function AMostrador() {
    if (gameOver) { return; }

    if (playTime == player1) {

        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "images/Agua.jpg");

    } else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "images/Fogo.jpg");
    }
}


// Make connection

var socket = io.connection('http//localhost:4000');

// Query Dom
a1 = document.getElementByld('a1');
a2 = document.getElementByld('a2');
a3 = document.getElementByld('a3');
b1 = document.getElementByld('b1');
b2 = document.getElementByld('b2');
b3 = document.getElementByld('b3');
c1 = document.getElementByld('c1');
c2 = document.getElementByld('c2');
c3 = document.getElementByld('c3');


//Emit events

a1.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "a1",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "a1",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});


a2.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "a2",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "a2",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

a3.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "a3",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "a3",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

b1.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "b1",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "b1",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

b2.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "b2",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "b2",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

b3.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "b3",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "b3",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

c1.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "c1",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "c1",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

c2.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "c2",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "c2",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});

c3.addEventListener('click', function () {
    if (controle = true) {

        if (this.getElementsByClassName("img").length == 0) {

            if (playTime == player1) {
                socket.emit('jogada', {
                    Jid: "c3",
                    Jimage: "<img src='images/Agua.jpg' border='0' height='60'>",
                    Jplay: player1,
                    Jcontrole: controle
                });
                //	controle = false;

            } else {

                socket.emit('jogada', {
                    Jid: "c3",
                    Jimage: "<img src='images/Fogo.jpg' border='0' height='60'>",
                    Jplay: player2,
                    Jcontrole: controle
                });
                //   controle = false;
            }
        }

    }

});



//Listen for events

socket.on('jogada', function (data) {
    if (data.Jid == "a1") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "a2") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "a3") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "b1") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "b2") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "b3") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "c1") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "c2") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    if (data.Jid == "c3") {
        a1.innerHTML = data.Jimage;
        a1.setAttribute("jogada", data.Jplay);
        playTime = data.Jplay;

    }
    AMostrador();
    verificarVencedor();
});



//VERIFICATION

async function verificarVencedor() {

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";
    var empate = false;

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {
        vencedor = a1;
    }
    else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {
        vencedor = b2;
    }
    else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) {
        venceder = c3;
    }

    if (vencedor != "") {
        gameOver = true;

        await sleep(50);
        alert("O vencedor foi :'" + vencedor + "'");
    }
    if (vencedor == "" && a1!="" && a2!="" && a3!="" && b1!="" && b2!="" && b3!="" && c1!="" && c2!="" && c3!=""){
        empate = true;
        await sleep(50);
        alert("EMPATE");
    }

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

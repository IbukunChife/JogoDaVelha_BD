<?php
include_once("conex.php");
echo "<meta HTTP-EQUIV='refresh' CONTENT='30;URL=jdv.php'>";
$Qtabuleiro= "SELECT * FROM tabuleiro;";
$Qjogd1= "SELECT JOGD_NOME FROM jogadore WHERE JOGD_ID = 1; ";
$Qjogd2= "SELECT JOGD_NOME FROM jogadore WHERE JOGD_ID = 2; ";
$Qjogo= "SELECT * FROM jogos;";

$jogador1= mysqli_query($DB,$Qjogd1);
$jogador2= mysqli_query($DB,$Qjogd2);
$Qtab=mysqli_fetch_array($Qtabuleiro);
$Qjogo=mysqli_fetch_row($Qjogo);

if((isset($_POST['revanche']))){
    foreach($Qtab as $row){
        $id = $row[0];
        $string = "UPDATE tabuleiro SET TAB_JOGADA = null WHERE TAB_ID = $id;";
        $up = mysqli_query($DB,$string);
    }
	//header('location: jdv.php);
}

if((isset($_POST['sair']))){
    $vazio = "";
    $string1 = "UPDATE jogadore SET JOGD_NOME = '".$vazio."'  WHERE JOGD_ID = 1;";
	$string2 = "UPDATE jogadore SET JOGD_NOME = '".$vazio."' WHERE JOGD_ID = 2;";
    $string3 = "UPDATE jogos SET JOG_PLAYTIME = 0 , JOG_VENCEDOR = 0 WHERE JOG_ID = 1;";
    $up_jogador1 = mysqli_query($DB, $string1);
    $up_jogador2 = mysqli_query($DB, $string2);
    $up_jogos = mysqli_query($DB, $string3);
    foreach($Qtab as $row){
        $id = $row[0];
        $string = "UPDATE tabuleiro SET TAB_JOGADA = null  WHERE TAB_ID = $id;";
        $up = mysqli_query($DB,$string);
    }
    header('Location: index.php');	
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Jogo da Velha</title>
    <link rel="stylesheet" type="text/css" href="jdv.css">

</head>
<body>

    <div id="mostrador" >
        <p style= "float : left; margin-right: 10px;"> Vez do Jogador: </p>
        <img src="" border="0" height="50">
    </div>

    <div class="tabuleiro">

        <div id="a1" class="espaco" jogada=""></div>
        <div id="a2" class="espaco" jogada=""></div>
        <div id="a3" class="espaco" jogada=""></div>

        <div id="b1" class="espaco" jogada=""></div>
        <div id="b2" class="espaco" jogada=""></div>
        <div id="b3" class="espaco" jogada=""></div>

        <div id="c1" class="espaco" jogada=""></div>
        <div id="c2" class="espaco" jogada=""></div>
        <div id="c3" class="espaco" jogada=""></div>
    </div>
    <div class="menu">
        <form method="POST" action="jdv.php" >
            <div>
                <button type="submit"  class="btn btn-success" name="revanche">Revanche</button>
            </div>
        </form>
        <form method="POST" action="jdv.php" >
            <div>
                <button type="submit" class="btn btn-danger" name="sair">Sair</button>
            </div>
        </form>
    </div>
    <script type="text/javascript" src="game.js"></script>
</body>
</html>


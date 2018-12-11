<?php
include_once("conex.php");
echo "<meta HTTP-EQUIV='refresh' CONTENT='60;URL=login.php'>";
$Qjogd1 = "SELECT JOGD_NOME FROM jogadore WHERE JOGD_ID = 1";
$Qjogd2 = "SELECT JOGD_NOME FROM jogadore WHERE JOGD_ID = 2";

$jogador1= mysqli_query($DB,$Qjogd1);
$jogador2= mysqli_query($DB,$Qjogd2);

$jogador1= mysqli_fetch_row($jogador1);
$jogador2= mysqli_fetch_row($jogador2);


if((isset($_POST['validar']))){
    if($_POST['Jog'] == $jogador1[0] || $_POST['Jog'] == $jogador2[0]){
        header('Location: jdv.php');
    }else{
        echo 'Você não tem como Jogar';
        header('Location: login.php');
    }
}


?>

<!DOCTYPE html>
<html>
<head>
	<title>Jogo da Velha</title>
	<link href="bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container">
		<div class="jumbotron">
		<h1 class="titulo">JOGO DA VELHA</h1>

		<h3>Jogadores Cadastrados</h3>

		<div class="inputs">
			<form method="POST" action="login.php" >
				<div class="form-group">
					<label for="inputName">Insira seu nome de login</label>
      				<input type="text" name="Jog" id="inputName1" class="form-control" placeholder="Nome" required autofocus >
      				<br>
					<button type="submit" class="btn btn-primary " name="validar"> Entrar</button>
				</div>
			</form>
		</div>
		
	</div>
	</div>
	
	
</body>
</html>

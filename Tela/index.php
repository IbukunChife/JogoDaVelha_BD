<<<<<<< Updated upstream:Tela/index.html
<?php
session_start();
if(isset($_SESSION['UsuarioLog'])){
    header("Location: movies.php");
    die;
  }
include_once ("config.php");
include_once ("connection.php");
include_once("functions.php");
if(isset($_POST['login'])){
	$conn = DBConnect();
	$user_email = mysqli_escape_string($conn, $_POST['email']);
	$password = mysqli_escape_string($conn, $_POST['password']);
	$teste = DBQuery('cliente', "WHERE cli_email = '$user_email' AND cli_senha = '$password'");
	if($teste){
		$_SESSION['UsuarioLog'] = true;
		header("Location: movies.php");
		// echo "<script>alert('Bem-vindo ')". $nome = $teste['cli_nome'] ."</script>";
	} else{
		echo "<script>alert('Não encontrado')</script>";
	}
}
?>

=======
<?php 
include_once("conex.php");
echo "<meta HTTP-EQUIV='refresh' CONTENT='30;URL=index.php'>";

$status1 = "";
$status2 = "";

$Qjogd1= "SELECT JOGD_NOME FROM jogadore WHERE JOGD_ID = 1 ";
$Qjogd2= "SELECT JOGD_NOME FROM jogadore WHERE JOGD_ID = 2 ";

$jogador1= mysqli_query($DB,$Qjogd1);
$jogador2= mysqli_query($DB,$Qjogd2);


$jogador1 = mysqli_fetch_row($jogador1);
if ($jogador1[0] != ""){
	$status1 = 'disabled';
}


$jogador2 = mysqli_fetch_row($jogador2);
if ($jogador2[0] != ""){
	$status2 = 'disabled';
}

if ($status1 == 'disabled' && $status2 == 'disabled'){
	header('Location: login.php');	
}

if ((isset($_POST['login2']))){


	$nome1 = $_POST['jog1'];
	$nome2 = $_POST['jog2'];
	$string1 = "UPDATE jogadore SET JOGD_NOME =  '".$nome1."' WHERE JOGD_ID = 1";
	$string2 = "UPDATE jogadore SET JOGD_NOME = '".$nome2."' WHERE JOGD_ID = 2";
    $insert_member_res1 = mysqli_query($DB, $string1);
	$insert_member_res2 = mysqli_query($DB, $string2);
	header('Location: index.php');	
}

?>
>>>>>>> Stashed changes:Tela/index.php
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

		<h3>Jogadores</h3>

		<div class="inputs">
			<form method="POST" action="index.php" >
				<div class="form-group">
					<label for="inputName">Jogador 1</label>
      				<input type="text" name="jog1" id="inputName1" class="form-control" placeholder="Nome" required autofocus <?php echo $status1; ?> >
      				<br>
				</div>
				
				<div class="form-group">
					<label for="inputName">Jogador 2</label>
      				<input type="text" name="jog2" id="inputName2" class="form-control" placeholder="Nome" required autofocus <?php echo $status2; ?> >
      				<br>
					<button type="submit" class="btn btn-danger" name="login2">Cadastrar</button>
				</div>
				
			</form>
		</div>
		
	</div>
	</div>
	
	
</body>
</html>
<<<<<<< Updated upstream:Tela/index.html
=======


>>>>>>> Stashed changes:Tela/index.php

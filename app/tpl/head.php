<!DOCTYPE html>
<html>
<head>
<!--<meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8">-->
<meta http-equiv="Content-type" content="text/html; charset=utf-8" /> 
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />

	<title><?= $title; ?></title>
	
    <link rel="stylesheet"  type="text/css" href="<?= APP_W.'pub/css/m.css'; ?>">
    <link rel="stylesheet"  type="text/css" href="<?= APP_W.'pub/css/responsive.css'; ?>">
    <script src="<?= APP_W.'pub/js/jquery.min.js'; ?>"></script>
    <script src="<?= APP_W.'pub/js/app.js'; ?>"></script>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

</head>
	
<div id="cabecera">

	<!--Aqui va el menu responsive-->
	<div id="barritas">
		<div id="a" class="menu-respon"></div>
		<div id="b" class="menu-respon"></div>
		<div id="c" class="menu-respon"></div>
	</div>

	<div id="barritas2">
		<div id="d" class="menu-respon"></div>
		<div id="e" class="menu-respon"></div>
		<div id="f" class="menu-respon"></div>
	</div>

	<div id="barritas3">
		<div id="g" class="menu-respon"></div>
		<div id="h" class="menu-respon"></div>
		<div id="i" class="menu-respon"></div>
	</div>

	<ul id="lista-papas">
		<li>
		<p id="in"><b><a href="<?= APP_W.'padre'; ?>">Información</a></b></p>
		</li>
		<li>
			<p id="ns"><b><a href="https://mega.nz/#F!pMJyxDzB!ax2QXJ9ozHC9NXwjPCt4kg">Nuestros servicios</a></b></p>
		</li>
		<li>
			<p id="co"><b><a href="<?= APP_W.'comment'; ?>">Comparte tu opinión</a></b></p>
		</li>
	</ul>

	<ul id="lista-nenes">
		<li>
			<p class="n_all">
				<img src="pub/img/all.png" class="vertical-middle"><span class="marginado">Todos los niveles</span>
			</p>
		</li>
		<li>
			<p class="n_inicial">
				<img src="pub/img/easy.png" class="vertical-middle"><span class="marginado">Nivel Inicial</span>
			</p>
		</li>
		<li>
				<p class="n_intermedio">
					<img src="pub/img/medium.png" class="vertical-middle"><span class="marginado">Nivel Intermedio</span>
				</p>
		</li>
		<li>
				<p class="n_avanzado">
					<img src="pub/img/hard.png" class="vertical-middle"><span class="marginado">Nivel Avanzado</span>
				</p>
		</li>
	</ul>



	
	<!--Fin del menu responsive-->

	<div id="logo"><a href="<?= APP_W; ?>">
		<img src="<?= APP_W.'pub/img/logo_1.png'; ?>">
	</a></div>

	
	<div class="container2">
		<?php
		if (isset($_SESSION['user'])) {
			echo "<p id='user'>".$_SESSION['user']."</p>
				<form id='form_cerrar_sesion' name='cerrar_sesion' method='post' action='".APP_W."home/cerrar_sesion'>
				<button type='button' id='boton_cerrar_sesion'>Cerrar sesión</button></form>";
		}else{
			
			echo "<div id='form'>
				<h4 id='register'><a href='".APP_W."register'>Regístrate</a></h4>
				<h4 id='login'>Inicia Sesión</h4>
			</div>";
		}
		?>



		<!--Este div es el del login, que siempre estará oculto hasta que hagamos click en login o regisrate-->
		<div id="li_desplegable">
			<form id="form_login" name="login" method="post" action="<?=APP_W.'home/iniciar_sesion'; ?>">
				<input type="text" name="username" placeholder="Usuario" maxlength="20"><br>
				<input type="password" name="password" placeholder="**********" maxlength="30"><br>
				<input type="submit" id="login_submit" value="Entrar">
			</form>
		</div>
	</div>

</div>

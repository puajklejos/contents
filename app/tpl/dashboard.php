<?php
	if($_SESSION['tipo']['rol']==3)
	{
		//header('Location:'.APP_W.'dashboard');
	}
	else
	{
		header('Location:'.APP_W);
	}
	//if((isset($_SESSION['tipo'])) && ($_SESSION['tipo']==3))
?>
<div class="container3">		
	<div id="ac">
		<h3>Agregar Contenido</h3>

		<center>
		<form id="mascontent" name="mascontent" method="post" enctype="multipart/form-data" action="<?=APP_W.'dashboard/insertarContenido'; ?>">

		<select name="categoria" id="categ_nc">
			<option value="">- Selecciona -</option>
			<option value="1">Nivel inicial</option>
			<option value="2">Nivel intermedio</option>
			<option value="3">Nivel dificil</option>
		</select>
		<input type="text" name="titulo" placeholder="Título" class="categ-title"><br>
		<input type="hidden" name="MAX_FILE_SIZE" value="50000000">
		<label class="margin-top-bot">Miniatura del cuento</label><br><input type="file" name="miniatura" class="margin-top-bot"><br><br>
		<input type="button" id="npag" value="Añadir página"><br>
		<div id="pag1">
			<h3>Página Nº 1</h3>
			<label>Texto de la pagina</label><br><textarea id="texto_pag1" name="tp1"></textarea><br>
			<input type="hidden" name="MAX_FILE_SIZE" value="50000000">
			<label>Imagen para la pagina</label><br><input type="file" name="foto1" id="imagen1"><br><label>Posición</label><input name="pos1" type="number" min="1" max="2" id="position1"><br>
		</div>
		<div id="pag2">
			<br><br><h3>Página Nº 2</h3>
			<label>Texto de la pagina</label><br><textarea id="texto_pag2" name="tp2"></textarea><br>
			<input type="hidden" name="MAX_FILE_SIZE" value="50000000">
			<label>Imagen para la pagina</label><br><input type="file" name="foto2" id="imagen2"><br><label>Posición</label><input name="pos2" type="number" min="1" max="2" id="position2"><br>
		</div>
		<div id="pag3">
			<br><br><h3>Página Nº 3</h3>
			<label>Texto de la pagina</label><br><textarea id="texto_pag3" name="tp3"></textarea><br>
			<input type="hidden" name="MAX_FILE_SIZE" value="50000000">
			<label>Imagen para la pagina</label><br><input type="file" name="foto3" id="imagen3"><br><label>Posición</label><input name="pos3" type="number" min="1" max="2" id="position3"><br>
		</div>

		<input type="hidden" name="MAX_FILE_SIZE" value="50000000">
		<br><label>Juego del cuento</label><br><input type="file" name="juego"><br>
		<label style="font-size: 14px">El archivo debe ser un ".zip"</label>
		
		<br><br><input type="submit" id="submascont" value="Agregar contenido"><br>
		</form>
		</center>
	</div>

	<div id="au">
	<center>
		<h3>Administración de usuarios</h3>
		<div id="mu">
			<p>Aquí va la tabla de usuarios para el admin</p>
		</div>
		<br><input type="button" id="borrar" name="del_user" value="Eliminar"><input type="button" id="modificar" name="mod_user" value="Guardar"> 
		<div id="nu">
			<form class="nu" method="POST" name="register" action="<?=APP_W.'dashboard/registrar'; ?>">
				<label>Tipo de usuario</label>
				<select id="tipo" name="tipo">
					<option value="">- Selecciona -</option>
					<option value="1">Padre/Madre</option>
					<option value="2">Niño/a</option>
					<option value="3">Profesor/a</option>
				</select><br>
				<label class="gen" id="li1">Alias</label><input id="input1" class="gen" type="text" name="username" placeholder="Rafael">
				<label id="li2">Em@il</label><input id="input2" class="padre" type="email" name="email" placeholder="david_star_wins@outlook.com"><br>
				<label id="li3">NIF</label><input id="input3" class="padre" type="text" name="nif" placeholder="98989877-T"><br>
				<label class="gen" id="li4">Contraseña</label><input id="input4" class="gen" type="password" name="password" placeholder="**********"><br>
				<label class="gen" id="li5">Nombre</label><input id="input5" class="gen" type="text" name="name" placeholder="Rafael"><br>
				<label class="gen" id="li6">Apellidos</label><input id="input6" class="gen" type="text" name="lastname" placeholder="GOmez"><br>
				<label id="li7">Telefono</label><input id="input7" class="padre" type="text" name="phonenumber" placeholder="936658484"><br>
				<label class="gen" id="li8">Padre(NIF)</label><input id="input8" class="gen" type="text" name="parent" placeholder="78652144-T"><br>
				<input type="Submit" class="gen" id="input9" value="Registrar"><br>
			</form>
			</center>
		</div>
	</div>
</div>
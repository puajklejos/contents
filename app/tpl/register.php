<div class="container3" style="justify-content: center">

	<div id="au">
		<div id="nu">
			<form id="form_register" method="POST" name="register" accept-charset="utf-8" action="<?=APP_W.'register/registrar'; ?>">
			<center>
				<span class="title-register">Bienvenido a Contents</span></br>
				<span class="title-register">Regístrate!</span>
			</center>
				<select id="tipo" name="tipo">
					<option value="">-Selecciona-</option>
					<option value="1">Padre/Madre</option>
					<option value="2">Niño/a</option>
				</select></br>
				<input id="input1" class="gen" type="text" name="username" placeholder="Usuario" required></br>
				<input id="input2" class="gen" type="text" name="name" placeholder="Nombre" required></br>
				<input id="input5" class="gen" type="text" name="lastname" placeholder="Apellidos" required>
				<input id="input3" class="padre" type="email" name="email" placeholder="Email"></br> 
				<input id="input4" class="gen" type="password" name="password" placeholder="Contraseña" required></br>
				<input id="input6" class="padre" type="tel" name="phonenumber" placeholder="Telefono">
				<input id="input7" class="padre" type="text" name="nif" placeholder="NIF">
				<input id="input8" class="gen" type="text" name="parent" placeholder="Padre NIF">
				<button id="input9" class="gen" type="submit">Completado</button>
			</form>
		</div>
	</div>
</div>
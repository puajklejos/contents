<body>
	<div id="slide" style="left: -150px; top: 0px; width: 160px;">
		<div id="slide-content">
		    	<p><b>Control parental</b></p><hr>
		    	<p><b>Comparte tu opinión</b></p><hr>
		</div>
	</div>

	<h1 id="commentsTitle">FORO CONTENTS</h1>

	<div id="commentsList"></div>
	<?php
		if (isset($_SESSION['user'])) {
			echo "<div id='commentFormContainer'>
				<form id='commentForm' action='".APP_W."comment/newComment' method='POST' accept-charset='utf-8'>
					<div class='divComment'>
						<p class='pComment'>Comentario:</p>
						<textarea name='message' id='commentMessage'></textarea>
					</div>
					<button type='submit' id='commentButton'>Enviar</button>
				</form>
			</div>";

		}
		else{
			echo '<div id="commentFormContainer">Debes estar registrado para poder comentar.</div>';
		}
	?>

</body>
<?php
	
	class Dashboard extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this->model = new mDashboard();
			$this->view = new vDashboard();
		}
		function home(){
			
		}

		function mostrarUsuarios(){
			$tabla=$this->model->mostrarUsuarios();

			if($tabla!=null)
			{
				$this->json_out($tabla);
			}
		}
		function mostrarCuentos(){

		}


		function selPapa(){
			echo $_POST['xx'];
			$id_papa=$_POST['xx'];
			$papa=$this->model->selPapa($id_papa);

			if($papa!=null)
			{
				$this->json_out($papa);
			}
		}

		function registrar(){
			if ((isset($_POST['username'])) && (isset($_POST['name'])) && (isset($_POST['lastname'])) && (isset($_POST['email'])) && (isset($_POST['password'])) && (isset($_POST['phonenumber'])) && (isset($_POST['nif'])) && (isset($_POST['parent'])) && (isset($_POST['tipo']))) {
				$type = filter_input(INPUT_POST, 'tipo', FILTER_SANITIZE_STRING);
            	$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
            	$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
            	$lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
            	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
            	$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
            	$phonenumber = filter_input(INPUT_POST, 'phonenumber', FILTER_SANITIZE_STRING);
            	$nif = filter_input(INPUT_POST, 'nif', FILTER_SANITIZE_STRING);
            	$parent = filter_input(INPUT_POST, 'parent', FILTER_SANITIZE_STRING);
            	$done = $this->model->registrar($username, $name, $lastname, $email, $password, $phonenumber, $nif, $type, $parent);
	            if ($done == TRUE) {
	            	//Session::set('user', $username);
	            	//$this->json_out(array('redirect' => APP_W.'dashboard'));
	            	//header('Location:'.APP_W.'dashboard');
	            	$output=array(1);
             		$this->ajax_set($output);
	            } else {
	            	//$this->json_out(array('redirect' => APP_W.'dashboard'));
	            	//header('Location:'.APP_W.'dashboard');
	            	$output=array(2);
             		$this->ajax_set($output);
	            }
	        }
		}

		function borrar(){
			if(!empty($_POST['id']))
			{
				$idd=filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);
				

				$this->model->borrar($idd);


				if ($user== TRUE){
               	// se ha eliminado correctamente	
              	//header('Location:'.APP_W.'home');
              	$output=array('redirect'=>APP_W.'dashboard');
             	$this->ajax_set($output);
         		}
        		else{
             	// no se ha podido hacer el delete(no se encuentra id) 
               	//header('Location:'.APP_W.'register');
        		$output=array('redirect'=>APP_W.'dashboard');
             	//$this->ajax_set($output);
             	}

			}
		}

		function modificar(){
			$idd=filter_input(INPUT_POST, 'z0', FILTER_SANITIZE_NUMBER_INT);
            $username = filter_input(INPUT_POST, 'z1', FILTER_SANITIZE_STRING);
            $name = filter_input(INPUT_POST, 'z2', FILTER_SANITIZE_STRING);
            $lastname = filter_input(INPUT_POST, 'z3', FILTER_SANITIZE_STRING);
            $email = filter_input(INPUT_POST, 'z4', FILTER_SANITIZE_STRING);
            $password = filter_input(INPUT_POST, 'z5', FILTER_SANITIZE_STRING);
            $phonenumber = filter_input(INPUT_POST, 'z6', FILTER_SANITIZE_STRING);
            $nif = filter_input(INPUT_POST, 'z7', FILTER_SANITIZE_STRING);
            $type = filter_input(INPUT_POST, 'z8', FILTER_SANITIZE_STRING);
            $parent = filter_input(INPUT_POST, 'z9', FILTER_SANITIZE_STRING);
            $done = $this->model->modificar($idd, $username, $name, $lastname, $email, $password, $phonenumber, $nif, $type, $parent);
            if ($done == TRUE) {
	            //Session::set('user', $username);
	            $this->json_out(array('redirect' => APP_W.'dashboard'));
	        } else {
	            $this->json_out(array('redirect' => APP_W.'dashboard'));
	        }
		}

		

		function insertarContenido(){
				$flag_resumen=0;
				/*$dir_subida='F://DAW 2/SOFTWARE/xaamp/htdocs/contents/pub/img/';
				$dir_subida_juegos='F://DAW 2/SOFTWARE/xaamp/htdocs/contents/pub/js/';*/
				//$dir_subida=APP_W.'pub/img/';
				$dir_subida="/home/contents/web/contents.cesnuria.com/public_html/pub/img/";
				//$dir_subida_juegos=APP_W.'pub/js/';
				$dir_subida_juegos="/home/contents/web/contents.cesnuria.com/public_html/pub/js/";
				$fichero_subido1=$dir_subida . basename($_FILES['foto1']['name']);
				$fichero_subido2=$dir_subida . basename($_FILES['foto2']['name']);
				$fichero_subido3=$dir_subida . basename($_FILES['foto3']['name']);
				$miniatura=$dir_subida . basename($_FILES['miniatura']['name']);
				$juego=$dir_subida_juegos . basename($_FILES['juego']['name']);
				$nombre_juego=$_FILES['juego']['name'];
				//insertar juego en bd
				//insertar en tabla cuentos sin imagen
				//insertar imagen en tabla cuento con update
				//insertar paginas
				//insertar imagenes de las paginas

				//echo $_FILES['juego']['name'];
				//echo $juego;
				$f1=0;
				$f2=0;
				$f3=0;


				if(($_FILES['foto1']['name']==null) || ($_FILES['foto1']['name']==""))
				{
					//echo "Foto pagina 1 vacía";
				}
				else
				{
					echo $fichero_subido1;

					if (move_uploaded_file($_FILES['foto1']['tmp_name'], $fichero_subido1)) {
					    //echo "\nEl fichero es válido y se subió con éxito.\n";
					    //$done=$this->model->insertarContenido($fichero_subido1, 1);
					    $f1=1;

					} else {
					    //echo "\n¡Posible ataque de subida de ficheros!\n";
					}

				}

				if(($_FILES['foto2']['name']==null) || ($_FILES['foto2']['name']==""))
				{
					//echo "Foto pagina 2 vacía";
				}
				else
				{
					//echo $fichero_subido2;
					if (move_uploaded_file($_FILES['foto2']['tmp_name'], $fichero_subido2)) {
					    //echo "\nEl fichero es válido y se subió con éxito.\n";
					    //$done=$this->model->insertarContenido($fichero_subido2, 1);
					    $f2=1;
					} else {
					    //echo "\n¡Posible ataque de subida de ficheros!\n";
					}
				}

				if(($_FILES['foto3']['name']==null) || ($_FILES['foto3']['name']==""))
				{
					//echo "Foto pagina 3 vacía";
				}
				else
				{
					//echo $fichero_subido3;
					if (move_uploaded_file($_FILES['foto3']['tmp_name'], $fichero_subido3)) {
					    //echo "\nEl fichero es válido y se subió con éxito.\n";
					    //$done=$this->model->insertarContenido($fichero_subido3, 1);
					    $f3=1;
					} else {
					    //echo "\n¡Posible ataque de subida de ficheros!\n";
					}
				}

				if (move_uploaded_file($_FILES['miniatura']['tmp_name'], $miniatura)) {
					//echo "\nEl fichero es válido y se subió con éxito.\n";
					//$im_m=$this->model->insertarContenido($miniatura, 0);
				} else {
					//echo "\n¡Posible ataque de subida de ficheros!\n";
				}

				if (move_uploaded_file($_FILES['juego']['tmp_name'], $juego)) {
					//echo "\nEl fichero es válido y se subió con éxito.\n";
					//$done=$this->model->insertarContenido($juego, 2);
				} else {
					//echo "\n¡Posible ataque de subida de ficheros!\n";
				}
				$titulo=$_POST['titulo'];
				$categoria=$_POST['categoria'];
				//echo $titulo.", ".$categoria.", ".$miniatura;

				$done1=$this->insertarJuego($juego, $nombre_juego);
				if(done1==TRUE)
				{
					//echo "Juego insertado correctamente";
				}
				else
				{
					//echo "Error al insertar el juego";
					$flag_resumen=1;
				}
				$ji=$this->model->lastInsertId();


				if(($titulo!=null) && ($titulo!=""))
				{
					$done2=$this->insertarCuento($titulo, $categoria, $ji, 5, $miniatura);
					if(done2==TRUE)
					{
						//echo "Cuento insertado correctamente";
					}
					else{
						//echo "Error al insertar el cuento";
						$flag_resumen=1;
					}

					$lastid=$this->model->lastInsertId();
					if(($_POST['tp1']!=null) && ($_POST['tp1']!=""))
					{
						$texto=$_POST['tp1'];
						$done_p1=$this->model->insertarPagina($texto, $lastid, 1);

						if($done_p1==TRUE){
							//echo "Pagina 1 insertada";
							$zp=$_POST['pos1'];
							if(($_FILES['foto1']['name']!=null) && ($_FILES['foto1']['name']!=""))
							{
								$done_im_p1=$this->model->insertarContenido($fichero_subido1, $zp);

								if($done_im_p1==TRUE)
								{
									//echo "Imagen pagina 1 insertada";
								}
								else
								{
									//echo "Error al insertarla imagen para la pagina 1";
									$flag_resumen=1;
								}
							}
							else{
								//echo "No hay imagen en pagina 1";
							}

						}
						else{
							//echo "Problema al insertar Pagina 1";
							$flag_resumen=1;
						}
					}
					if(($_POST['tp2']!=null) && ($_POST['tp2']!=""))
					{
						$texto=$_POST['tp2'];
						$done_p2=$this->model->insertarPagina($texto, $lastid, 2);

						if($done_p1==TRUE){
							//echo "Pagina 2 insertada";
							$zp=$_POST['pos2'];
							if(($_FILES['foto2']['name']!=null) && ($_FILES['foto2']['name']!=""))
							{
								$done_im_p2=$this->model->insertarContenido($fichero_subido2, $zp);

								if($done_im_p1==TRUE)
								{
									//echo "Imagen pagina 2 insertada";
								}
								else
								{
									//echo "Error al insertarla imagen para la pagina 2";
									$flag_resumen=1;
								}
							}
							else
							{
								//echo "No hay imagen en pagina 2";
							}

						}
						else{
							//echo "Problema al insertar Pagina 2";
							$flag_resumen=1;
						}
					}
					if(($_POST['tp3']!=null) && ($_POST['tp3']!=""))
					{
						$texto=$_POST['tp3'];
						$done_p3=$this->model->insertarPagina($texto, $lastid, 3);

						if($done_p1==TRUE){
							//echo "Pagina 3 insertada";
							$zp=$_POST['pos3'];
							if(($_FILES['foto3']['name']!=null) && ($_FILES['foto3']['name']!="")){
								$done_im_p3=$this->model->insertarContenido($fichero_subido3, $zp);

								if($done_im_p1==TRUE)
								{
									//echo "Imagen pagina 3 insertada";
								}
								else
								{
									//echo "Error al insertarla imagen para la pagina 3";
									$flag_resumen=1;
								}
							}
							else
							{
								//echo "No hay imagen en pagina 3";
							}

						}
						else{
							//echo "Problema al insertar Pagina 3";
							$flag_resumen=1;
						}
					}
				}
				else
				{
					//echo "No se puede insertar un cuento sin titulo";
					$flag_resumen=1;
				}
			
				//Comprobación de que el cuento con su juego ha sido insertado correctamente
			if(($flag_resumen==0))
			{
				//echo "Contenido añadido";
				//echo '<script language="javascript">alert("Contenido añadido");</script>'; 
				header('Location: '.APP_W.'dashboard');
			}
			else{
				//echo "No se pudo añadir el contenido, lo sentimos";
				//echo '<script language="javascript">alert("No se pudo añadir el contenido, lo sentimos.\n\n Contents");</script>';
				header('Location: '.APP_W.'dashboard');
			}		
		}

		function insertarCuento($a, $b, $c, $d, $e){
			$done=$this->model->insertarCuento($a, $b, $c, $d, $e);

			if($done==TRUE)
			{
				//echo "Cuento insertado";
			}
			else
			{
				//echo "Problema al insertar cuento";
			}
		}

		function insertarJuego($a, $b){
			$zip = new ZipArchive;
			//echo $b;
			/*if ($zip->open('F://DAW 2/SOFTWARE/xaamp/htdocs/contents/pub/js/'.$b) === TRUE) {
			    $zip->extractTo('F://DAW 2/SOFTWARE/xaamp/htdocs/contents/pub/js/');
			    $zip->close();
			    //echo 'ok';
			} else {
			    //echo 'failed';
			}*/
			if ($zip->open("/home/contents/web/contents.cesnuria.com/public_html/pub/js/".$b) === TRUE) {
			    $zip->extractTo("/home/contents/web/contents.cesnuria.com/public_html/pub/js/");
			    $zip->close();
			    //echo 'ok';
			} else {
			    //echo 'failed';
			}

			//$c='F://DAW 2/SOFTWARE/xaamp/htdocs/contents/pub/js/'.$b;
			//echo $b;
			$d=preg_split('/[.]/', $b);
			//print_r($d);
			//echo $d[0];

			/*$e='F://DAW 2/SOFTWARE/xaamp/htdocs/contents/pub/js/'.$d[0].'/index.html';*/
			$e="/home/contents/web/contents.cesnuria.com/public_html/pub/js/".$d[0].'/index.html';

			//echo $e;

			$done=$this->model->insertarJuego($e);

			if($done==TRUE)
			{
				//echo "Juego insertado";
			}
			else
			{
				//echo "Problema al insertar juego";
			}
		}

		function mostrarContenido(){
			
			
			
		}

}
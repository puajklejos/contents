<?php
	
	class Home extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this->model = new mHome();
			$this->view = new vHome();
		}
		function home(){
			
		}
		function iniciar_sesion(){
			if (isset($_POST['username']) && isset($_POST['password'])) {
            	$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
            	$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
            	$user = $this->model->iniciar_sesion($username, $password);
            	$tuser= $this->model->sacarTipo($username);
	            if ($user == TRUE) {
	            	Session::set('user', $username);
	            	Session::set('tipo', $tuser);
	            	/*if($_SESSION['tipo']==3)
	            	{
	            		echo 'Es admin';
	            	}
	            	else
	            	{
	            		echo 'No es admin';
	            	}*/
	            	//echo '<br>';
	            	//var_dump($_SESSION['tipo']);
	            	//echo '<br>';
	            	//echo $_SESSION['tipo']['rol']; 
	            	//die;
	            	if($user == 1){
	            		$this->json_out(array('redirect' => APP_W.'padre'));
	            	}elseif($user == 2){
	            		$this->json_out(array('redirect' => APP_W.'desktop'));
	            	}elseif($user == 3){
	            		$this->json_out(array('redirect' => APP_W.'dashboard'));
	            	}
	            } 
	            else {
	            	$this->json_out(array('redirect' => APP_W.'home'));
	            }
	        }
		}
		function cerrar_sesion(){
			Session::destroy();
			$this->json_out(array('redirect' => APP_W));
		}
}
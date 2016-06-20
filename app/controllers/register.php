<?php
	
	class Register extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params){
			parent::__construct($params);
			$this->model = new mRegister();
			$this->view = new vRegister();
		}
		function home(){
			
		}
		/*function registrar(){
			if (isset($_POST['username']) && isset($_POST['name']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['phonenumber']) && isset($_POST['nif'])) {
				$type = filter_input(INPUT_POST, 'tipo', FILTER_SANITIZE_STRING);
            	$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
            	$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
            	$lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
            	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
            	$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
            	$phonenumber = filter_input(INPUT_POST, 'phonenumber', FILTER_SANITIZE_STRING);
            	$nif = filter_input(INPUT_POST, 'nif', FILTER_SANITIZE_STRING);
            	$parent = filter_input(INPUT_POST, 'parent', FILTER_SANITIZE_STRING);
            	$done = $this->model->registrar($username, $name, $lastname, $email, $password, $phonenumber, $nif, $parent, $type);
	            if ($done == 1) {
	            	Session::set('user', $username);
	            	$this->json_out(array('redirect' => APP_W.'padre'));
	            }elseif ($done == 2) {
	            	Session::set('user', $username);
	            	$this->json_out(array('redirect' => APP_W.'desktop_tpl'));
	            } else {
	            	$this->json_out(array('redirect' => APP_W.'error'));
	            }
	        }
		}*/

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
             		$this->json_out($output);
             		
	            } else {
	            	//$this->json_out(array('redirect' => APP_W.'dashboard'));
	            	//header('Location:'.APP_W.'dashboard');
	            	$output=array(2);
             		$this->json_out($output);
	            }
	        }
		}


}
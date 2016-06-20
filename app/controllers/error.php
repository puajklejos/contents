<?php

	final class Error extends Controller{
		function __construct($params=null){
			parent::__construct($params);
			$this->conf=Registry::getInstance();

			$this->model=new mError;
			$this->view=new vError;
		}
		function home(){
			
		}
		function redireccionar(){
			$output=array('redirect'=>APP_W.'home');
            $this->ajax_set($output);
			//$this->ajax_set(array('redirect' => APP_W));
		}
	}
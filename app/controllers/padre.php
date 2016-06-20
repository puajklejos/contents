<?php

class Padre extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params,$array=null){
			parent::__construct($params);
			$this->model=new mPadre();
			$this->view= new vPadre();
			
			//echo 'Hello controller!';
		}
		function home(){
			
	}
		// function showAdverts(){
		// 	$dades=$this->model->extractAdverts();
		// 	$this->json_out($dades);
		// }
}
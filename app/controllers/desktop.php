<?php

class Desktop extends Controller{
		protected $model;
		protected $view;
		
		function __construct($params,$array=null){
			parent::__construct($params);
			$this->model=new mDesktop();
			$this->view= new vDesktop();
			
			//echo 'Hello controller!';
		}
		function home(){
			//Coder::codear($this->conf);
		}

		function mostrar_cuentos_ini()
		{
			$resultado=$this->model->cargar_cuentos_ini();
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_ini_all()
		{
			$resultado=$this->model->cargar_cuentos_ini_all();
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_inter()
		{
			$resultado=$this->model->cargar_cuentos_inter();
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_inter_all()
		{
			$resultado=$this->model->cargar_cuentos_inter_all();
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_avan()
		{
			$resultado=$this->model->cargar_cuentos_avan();
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_avan_all()
		{
			$resultado=$this->model->cargar_cuentos_avan_all();
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_ini_e()
		{	
			$id = $_POST['id'];
			$num = $_POST['num'];
			$resultado=$this->model->cargar_cuentos_ini_e($id, $num);
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_cuentos_inter_e()
		{	
			$id = $_POST['id'];
			$num = $_POST['num'];
			$resultado=$this->model->cargar_cuentos_inter_e($id, $num);
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}


		function mostrar_cuentos_avan_e()
		{	
			$id = $_POST['id'];
			$num = $_POST['num'];
			$resultado=$this->model->cargar_cuentos_avan_e($id, $num);
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_juegos_ini()
		{	
			$id = $_POST['id'];
			$resultado=$this->model->cargar_juegos_ini($id);
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_juegos_inter()
		{	
			$id = $_POST['id'];
			$resultado=$this->model->cargar_juegos_inter($id);
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}

		function mostrar_juegos_avan()
		{	
			$id = $_POST['id'];
			$resultado=$this->model->cargar_juegos_avan($id);
			/*var_dump($resultado);
			die;*/
			if($resultado!=null)
			{
				$this->json_out($resultado);
			}
			else
			{
				return false;
			}
		}
}
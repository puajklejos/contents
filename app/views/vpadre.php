<?php
	/**
	 *  vUser
	 *  Prepares and loads the corresponding Template
	 *  @author Toni
	 * 
	 * */
	class vPadre extends View{

		function __construct(){
			parent::__construct();
			
			$this->tpl=Template::load('padre',$this->view_data);
			
		}

	}
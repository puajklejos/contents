<?php
	/**
	 *  v
	 *  Prepares and loads the corresponding Template
	 *  @author Toni
	 * 
	 * */
	class vDesktop extends View{
		
		function __construct(){
			parent::__construct();
			
			$this->tpl=Template::load('desktop_tpl',$this->view_data);
			
		}

	}
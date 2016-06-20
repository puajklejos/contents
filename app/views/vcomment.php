<?php
	/**
	 *  vHome
	 *  Prepares and loads the corresponding Template
	 *  @author Toni
	 * 
	 * */
	class vComment extends View{
		
		function __construct(){
			parent::__construct();
			
			$this->tpl=Template::load('comment',$this->view_data);
			
		}

	}
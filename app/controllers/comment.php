<?php

	final class Comment extends Controller{
		function __construct($params=null){
			parent::__construct($params);
			$this->conf=Registry::getInstance();

			$this->model=new mComment;
			$this->view=new vComment;
		}
		function home(){
			
		}

		function showComments(){
			$result = $this->model->showComments();
			$this->json_out($result);
		}

		function newComment(){
			if(!empty($_POST['message'])){
				$content=filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
				$done=$this->model->newComment($content);
				if($done == true)
				{
		            $this->json_out(array('redirect' => APP_W.'comment'));
				}
			}
		}
		
	}
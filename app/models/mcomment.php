<?php

	class mComment extends Model{

		function __construct(){
			parent::__construct();
			
		}

		function showComments(){
			try {
				$this->utf_8();
				$sql = "SELECT DISTINCT comentarios.texto, usuarios.nombre, usuarios.apellidos, comentarios.fecha FROM comentarios INNER JOIN usuarios WHERE comentarios.usuario = usuarios.id_usuario";
	            $this->query($sql);
	            $this->execute();
	            $params = $this->resultset();
	            return $params;
			} catch (PDOException $e) {
	            echo "Error:" . $e->getMessage();
	            return FALSE;
	        }
		}

		function newComment($content){
			try {
				$this->utf_8();
				$user = $_SESSION['user'];
				$sql = "SELECT id_usuario FROM usuarios WHERE nickname=?";
	            $this->query($sql);
	            $this->bind(1, $user);
	            $this->execute();
	            $array = $this->single();
	            $commentDate = date("Y-m-d H:i");
	            	$this->utf_8();
	            	$sql = "INSERT INTO comentarios(texto, usuario, fecha) VALUES (?,?,?)";
	            	$this->query($sql);
	            	$this->bind(1, $content);
	            	$this->bind(2, $array['id_usuario']);
	            	$this->bind(3, $commentDate);
	            	$this->execute();
	            	return TRUE;
			} catch (PDOException $e) {
	            echo "Error:" . $e->getMessage();
	        }
		}
	}
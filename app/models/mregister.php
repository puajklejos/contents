<?php

	class mRegister extends Model{

		function __construct(){
			parent::__construct();
			
		}
		function registrar($username, $name, $lastname, $email, $password, $phonenumber, $nif, $rol, $parent){
			if($rol==2)
			{
				//Niño
				try{	
				$this->utf_8();	
				$sql1= "SELECT id_usuario FROM usuarios WHERE nif=? AND rol=1";
				$this->query($sql1);
				$this->bind(1, $parent);
				$this->execute();

				//En x tengo el resultado de la consulta en forma de array
				$x = $this->single();

				if ($this->rowCount()==0)
				{
					//No existe un padre con este nif en la base de datos
					return FALSE;
				}	
				else
				{
					//Con esto guardo en una variable el resultado de la consulta
					$nif_papa=$x['id_usuario'];
					//echo$nif_papa;
					$this->utf_8();
					$sql = "SELECT * FROM usuarios WHERE nickname=?";
		            $this->query($sql);
		            $this->bind(1, $username);
		            $this->execute();
		            if ($this->rowCount()==0)
		            {
		            	$this->utf_8();
		            	$sql = "INSERT INTO usuarios(nickname, nombre, apellidos, password, rol, padre) VALUES (?,?,?,?,?,?)";
		            	$this->query($sql);
		            	$this->bind(1, $username);
		            	$this->bind(2, $name);
		            	$this->bind(3, $lastname);
		            	$this->bind(4, $password);
		            	$this->bind(5, $rol);
		            	$this->bind(6, $nif_papa);
		            	$this->execute();
		            	return TRUE;
	            	}
		            else
		            {
		            	return FALSE;
		            }
				}

				
				}catch(PDOException $e)
				{
					echo "Error:" . $e->getMessage();
				}
			}	
			else
			{
				//Padre o admin
				try {
				$this->utf_8();
				$sql = "SELECT * FROM usuarios WHERE nickname=? OR email=? OR nif=?";
	            $this->query($sql);
	            $this->bind(1, $username);
	            $this->bind(2, $email);
	            $this->bind(3, $nif);
	            $this->execute();
	            if ($this->rowCount() == 0) {
	            	$this->utf_8();
	            	$sql = "INSERT INTO usuarios(nickname, nombre, apellidos, email, password, telefono, nif, rol) VALUES (?,?,?,?,?,?,?,?)";
	            	$this->query($sql);
	            	$this->bind(1, $username);
	            	$this->bind(2, $name);
	            	$this->bind(3, $lastname);
	            	$this->bind(4, $email);
	            	$this->bind(5, $password);
	            	$this->bind(6, $phonenumber);
	            	$this->bind(7, $nif);
	            	$this->bind(8, $rol);
	            	$this->execute();
	            	return TRUE;
	            }else{
	            	return FALSE;
	            }
			} catch (PDOException $e) {
	            echo "Error:" . $e->getMessage();
	        }
			}
		}
}
<?php

	class mDashboard extends Model{

		function __construct(){
			parent::__construct();
			
		}
		

		function mostrarUsuarios(){
			//$this->utf_8();
			$sql="SELECT * FROM usuarios";
			$this->query($sql);
			$this->execute();
			if($this->rowCount()>0)
			{
				//Hay usuarios que mostrar
				return $this->resultset();
			}
		}

		function mostrarCuentos(){

		}

		function selPapa($id_papa){
			//$this->utf_8();
			$sql="SELECT nif FROM usuarios WHERE id_usuario=?";
			$this->query($sql);
			$this->bind(1,$id_papa);
			$this->execute();

			if($this->rowCount()>0)
			{
				//Tiene padre
				return $this->resultset();
			}
		}

		function registrar($username, $name, $lastname, $email, $password, $phonenumber, $nif, $rol, $parent){
			if($rol==2)
			{
				//Niño
				try{	
				//$this->utf_8();
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

					//$this->utf_8();
					$sql = "SELECT * FROM usuarios WHERE nickname=?";
		            $this->query($sql);
		            $this->bind(1, $username);
		            $this->execute();
		            if ($this->rowCount()==0)
		            {
		            	//$this->utf_8();
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
				//$this->utf_8();
				$sql = "SELECT * FROM usuarios WHERE nickname=? OR email=? OR nif=?";
	            $this->query($sql);
	            $this->bind(1, $username);
	            $this->bind(2, $email);
	            $this->bind(3, $nif);
	            $this->execute();
	            if ($this->rowCount() == 0) {
	            	//$this->utf_8();
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

		function borrar($idd)
		{
			try {
				//$this->utf_8();
				$sql="SELECT * FROM usuarios WHERE id_usuario=?";
			    $this->query($sql);
			    $this->bind(1,$idd);
			    $this->execute();
			    if($this->rowCount()==1)
			    {
			    	//El nick ya existe
			    	$sql2="DELETE FROM usuarios WHERE id_usuario=?";
					$this->query($sql2);
		     		$this->bind(1,$idd);
		     		$this->execute();
			    }
			    else
			    {
			    	return FALSE;
			    }
				
			}
			catch (PDOException $e) {
	            echo "Error:" . $e->getMessage();
	        }
		}
		function modificar($idd, $alias, $name, $lastname, $email, $password, $phonenumber, $nif, $rol, $parent){
			try{
				if($alias!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET nickname=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$alias);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($name!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET nombre=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$name);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($lastname!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET apellidos=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$lastname);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($email!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET email=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$email);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($password!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET password=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$password);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($phonenumber!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET telefono=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$phonenumber);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($nif!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET nif=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$nif);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($rol!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET rol=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$rol);
					$this->bind(2,$idd);
					$this->execute();
				}
				if($parent!=null)
				{
					//$this->utf_8();
					$sql="UPDATE usuarios SET padre=? WHERE id_usuario=?";
					$this->query($sql);
					$this->bind(1,$parent);
					$this->bind(2,$idd);
					$this->execute();
				}

				return TRUE;

			}
			catch (PDOException $e) {
	            echo "Error:" . $e->getMessage();
	        }

		}

		function insertarContenido($a, $b){
			//$this->utf_8();
			$x=$this->lastInsertId();
			$sql="INSERT INTO imagenes VALUES(NULL, ?, ?, ?)";
			$this->query($sql);
			$this->bind(1, $a);
			$this->bind(2, $b);
			$this->bind(3, $x);
			$this->execute();

			return TRUE;
		}

		function insertarCuento($a, $b, $c, $d, $e){
			//$this->utf_8();
			$sql="INSERT INTO cuentos VALUES(NULL, ?, ?, ?, ?, ?)";
			$this->query($sql);
			$this->bind(1, $a);
			$this->bind(2, $b);
			$this->bind(3, $c);
			$this->bind(4, $d);
			$this->bind(5, $e);
			$this->execute();

			return TRUE;
		}

		function insertarJuego($a)
		{
			//$this->utf_8();
			$sql="INSERT INTO juegos VALUES(NULL, ?)";
			$this->query($sql);
			$this->bind(1, $a);
			$this->execute();

			return TRUE;
		}

		function insertarPagina($a, $b, $c){
			//$b=$this->lastInsertId();
			//$this->utf_8();
			$sql="INSERT INTO pagina VALUES(NULL, ?, ?, ?)";
			$this->query($sql);
			$this->bind(1, $a);
			$this->bind(2, $b);
			$this->bind(3, $c);
			$this->execute();

			return TRUE;
		}

		function mostrarContenido(){

		}
		
}
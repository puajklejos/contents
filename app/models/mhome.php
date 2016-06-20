<?php

	class mHome extends Model{

		function __construct(){
			parent::__construct();
			
		}
		function iniciar_sesion($username, $password) {
	        try {
	        	$this->utf_8();
	            $sql = "SELECT * FROM usuarios WHERE nickname=? AND password=?";
	            $this->query($sql);
	            $this->bind(1, $username);
	            $this->bind(2, $password);
	            $this->execute();

	            $user = $this->single();

	            if ($this->rowCount() == 1)
	            {
	                if ($user['rol'] == 1) {
	                    return 1;
	                }elseif($user['rol'] == 2){
	                	return 2;
	                }else{
	                    return 3;
	                }
	            }
	            else
	            {
	                return FALSE;
	            }

	        } catch (PDOException $e) {
	            echo "Error:" . $e->getMessage();
	        }
    	}

    	function sacarTipo($a)
    	{
    		try{
    			$this->utf_8();
    			$sql="SELECT rol FROM usuarios WHERE nickname=?";
    			$this->query($sql);
    			$this->bind(1, $a);
    			$this->execute();

    			$x = $this->single();

    			return $x;
    		}
    		catch(PDOException $e)
    		{
    			echo "Error:" . $e->getMessage();
    		}
    	}

	}
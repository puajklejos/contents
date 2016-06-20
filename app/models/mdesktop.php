<?php

	class mDesktop extends Model{

		function __construct(){
			parent::__construct();
			
		}


	function cargar_cuentos_ini()
	{
		  try {
              //Codificar UTF8
              //$this->utf_8();
        if (!isset($_SESSION['user'])) {
              $sql = "SELECT * FROM cuentos WHERE categoria=1 LIMIT 1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
        }
        else
        {
          $sql = "SELECT * FROM cuentos WHERE categoria=1 LIMIT 4";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
          }
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_ini_all()
    {
      try {
              //Codificar UTF8
              //$this->utf_8();
        if (!isset($_SESSION['user'])) {
              $sql = "SELECT * FROM cuentos WHERE categoria=1 LIMIT 1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
        }
        else
        {
              $sql = "SELECT * FROM cuentos WHERE categoria=1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
        }

        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_inter()
    {
    	try {
        //Codificar UTF8
             //$this->utf_8();
        if (!isset($_SESSION['user'])) {
              $sql = "SELECT * FROM cuentos WHERE categoria=2 LIMIT 1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
            else
            {
              $sql = "SELECT * FROM cuentos WHERE categoria=2 LIMIT 4";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_inter_all()
    {
      try {
              //Codificar UTF8
              //$this->utf_8();
          if (!isset($_SESSION['user'])) {
              $sql = "SELECT * FROM cuentos WHERE categoria=2 LIMIT 1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
            else
            {
              $sql = "SELECT * FROM cuentos WHERE categoria=2";
              $this->query($sql);
              $this->execute();
              return $this->resultset(); 
            }
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_avan()
    {
    	try {
        //Codificar UTF8
             //$this->utf_8();
            if (!isset($_SESSION['user'])) {
              $sql = "SELECT * FROM cuentos WHERE categoria=3 LIMIT 1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
            else
            {
              $sql = "SELECT * FROM cuentos WHERE categoria=3 LIMIT 4";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_avan_all()
    {
      try {
        //Codificar UTF8
              //$this->utf_8();
            if (!isset($_SESSION['user'])) {
              $sql = "SELECT * FROM cuentos WHERE categoria=3 LIMIT 1";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
            else
            {
              $sql = "SELECT * FROM cuentos WHERE categoria=3";
              $this->query($sql);
              $this->execute();
              return $this->resultset();
            }
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }


  //Funciones visualizar cuentos.

    function cargar_cuentos_ini_e($id, $num)
    {
      try {
        //Codificar UTF8
             //$this->utf_8();

             $sql = "SELECT * FROM cuentos
              INNER JOIN pagina ON pagina.cuento = cuentos.id_cuento
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              INNER JOIN imagenes ON imagenes.pagina = pagina.id_pagina
              WHERE (cuentos.categoria=1 AND cuentos.id_cuento=?) AND pagina.numero=?";
              $this->query($sql);
              $this->bind(1,$id);
              $this->bind(2,$num);
              $this->execute();
              $var = $this->resultset();

              $sql = "SELECT * FROM cuentos
              INNER JOIN pagina ON pagina.cuento = cuentos.id_cuento
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              INNER JOIN imagenes ON imagenes.pagina = pagina.id_pagina
              WHERE (cuentos.categoria=1 AND cuentos.id_cuento=?)";
              $this->query($sql);
              $this->bind(1,$id);
              //$this->bind(2,$num);
              $this->execute();
              $long = $this->rowCount();

              $array_long = array('longitud'=>$long);

              array_push($var, $array_long);
              /*var_dump($var);
              die;*/
              return $var;
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_inter_e($id, $num)
    {
      try {
        //Codificar UTF8
              //$this->utf_8();

              $sql = "SELECT * FROM cuentos
              INNER JOIN pagina ON pagina.cuento = cuentos.id_cuento
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              INNER JOIN imagenes ON imagenes.pagina = pagina.id_pagina
              WHERE (cuentos.categoria=2 AND cuentos.id_cuento=?) AND pagina.numero=?";
              $this->query($sql);
              $this->bind(1,$id);
              $this->bind(2,$num);
              $this->execute();
              $var = $this->resultset();

              $sql = "SELECT * FROM cuentos
              INNER JOIN pagina ON pagina.cuento = cuentos.id_cuento
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              INNER JOIN imagenes ON imagenes.pagina = pagina.id_pagina
              WHERE (cuentos.categoria=2 AND cuentos.id_cuento=?)";
              $this->query($sql);
              $this->bind(1,$id);
              //$this->bind(2,$num);
              $this->execute();
              $long = $this->rowCount();

              $array_long = array('longitud'=>$long);

              array_push($var, $array_long);
              /*var_dump($var);
              die;*/
              return $var;
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_cuentos_avan_e($id, $num)
    {
      try {
        //Codificar UTF8
              //$this->utf_8();

              $sql = "SELECT * FROM cuentos
              INNER JOIN pagina ON pagina.cuento = cuentos.id_cuento
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              INNER JOIN imagenes ON imagenes.pagina = pagina.id_pagina
              WHERE (cuentos.categoria=3 AND cuentos.id_cuento=?) AND pagina.numero=?";
              $this->query($sql);
              $this->bind(1,$id);
              $this->bind(2,$num);
              $this->execute();
              $var = $this->resultset();

              $sql = "SELECT * FROM cuentos
              INNER JOIN pagina ON pagina.cuento = cuentos.id_cuento
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              INNER JOIN imagenes ON imagenes.pagina = pagina.id_pagina
              WHERE (cuentos.categoria=3 AND cuentos.id_cuento=?)";
              $this->query($sql);
              $this->bind(1,$id);
              //$this->bind(2,$num);
              $this->execute();
              $long = $this->rowCount();

              $array_long = array('longitud'=>$long);

              array_push($var, $array_long);
              /*var_dump($var);
              die;*/
              return $var;
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }


    //Cargar juegos(CUENTOS)
    function cargar_juegos_ini($id)
    {
      try {
        //Codificar UTF8
              //$this->utf_8();

              $sql = "SELECT * FROM cuentos 
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              WHERE id_cuento=?";
              $this->query($sql);
              $this->bind(1,$id);
              $this->execute();
              return $this->resultset();
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_juegos_inter($id)
    {
      try {
        //Codificar UTF8
              //$this->utf_8();

              $sql = "SELECT * FROM cuentos 
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              WHERE id_cuento=?";
              $this->query($sql);
              $this->bind(1,$id);
              $this->execute();
              return $this->resultset();
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

    function cargar_juegos_avan($id)
    {
      try {
        //Codificar UTF8
             //$this->utf_8();

              $sql = "SELECT * FROM cuentos 
              INNER JOIN juegos ON juegos.id_juego = cuentos.juego
              WHERE id_cuento=?";
              $this->query($sql);
              $this->bind(1,$id);
              $this->execute();
              return $this->resultset();
        } catch (PDOException $e) {
            echo "Error";
        }
        return false;
    }

	}
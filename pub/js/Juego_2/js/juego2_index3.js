$(document).ready(function(){
	//alert("Holaaa");	
	$(".elefante").draggable();
	$(".tigre").draggable();
	$(".leon").draggable();
	$(".cebra").draggable();
	$(".cocodrilo").draggable();
	
	var cont=0;
	


	$("#gris").droppable({
	drop: function(evento, ui)
	{
		 x=ui.draggable.attr("id");
		switch(x)
		{
			case "n1": /* Elefante */
				
			break;
			case "n2":
			
			break;
			case "n3":
			
			break;
			case "n4":
			
			break;
			case "n5":
			
			break;
			case "a1":
				
			break;
			case "a2":
			
			break;
			case "a3":
			
			break;
			case "a4":
			
			break;
			case "a5":
			
			break;


			case "d1":
				$("#d1").draggable("disable");
				cont=cont+1;
				if(cont>=5)
				{
					acabar();
				}
			break;

		}
	}

	  });

	/* FET */



	$("#naranja").droppable({
	drop: function(evento, ui)
	{
		 x=ui.draggable.attr("id");
		switch(x)
		{
			case "n1": 
				
			break;
			case "n2":
			
			break;
			case "n3":
			
			break;
			case "n4":
			
			break;
			case "n5":
			
			break;
			case "a1":
				
			break;
			case "a2":
			
			break;
			case "a3":
			
			break;
			case "a4":
			
			break;
			case "a5":
			
			break;


			case "p1":
				$("#p1").draggable("disable");
				cont=cont+1;
				if(cont>=5)
				{
					acabar();
				}
			break;

		}
	}

	  });


/* FET */


    $("#yellow").droppable({
    drop: function(evento, ui)
	{
		 x=ui.draggable.attr("id"); /*elefante*/
		switch(x)
		{
			case "c2":
				$("#c2").draggable("disable");
				cont=cont+1;
				if(cont>=5)
				{
					acabar();
				}
		
			break;
			case "a1":
				
			break;
			case "a2":
			
			break;
			case "a3":
			
			break;
			case "a4":
			
			break;
			case "a5":
			
			break;
			case "r1":
				
			break;
			case "r2":
			
			break;
			case "r3":
			
			break;
			case "r4":
			
			break;
			case "r5":
			
			break;

		}
	}
      });




/*fet*/


    $("#azul").droppable({
    drop: function(evento, ui)
	{
		 x=ui.draggable.attr("id");
		switch(x)
		{
			case "n1":
				
			break;
			case "n2":
			
			break;
			case "n3":
			
			break;
			case "n4":
			
			break;
			case "n5":
			
			break;
			case "l1":
				$("#l1").draggable("disable");
				cont=cont+1;
				if(cont>=5)
				{
					acabar();
				}
			break;
	
				
			break;
			case "r2":
			
			break;
			case "r3":
			
			break;
			case "r4":
			
			break;
			case "r5":
			
			break;

		}
	}
      });


   /* fet */
	  
	$("#blanco").droppable({
    drop: function(evento, ui)
	{
		 x=ui.draggable.attr("id");
		
		switch(x)
		{
			case "n1":
				
			break;
			case "n2":
			
			break;
			case "n3":
			
			break;
			case "n4":
			
			break;
			case "n5":
			
			break;
			case "m1":
				$("#m1").draggable("disable");
				cont=cont+1;
				if(cont>=5)
				{
					acabar();
				}
			break;
	
				
			break;
			case "r2":
			
			break;
			case "r3":
			
			break;
			case "r4":
			
			break;
			case "r5":
			
			break;

		}
	}
      });
	  function acabar()
	  {
		alert("Bien hecho!!");  
		// $(location).attr("href", "victoria.html");
	 }
	
});
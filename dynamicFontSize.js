<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Dartverein Amschl</title>

<link rel="stylesheet" href="css/reset.css" type="text/css" />
<link rel="stylesheet" href="flexslider/flexslider.css" type="text/css">
<link rel="stylesheet" href="css/layout.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="flexslider/jquery.flexslider.js"></script>

<script src="js/dynamicFontSize.js"></script>


<script type="text/javascript" charset="utf-8">

	// Set Overlay Sizes -> and also on each resize 
	function setOverlaySizes() 
	{
		var w_new, h_new; 
		
		$('.overlay').each(function() 
		{
			console.log('hellooo :D'); 
			
			w_new = $('.small_story img').first().width(); 
			h_new = $('.small_story img').first().height(); 
			
			$(this).width(w_new).height(h_new); 
							
		});
	}
	
	
	
	
$(document).ready(function(e) {
		 
		 
	  $(window).load(function() {
		$('.flexslider').flexslider({controlNav: false});
	  });
	  

		move('#logo img')
			.set('transform','rotateY(180deg)')
			.duration('6s')
			.end();
	
	 // Init Dynamic Font Size 
	 DynamicFontSize.init();
	 
	 // Resize Overlays -> EventBinder
		$(window).resize(setOverlaySizes);
		
	// -> Do It Once
	setOverlaySizes(); 
	
	
	// MouseEvents
	
	$('.small_story').on('mouseenter',function() 
	{
		$(this).children('.overlay').toggle(1);	
	}); 
	
	$('.small_story').on('mouseleave',function() 
	{
		$(this).children('.overlay').toggle(1);	
	}); 
  
});
</script>
</head>


<body>
	
  <div id="wrapper">
  
  
    <div id="slider">
    
             <div class="flexslider">
              <ul class="slides">
                <li>
                  <img src="images/start/slider/slider01.jpg" />
                </li>
                <li>
                  <img src="images/start/slider/slider02.jpg" />
                </li>
                <li>
                  <img src="images/start/slider/slider03.jpg" />
                </li>
              </ul>
            </div>
            
    </div>
    
    <div id="navigation">
    
    	<ul>
        	<li><a href="#">Home</a></li>
    	    <li><a href="#">Ranking</a></li>
            <li id="logo"><img src="images/logo.png" /></li>
    	    <li><a href="#">Verein</a></li>
    	    <li><a href="#">Fotos</a></li>
	  </ul>
      
    </div>
    
    <div id="stories">
    	
        <div class="large_story">
        
        	<img src="images/aufmacher.jpg" />
            
            <div class="txtWrapper">
            	<h1>Neuester Erfolg: Mannschaft D4 holt den Pokal!</h1>
                <h2>Der Dartverein Amschl existiert nun bereits seit 2012 als Lorem Ipsum Dolor Sit at amet. En at emet Vitalis vit at vitunum el flora don dolor les sit des vis vat vitanem.</h2>
                <p>Der Dartverein Amschl existiert nun bereits seit 2012 als Lorem Ipsum Dolor Sit at amet. En at emet Vitalis vit at vitunum el flora don dolor les sit des vis vat vitanem.</p>
                <p>Der Dartverein Amschl existiert nun bereits seit 2012.</p>
                <p>Der Dartverein Amschl existiert nun bereits seit 2012 als Lorem Ipsum Dolor Sit at amet. En at emet Vitalis vit at vitunum el flora don dolor les sit des vis vat vitanem.</p>

            </div>
        
        </div>
        
        
       <div class="smallStories">
        
        <div class="small_story">
            <div class="overlay"></div>
        	
            <img src="images/small01.jpg" />
            
            <div class="caption">
            	<p class="captionHeader">Sensation</p>
                <p>Maxine Mustermann</p>
            </div>
        	
        </div>
        
        
       <div class="small_story">
            <div class="overlay"></div>
            
            <img src="images/small02.jpg" />
            
            <div class="caption">
            	<p class="captionHeader">Sensation</p>
                <p>Maxine Mustermann</p>
            </div>
            
        	
        </div>
        
        
       <div class="small_story last">
            <div class="overlay"></div>
            
            <img src="images/small03.jpg" />
            
            <div class="caption">
            	<p class="captionHeader">Sensation</p>
                <p>Maxine Mustermann</p>
            </div>
        	
            </div>
            
        
     </div>
     
     
       <div class="smallStories">
        
        <div class="small_story">
        	
            <div class="overlay"></div>
            
            <img src="images/small01.jpg" />
            
            <div class="caption">
            	<p class="captionHeader">Sensation</p>
                <p>Maxine Mustermann</p>
            </div>
        	
            
        </div>
        
        
       <div class="small_story">
        	
            <div class="overlay"></div>
            
            <img src="images/small02.jpg" />
            
            <div class="caption">
            	<p class="captionHeader">Sensation</p>
                <p>Maxine Mustermann</p>
            </div>
            
        	
        </div>
        
        
       <div class="small_story last">
        	
            <div class="overlay"></div>
            
            <img src="images/small03.jpg" />
            
            <div class="caption">
            	<p class="captionHeader">Sensation</p>
                <p>Maxine Mustermann</p>
            </div>
        	
            </div>
            

        
     </div>
     
     
    
    </div>
    
    

    
    
  </div>
  
  
  <div id="footer">
  	<p>Dartverein Amschl</p>
    <p>Anschrift</p>
    <p>Tel:</p>
    <p>dartverein-amschl.at</p>
  </div>
  
  
  
<script type="text/javascript" src="js/movejs/move.js"></script>

</body>



</html>

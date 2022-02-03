var btn = $('#topscroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.navigator.vendor == "Apple Computer, Inc."){
    if(window.matchMedia('screen and (max-width: 480px)').matches){
    
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '98px';
      }
  }else if(window.matchMedia('screen and (max-width: 576px)').matches){
    
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '98px';
      }

  }else if(window.matchMedia('screen and (max-width: 768px)').matches){
    
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '98px';        
      }

  }else if(window.matchMedia('screen and (max-width: 992px)').matches){
    
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '158px';
      }

  }else if(window.matchMedia('screen and (max-width: 1200px)').matches){
    
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '98px';
      }

  }else if(window.matchMedia('screen and (max-width: 1400px)').matches){
    
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '98px';
      }

  }else if(window.matchMedia('screen and (max-width: 9999px)').matches){
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('navbar').style.top = '0';
      
      
    } else {
      document.getElementById('navbar').style.top = '98px';
    }

  }
  } 
    else{
      if(window.matchMedia('screen and (max-width: 480px)').matches){
    
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').style.top = '0';
          
          
        } else {
          document.getElementById('navbar').style.top = '140px';
        }
    }else if(window.matchMedia('screen and (max-width: 576px)').matches){
      
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').style.top = '0';
          
          
        } else {
          document.getElementById('navbar').style.top = '120px';
        }
  
    }else if(window.matchMedia('screen and (max-width: 768px)').matches){
      
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').style.top = '0';
          
          
        } else {
          document.getElementById('navbar').style.top = '120px';
          
        }
  
    }else if(window.matchMedia('screen and (max-width: 992px)').matches){
      
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').style.top = '0';
          
          
        } else {
          document.getElementById('navbar').style.top = '220px';
        }
  
    }else if(window.matchMedia('screen and (max-width: 1200px)').matches){
      
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').style.top = '0';
          
          
        } else {
          document.getElementById('navbar').style.top = '140px';
        }
  
    }else if(window.matchMedia('screen and (max-width: 1400px)').matches){
      
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').style.top = '0';
          
          
        } else {
          document.getElementById('navbar').style.top = '140px';
        }
  
    }else if(window.matchMedia('screen and (max-width: 9999px)').matches){
      
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
        
        
      } else {
        document.getElementById('navbar').style.top = '120px';
      }
  
    }
    }

  
}
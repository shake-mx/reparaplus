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



if(window.matchMedia("(min-width: 1400px)").matches){
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
      
    } else {
      document.getElementById("navbar").style.top = "120px";
    }
  }
}else if(window.matchMedia("(min-width: 1200px)").matches){ 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
    } else {
      document.getElementById("navbar").style.top = "140px";

    }
  }
}else if(window.matchMedia("(min-width: 992px)").matches){ 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
      
    } else {
      document.getElementById("navbar").style.top = "150px";
    }
  }
}else if(window.matchMedia("(min-width: 768px)").matches){ 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
    } else {
      document.getElementById("navbar").style.top = "220px";
    }
  }
}else if(window.matchMedia("(min-width: 576px)").matches){ 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
    } else {
      document.getElementById("navbar").style.top = "120px";
    }
  }
}else{
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
    } else {
      document.getElementById("navbar").style.top = "150px";
    }
  }
}




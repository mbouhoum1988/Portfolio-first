$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyASCY_HlKy2Q2QkpkWGYmF-dkuqr-IbGM8",
        authDomain: "updated-portfolio-bf3d0.firebaseapp.com",
        databaseURL: "https://updated-portfolio-bf3d0.firebaseio.com",
        projectId: "updated-portfolio-bf3d0",
        storageBucket: "updated-portfolio-bf3d0.appspot.com",
        messagingSenderId: "904374058202"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

       $("#submit").on("click", function(){

       var  name = $("#name").val().trim();
       var  email = $("#email").val().trim();
       var  message = $("#message").val().trim();
        
        var add = {
            name : name,
            email : email,
            message : message
        }
        database.ref().push(add);
    });
      
        $(".navbar a").on("click", function(event){
            if (this.hash !== '') {
                event.preventDefault();
                const hash = this.hash;
        
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100
                },
                800
                );
            }
        });
   
});
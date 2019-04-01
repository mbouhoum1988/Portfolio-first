$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyASCY_HlKy2Q2QkpkWGYmF-dkuqr-IbGM8",
        authDomain: "updated-portfolio-bf3d0.firebaseapp.com",
        databaseURL: "https://updated-portfolio-bf3d0.firebaseio.com",
        projectId: "updated-portfolio-bf3d0",
        storageBucket: "",
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
            message : message,
            dataAdded: firebase.database.ServerValue.TIMESTAM
        }
        database.ref().push(add);
    });
        database.ref().on("child_added", function(snapshot){
            var sp = snapshot.val();

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
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var checkbox = document.getElementById("termsCheckbox").checked;

    if (name && email && message && checkbox) {

        document.getElementById("feedbackHeading").style.display = "none";

        document.getElementById("contactForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "block";
    } else {
        alert("Please fill in all fields and check the checkbox.");
    }
      
});
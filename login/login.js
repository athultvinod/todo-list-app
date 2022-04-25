function validate(){
    var username = document.getElementById("username").value;
    var password =document.getElementById("password").value;
    if(username == "admin" && password == "12345") {
       
    alert("Login successful");
   
 }else if( username !== "admin "&& password !== "12345"){
    alert("invalied username or password ")
   
    
}else{
  
   alert("Login failed")
 
}
}

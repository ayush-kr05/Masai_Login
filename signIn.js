document.querySelector("form").addEventListener("submit",getDetails);

var data=JSON.parse(localStorage.getItem("userDetails")) ;


function getDetails(event){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var pass=document.querySelector("#pass").value;

    var isExsist=false;
    for(var i=0;i<data.length;i++){
        if(data[i].email===email && data[i].pass===pass){
            isExsist=true;
            
            break;
        }
    }

    if(isExsist==true){
        alert("Welcome To Masai");
    }else{
        alert("Wrong Credentials");
    }
}

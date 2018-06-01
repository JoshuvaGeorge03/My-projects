

function validate(){
    
    
    //getting the value
    var name=document.getElementById("name").value;
    var uname=document.getElementById("uname").value;
        var password1=document.getElementById("password").value;
        var password2=document.getElementById("password2").value;
        var code=document.getElementById("country").value;   
var date=document.getElementById("date").value;
var percentage=document.getElementById("percentage").value;


       var isvalid=true;
    


        //name verification
    if(name == "" || name.length > 15 || name== null || name.length < 4){
        alert("enter the valid name details");
        document.validation.name1.focus();
        isvalid=false;
    return isvalid;
    }

        // username verification
        if (uname.lenth > 15 || uname==''|| uname==null || uname.length<5)
        {
         alert("enter the valid user details as per indicated" );
            document.validation.uname1.focus();
             isvalid=false;
    return isvalid;
            } 
        /*else
        { 
            var i =0;

         while (i < uname.length){
             char = uname.charAt(i);
                if( char.indexOf('')==0 ){
                alert(" don't use space");
                    document.validation.uname1.focus();
                    return false;
                    break;
                }
         i++;
            }


    }*/

        //email address verification

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!validation.mail.value.match(mailformat))
    {
        alert("enter valid mail");
    document.validation.mail.focus();
 isvalid=false;
    return isvalid;
    }
        //password verification

        if(password1=="" || password1.length < 8 || password1==null || password.lenth > 15){
        alert("enter the password as per instruction");
                    document.validation.password1.focus();
             isvalid=false;
    return isvalid;
        }
        //checking whether the passwords are same 

        if(password1!=password2){
        alert("enter the same password");
            document.validation.password3.focus();
             isvalid=false;
    return isvalid;
        }

        



    //Date validation

    
    var date=document.validation.date1.value;
    
    if(date ==null || date==''){
alert("enter valid details");
        document.validation.date1.focus();
        isvalid=false;
        return isvalid;
    }

    var day = new Date();
    var birth=new Date(date);
    var age = day.getFullYear() - birth.getFullYear();
        var month=day.getMonth()-birth.getMonth();
        if(month < 0 || (month==0 && day.getDate() < birth.getDate())){
        age--;
        }
if(age<18){
alert("age should not below 18");
            document.validation.date1.focus();

    isvalid=false;
return isvalid;
}
   

    
    //percentage validation
    
    var percentage=document.getElementById("percentage").value;
    if(percentage==null || percentage==''){
        alert("enter valid details");
        document.validation.percentage1.focus();
        isvalid=false;
        return isvalid;
    }
    
    //country code verification

        if(isNaN(code) || code.length < 6 || code.length >6){
        alert("enter the valid country code");
            File
document.validation.country1.focus();
        isvalid=false;
    return isvalid;
        }    
    


function WriteToFile()
            {   
 var name=document.validation.name1.value;
             var username=document.validation.uname1.value;
             var password=document.validation.password1.value;
             var date=document.validation.date1.value;
            var percentage=document.getElementById("percentage").value;
                var countrycode=document.validation.country1.value;
             var details="The Student details entered in the form \n\nname: "+name+"\nuser name: "+username+"\npassword: "+password+"\nbirthdate: "+date+"\nPercentage: " +percentage+"\nCountry Code: "+countrycode;

               
	var textToSaveAsBlob = new Blob([details], {type:"text/plain"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = name;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	//downloadLink.innerHTML = "Download File";
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);

	downloadLink.click();
               function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
               
               
             }

if(isvalid){
   
WriteToFile();
    return isvalid;

}

}













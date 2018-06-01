function validate2(){
    
    
    //getting the value
    var name=document.getElementById("name").value;
    var uname=document.getElementById("uname").value;
        var password1=document.getElementById("password").value;
        var password2=document.getElementById("password2").value;
        var code=document.getElementById("country").value;   
var date=document.getElementById("date").value;
var percentage=document.getElementById("percentage").value;

var isvalid= true;
    
       
    


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
            isvalid= false;
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
function output(){
    
    document.getElementById("validation1").addEventListener('submit',validate2());
function
}
    



      return(  window.confirm("do you want to submit"+"<br />"+ details +"<br>"+"kindly note it");)


    }*/

        //email address verification

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!validation.mail.value.match(mailformat))
    {
        alert("enter valid mail");
    document.validation.mail.focus();

   isvalid= false;
        return isvalid;
    }
        //password verification
    




        if(password1=="" || password1.length < 8 || password1==null || password.lenth > 15){
        alert("enter the password as per instruction");
                    document.validation.password1.focus();
            isvalid= false;
            return isvalid;
        }
        //checking whether the password are same 

        if(password1!=password2){
        alert("enter the same password");
            document.validation.password3.focus();
            isvalid=false;
            return isvalid;
        }

        //country code verification

        if(isNaN(code) || code.length < 6 || code.length >6){
        alert("enter the valid country code");
            File
document.validation.country1.focus();
        isvalid= false;
            return isvalid;
        }    



    //Date validation

    
    var day = new Date();
    var tday=day.getDate();
    var month=day.getMonth() + 1;
    var year =day.getFullYear();
    


    if (day < 10){
    var tday = "0" + today;
    }
    if(month<10){
    var month = "0" + month;
    }
    var today = year+"-"+month+"-"+tday;
      
   

        if(today==date){
            alert("enter valid date")
            document.validation.date1.focus();
    isvalid= false;
            return isvalid;
        } 
     var details="user name: "+uname+"password: "+password1;
    
   
    if(isvalid){
        load();
       return true;
    
    } 

}
function load()
            {   
 
            var link=document.createElement('a');
               link.setAttribute("href","validation2.html");
                link.setAttribute("target","_blank");
                link.click();
	
            window.location.href="validation2.html";
             }



 




let NameNode=$("#Fullname");
let AgeNode=$("#age");
let EmailNode=$("#email");
let MobileNode=$("#Mobile");
let AppointNode=$("#role");

$(document).ready(function() {
    NameNode.blur(()=>NameValidation());
    AgeNode.blur(()=>AgeValidation());
    EmailNode.blur(()=>Emailvalidation());
    MobileNode.blur(()=>MobileValidation());
    AppointNode.blur(()=>Appointvalidation());
})

function NameValidation(){
    $(".error1").hide();
    var name=$("#Fullname").val();
    var NameReg =new RegExp("^[a-zA-Z ]+$");
  
    if(name==""){
        $("#Fullname").css({border:"2px red solid"});
        $('#Fullname').after('<span class="error error1"> Please enter your name</span>');
         return false;
    }
    else if(!NameReg.test(name)){
        $("#Fullname").css({border:"2px red solid"});
        $('#Fullname').after('<span class="error error1">Letter only</span>');
        return false;
    }
    else{
        $("#Fullname").css({border:"2px green solid"});
        return true;
    }
};

function AgeValidation(){
    var Age=$("#age").val();
    $(".error2").hide();
    if(Age==""){
        $("#age").css({border:"2px red solid"});
        $('#age').after('<span class="error error2"> Please enter your age</span>');
        return false;
    }
    else {
        $("#age").css({border:"2px green solid"});
        return true;
    }
};

function Emailvalidation(){
    var Email=$("#email").val();
    $(".error3").hide();
    var EmailReg = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
    if(Email==""){
        $("#email").css({border:"2px red solid"});
        $('#email').after('<span class="error error3"> Please enter your email</span>');
        return false;
    }
    else if(!EmailReg.test(Email)){
      
        $("#email").css({border:"2px red solid"});
        $('#email').after('<span class="error error3"> Please enter valid email</span>');
        return false;
    }
    else{
        $("#email").css({border:"2px green solid"});
        return true;
    }
};

function MobileValidation(){
    var Mobile=$("#Mobile").val();
    $(".error4").hide();
    var MobileReg =new RegExp("^[6-9][0-9]{9}$");
    if(Mobile==""){
        $("#Mobile").css({border:"2px red solid"});
        $('#Mobile').after('<span class="error error4"> Please enter your mobile number</span>');
        return false;
    }
    else if(!MobileReg.test(Mobile)){

        $("#Mobile").css({border:"2px red solid"});
        $('#Mobile').after('<span class="error error4"> Please enter valid mobile number</span>');
        return false;
    }
    else{
        $("#Mobile").css({border:"2px green solid"});
        return true;
    }
};

function Appointvalidation(){
    var Appoint=$("#role option:selected").val();
    $(".error5").hide();
    if(Appoint=="0"){
        $("#role").css({border:"2px red solid"});
        $('#role').after('<span class="error error5"> Please select value from dropdown</span>');
        return false;
    }
    else {
        $("#role").css({border:"2px green solid"});
        return true;
    }
}


function validateForm(){debugger
    let flag1=NameValidation();
    let flag2=AgeValidation();
    let flag3=Emailvalidation();
    let flag4=MobileValidation();
    let flag5=Appointvalidation();
    let output = (flag1 && flag2  && flag3 && flag4 && flag5)
    if (output == false)
    {
        $(".Consultant-offered").height("860px");
        return false;
    }
    else{
        return true;
    }


}




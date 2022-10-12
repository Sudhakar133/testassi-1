function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    //it is returning an HTML element
    //<label for="email">Mail</label>
    
//     function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//         var ele=document.createElement(tagname);
//         ele.setAttribute(attrname,attrvalue);
//         ele.setAttribute(attrname1,attrvalue1);
//         return ele;
//     }
//     function createlinebreak(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
//     }


//     //functions: it helps to remove the repeatative code
// var label=createlabels("label","for","ftname","firstname");
// var br1=createlinebreak("br");
// var input=createinput("input","type","firstname","id","ftname");
// var br2=createlinebreak("br");

// var password=createlabels("label","for","mname","Middlename");
// var br3=createlinebreak("br");
// var passinput=createinput("input","type","m name","id","mname");
// var br4=createlinebreak("br");

// var lname=createlabels("label","for","lname","Lastname");
// var br5=createlinebreak("br");
// var passinputt=createinput("input","type","l name","id","lname");
// var br6=createlinebreak("br");

// var Pname=createlabels("label","for","Pname","Phone number");
// var br6=createlinebreak("br");
// var passinputt=createinput("input","type","Pname","id","Pname");
// var br7=createlinebreak("br");


// document.body.append(label,br1,input,br2,password,br3,passinput,br4,lname,br5,passinputt,br6);




// main div

//fname
var label=createlabels("label","for","ftname","First Name");
var br1=createlinebreak("br");
var input=createinput("input","type","name","id","fname");
var br2=createlinebreak("br");

//mname
var label1=createlabels("label","for","mname","Middle Name");
var br3=createlinebreak("br");
var input1=createinput("input","type","name","id","mname");
var br4=createlinebreak("br");

//lname
var label2=createlabels("label","for","lastname","Last Name");
var br5=createlinebreak("br");
var input2=createinput("input","type","name","id","lastname");
var br6=createlinebreak("br");

//phonenumber
var phonenumber=createlabels("label","for","phnnumber","Phone Number");
var br7=createlinebreak("br");
var ph=createinput("input","type","number","id","phnnumber");
var br8=createlinebreak("br");


document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,phonenumber,br7,ph,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
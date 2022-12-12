// var studentdetail = {
//     name:"Syed kariz ali",
//     Age:20,
//     Address:"Karachi",
//     Height:"5'7"
// };
// studentdetail.weight="60kg"
// delete studentdetail.Age;


// // To check the property is present or not
// var a="Address" in studentdetail; 
// console.log(a);


// console.log(studentdetail);

var std1 ={
    name:"Ali",
    Age:12,
    Class:6,
    Address:"House # 10,Islamabad",
    Rollno:"ab1001"
}
var std2 ={
    name:"Hamza",
    Age:13,
    Class:7,
    Address:"House # 20,karachi",
    Rollno:"ab1002"
}
var std3 ={
    name:"Huzaifa",
    Age:11,
    Class:6,
    Address:"House # 30,Hyderabad",
    Rollno:"ab1003"
}
var std4 ={
    name:"Ahad",
    Age:14,
    Class:8,
    Address:"House # 40,karachi",
    Rollno:"ab1004"
}
var std5 ={
    name:"Abdullah",
    Age:16,
    Class:10,
    Address:"House # 50,Lahore",
    Rollno:"ab1005"
}
var std6 ={
    name:"Haris",
    Age:9,
    Class:4,
    Address:"House # 60,karachi",
    Rollno:"ab1006"
}
var std7 ={
    name:"Hoorain",
    Age:17,
    Class:11,
    Address:"House # e-129,Lahore",
    Rollno:"ab1007"
}
var std8 ={
    name:"Meraj",
    Age:19,
    Class:13,
    Address:"House # 80,karachi",
    Rollno:"ab1008"
}
var std9 ={
    name:"Asharib",
    Age:19,
    Class:13,
    Address:"House # 90,karachi",
    Rollno:"ab1009"
}
var std10 ={
    name:"Maaz Khan",
    Age:18,
    Class:12,
    Address:"House # 100,karachi",
    Rollno:"ab10010"
}
var arr=[std1,std2,std3,std4,std5,std6,std7,std8,std9,std10];
// console.log(arr);

for (i=0; i<arr.length; i++){
    console.log(arr[i]);
}
function srch(){
    var a=document.getElementById('sea'); 
    var b = a.value;
    var g =false;
    for (i=0; i<arr.length; i++){
        if (b==arr[i].Rollno){
            g=true;
            if(g==true){
                console.log(arr[i].Rollno);
                console.log("Found");
            
        }
        else{
                console.log("Not Found");

            }
        }
        
        
    }
    
}


    
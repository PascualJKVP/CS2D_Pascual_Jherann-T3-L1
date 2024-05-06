//instantiate variables and constant

let name = "Jherann Karylle Pascual";
let address = "Barangobong, Sta. Lucia, Ilocos Sur";
let age = "20";
let classRole = "Student";
const course = "BSCS";
//condition

if (course === "BSCS"){
    if (classRole === "Student"){
        let password = prompt("Enter Passsword: ");
        let pass="BSCS02062212"
        if (password.length >=12 && password.includes(course)){
                console.log("Name: "+ name);
                console.log("Age: "+age);
                console.log("ClassRole: "+ classRole);
                for (let i=0; i < age; i++){
                console.log("Adress: "+ address);
            }
        }else {
            console.log("Invalid Password!");
        }
    }else{
        console.log("You're not a Student!");
    }
}else if(course === "BSM"){
    if(classRole === "Teacher"){
        console.log("Teacher detected!");
    }else{
        console.log("Not a Teacher detected!");
    }  
}else if (course === "BAEL"){
    if (classRole === "Officer"){
        console.log("Officer detecyed!");
    }
}else{
    console.log("Not an Officer detected");
}

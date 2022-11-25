1]this inside global scope

this inside an object

this inside a method

this inside a function

this inside inner function

this inside a constructor

this inside class

2]//this inside global scope

this.table="window table";

console.log(window.table);



//this inside an object

let johnsroom={

  table:"johns table"

}

console.log(johnsroom.table)



//this inside a method

let johnsroom={

  table:"johns table",

  cleantable(){

    console.log(`cleaning ${this.table}`)

  }

}

johnsroom.cleantable()



//this inside a function

this.table="window table";

const cleantable=function(){

  console.log(`cleaning ${this.table}`)

}

cleantable.call(this);



//this inside inner function

this.table="window table";



const cleantable=function(soap){

  const innerFunction=(_soap) => {

    console.log(`cleaning ${this.table} using ${_soap}`) 

  }

  innerFunction(soap);

}

cleantable.call(this,'some soap');



//this inside a constructor

let createroom=function(name){

  this.table=`${name} table`

}

const sumitsroom=new createroom('sumit')



//this inside class

class createroom{

  constructor(name){

    this.table=`${name} table`

  }

  cleantable(soap){

    console.log(`cleaning ${this.table} using ${soap}`)

  }

}

const sumitsroom=new createroom('sumit')

sumitsroom.cleantable(`some soap`)

//3,4,5,6]

class student{

    static count=0;  //static variable to call

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${age} is not eligible`);

       }

   }

}

const Riya=new student('Riya',18,1234,34);

const Hiya=new student('Hiya',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

console.log(student.countStudent());

Riya.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();


//fat arrow function

class student{
    constructor(name,age,marks){

        this.name=name;

        this.age=age;

        this.marks=marks;

    }

    setplacementage(minplacementage){
        console.log(this);
        return (minmarks) => {
            console.log('eligibleforcurrentcompany',this)
            if(this.marks > minmarks && this.age > minplacementage){
                console.log(this.name + " is ready for placements")
            } else {
                    console.log(this.name + " is not ready for placements")
            }
        }
    }
}
    const sumit=new student('sumit',25,80);
    const abhi=new student('abhi',17,30)
    sumit.setplacementage(18)(30)
    abhi.setplacementage(18)(30)
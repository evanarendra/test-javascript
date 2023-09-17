// create object
var student = {
    name :  "Evans",
    age  : 26,
    gpa : [2.6, 2.9, 3.4],
    address : {
        resident : "Timoho",
        city : "Yogyakarta",
        province : "D.I.Y"
    }   
};

var student2 = {
    name :  "John",
    age  : 22,
    gpa : [2.5, 3.9, 3.4],
    address : {
        resident : "Wirobrajan",
        city : "Yogyakarta",
        province : "D.I.Y"
    }   
};

// Declaration
function createStudentObject(name, number, email, major){
    var student = {};
    student.name = name;
    student.number = number;
    student.email = email;
    student.major = major;
    return student;
}

var student3 = createStudentObject('Paul', '12340', 'paul@gmail.com','IT');

// Constructor
function Students(name, number, email, major){
    this.name = name;
    this.number = number;
    this.email = email;
    this.major = major;
}

var student4 = new Students('Stones', '42340', 'stones@gmail.com','Business');
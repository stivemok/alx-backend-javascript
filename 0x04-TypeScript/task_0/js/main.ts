interface Student {

    firstname: string,
    lastname: string,
    age: number,
    location: string
}

function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

const student1 = createStudent({ firstname: 'Stive', lastname: "Mok", age: 20, location: "Addis Ababa"})
const student2 = createStudent({ firstname: 'Estifanos', lastname: "Zerihun", age: 30, location: "Dire Dawa"})

const studentsList = [ student1, student2 ];

const table = document.createElement("table");
const trow = document.createElement("tr");
const trow1 = document.createElement("tr");
const tdata = document.createElement("td");
const tdata1 = document.createElement("td");
const tdata2 = document.createElement("td");
const tdata3 = document.createElement("td");

tdata.innerHTML = ;
tdata1.innerHTML = ;

trow.appendChild(tdata);
trow.appendChild(tdata1);

table.appendChild(trow);

tdata2.innerHTML = ;
tdata3.innerHTML = ;

trow1.appendChild(tdata2);
trow1.appendChild(tdata3);

table.appendChild(trow1);
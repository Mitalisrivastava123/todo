let array1 = [];
var m1;
function add(id) {
    var newone = document.getElementById("new-task").value;
    var obj = {
        newone: newone,
        com: "false"
    };
    array1.push(obj);
    display();
}
function edit(id) {

    m1 = id;
    document.getElementById("new-task").value = array1[m1].newone;
    document.getElementById("btn1").style.display = "none";

}
function update() {
    array1[m1].newone = document.getElementById("new-task").value;
    console.log(array1[m1].newone);
    document.getElementById("btn1").style.display = "inline";
    display();
}
function display() {

    var string1 = "";
    var stringnew = "";
    for (let x = 0; x < array1.length; x++) {
        if (array1[x].com == 'false') {
            string1 += "<li><input type='checkbox'  onchange='function1(this)' value='" + array1[x] + "'><label>" + array1[x].newone + "</label><button class='edit' onclick='edit(" + x + ")' id=" + x + ">Edit</button></td><td><button class='delete' onclick='deleteon(" + x + ")' id=" + x + ">Delete</button></li>";
        }
        else {
            stringnew += "<li><input type='checkbox' checked onchange='function2(this)' value='" + array1[x] + "'><label>" + array1[x].newone + "</label><button class='edit' onclick='edit(" + x + ")' id=" + x + ">Edit</button></td><td><button class='delete' onclick='deleteon(" + x + ")' id=" + x + ">Delete</button></li>";
        }
    }
    document.getElementById("incomplete-tasks").innerHTML = string1;
    document.getElementById("completed-tasks").innerHTML = stringnew;
}
function deleteon(id) {
    array1.splice(id, 1);
    display();
}
function function1() {

    document.querySelectorAll("#incomplete-tasks input:checked").forEach(element => {
        array1[element.nextSibling.nextSibling.id].com = "true";
        var string2 = "";
        for (let x = 0; x < array1.length; x++) {
            string2 += "<li><input type='checkbox' checked onchange='function1(this)' value='" + array1[x] + "'><label>" + array1[x].newone + "</label><button class='edit' onclick='edit(" + x + ")' id=" + x + ">Edit</button></td><td><button class='delete' onclick='deleteon(" + x + ")' id=" + x + ">Delete</button></li>";
        };
        document.getElementById("completed-tasks").innerHTML = string2;
    });
    display();
}
function function2() {
    document.querySelectorAll("#completed-tasks input:not(:checked)").forEach(element => {
        array1[element.nextSibling.nextSibling.id].com = "false";

        var stringnew = "";
        for (let x = 0; x < array1.length; x++) {
            stringnew += "<li><input type='checkbox' checked onchange='function2(this)' value='" + array1[x] + "'><label>" + array1[x].newone + "</label><button class='edit' onclick='edit(" + x + ")' id=" + x + ">Edit</button></td><td><button class='delete' onclick='deleteon(" + x + ")' id=" + x + ">Delete</button></li>";
        };
        document.getElementById("incomplete-tasks").innerHTML = stringnew;
    });
    display();
}




















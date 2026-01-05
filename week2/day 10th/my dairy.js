

//   LOGIN CREDENTIALS
//   (acts like a file)

var savedUser = "admin";
var savedPass = "1234";


//   OPERATION COUNTER

var operations = 0;


//   LOGIN FUNCTION

function login() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;

    if (u == savedUser && p == savedPass) {
        alert("Login Successful");

        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("menuDiv").style.display = "block";
    } else {
        alert("Invalid Username or Password");
    }
}


//   SIMPLE ENCRYPTION

function encrypt(text) {
    return btoa(text);   // convert to encoded form
}

function decrypt(text) {
    return atob(text);   // convert back to original
}


//   1. ENTER NEW NOTE

function addNote() {
    operations++;

    var date = prompt("Enter date (YYYY-MM-DD):");
    var note = prompt("Enter diary note:");

    // get existing diary data
    var diary = localStorage.getItem("diary");

    if (diary == null) {
        diary = {};
    } else {
        diary = JSON.parse(diary);
    }

    // check if note exists
    if (diary[date]) {
        var choice = confirm("Note already exists. Do you want to update?");
        if (choice == false) {
            return;
        }
    }

    // save encrypted note
    diary[date] = encrypt(note);
    localStorage.setItem("diary", JSON.stringify(diary));

    alert("Diary note saved");
    checkLogout();
}


//   2. UPDATE NOTE

function updateNote() {
    operations++;

    var date = prompt("Enter date to update:");
    var pass = prompt("Enter password again:");

    if (pass != savedPass) {
        alert("Wrong password");
        return;
    }

    var diary = localStorage.getItem("diary");

    if (diary == null) {
        alert("No diary notes available");
        return;
    }

    diary = JSON.parse(diary);

    if (!diary[date]) {
        alert("No note found for this date");
        return;
    }

    var oldNote = decrypt(diary[date]);
    alert("Existing Note:\n" + oldNote);

    var newNote = prompt("Update note:", oldNote);

    diary[date] = encrypt(newNote);
    localStorage.setItem("diary", JSON.stringify(diary));

    alert("Note updated successfully");
    checkLogout();
}


//   3. SEARCH NOTE

function searchNote() {
    operations++;

    var date = prompt("Enter date to search:");

    var diary = localStorage.getItem("diary");

    if (diary == null) {
        alert("No diary notes found");
        return;
    }

    diary = JSON.parse(diary);

    if (diary[date]) {
        alert("Diary Note:\n" + decrypt(diary[date]));
    } else {
        alert("No note found for this date");
    }

    checkLogout();
}


//   4. DISPLAY NOTES
//   (DATE RANGE)

function rangeNotes() {
    operations++;

    var fromDate = prompt("Enter FROM date (YYYY-MM-DD):");
    var toDate = prompt("Enter TO date (YYYY-MM-DD):");

    var diary = localStorage.getItem("diary");

    if (diary == null) {
        alert("No diary notes found");
        return;
    }

    diary = JSON.parse(diary);

    var start = new Date(fromDate);
    var end = new Date(toDate);

    while (start <= end) {
        var key = start.toISOString().split("T")[0];

        if (diary[key]) {
            alert(
                key + " (" + start.toDateString() + ")\n" +
                decrypt(diary[key])
            );
        }

        start.setDate(start.getDate() + 1);
    }

    checkLogout();
}
//   AUTO LOGOUT

function checkLogout() {
    if (operations >= 10) {
        alert("Auto logout: 10 operations completed");
        logout();
    }
}

function logout() {
    location.reload();
}

//   LOGOUT ON APP CLOSE

window.onbeforeunload = function () {
    logout();
};

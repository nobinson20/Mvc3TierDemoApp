README.txt

* Program: Student management system
files:
- student_mgt_sys.html
- student_mgt_sys.js
- students.css

* Author: Byeongho Hwang

1. How to run

Choose any possible way to avoid CSOR violation.
This could be done by using a chrome extension, but
I chose running 'npx http-server' on Windows cmd terminal.

After running a local http-server, type in the browser's
address bar the following:

localhost:8080/student_mgt_sys.html

2. What are implemented

(1) Form to add a student
- Input validation is not implemented.
- Adding locations is implemented, but you cannot deleted
already populated input blanks. However, inputs with no text
will not be stored in the local storage.

(2) Search bar
- UI is not pretty, it functions well
- Searching is implemented based on JS regex.
- Whenever the search button is clicked, it will show you
how many records are found matched.

(3) Display records block
- Edit: By clicking edit button, inputs with original text
will be displayed. You can edit here. Input validation is not
implemented.
-Delete: It simply deletes the record from page as well as from
the local storage.
- Show more details: It will show you the 'marks' of each student
which is stored in JSON object. This will be displayed in the
alert message.






  
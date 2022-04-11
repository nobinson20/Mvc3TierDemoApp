
$(document).ready(function () {

    var local_students_data;
    // fetch data using getJson
    $.getJSON("jqueryassignmentdummydata.json", function (data) {

        // Store 'data' in local storage
        // -> On Chrome, this could be found in:
        // F12 -> 'Application' tab -> local storage
        // @local_students_data: List of JSON objects parsed from local storage data
        localStorage.setItem('local_students_data', JSON.stringify(data));
        local_students_data = JSON.parse(localStorage.getItem("local_students_data"));


        // Create an array with 100 JSON objects to show the users,
        // based on local storage data
        var students_100 = [];
        for (let i = 0; i < local_students_data.length; i++) {

            if (i == 100) break;

            students_100.push(local_students_data[i]);
        }

        displayStudents(0, 10, students_100);
    });


    // Make initial table with 10 records
    // + dropdown menu to show 20, 50, 100 records
    // show only firstname, lastname, email, location, phone, address and
    // options to "show more details", "edit", "delete".
    function displayStudents(start, len, jsonList) {

        // remove remaining elements in tbody
        $("#students_table_body").children().remove();

        var student = '';

        var i = start;
        var end = i + len;
        if (end > jsonList.length) {
            end = jsonList.length;
        }
        for (i; i < end; i++) {

            let value = (jsonList[i]);
            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td class="no">' +
                (i) + '</td>';

            student += '<td>' +
                '<button type="button" class="edit" value="Edit">' +
                'Edit' +
                '<button type="button" class="save" value="Save">' +
                'Save' +
                '</button>' +
                '<button type="button" class="delete" value="Delete">' +
                'Delete' +
                '</button>' +
                '<button type="button" class="showDetails" value="Show more details">' +
                'Show more details' +
                '</td>';



            student += '<td class="firstname">' +
                value.firstname + '</td>';

            student += '<td class="lastname">' +
                value.lastname + '</td>';

            student += '<td class="email">' +
                value.email + '</td>';

            student += '<td class="location">' +
                value.location + '</td>';

            student += '<td class="phone">' +
                value.phone + '</td>';

            student += '<td class="add_comm">' +
                value.address.communication + '</td>';

            student += '<td class="add_perm">' +
                value.address.permanent + '</td>';

            student += '<td class="marks_item">' +
                value.marks.english + '</td>';

            student += '<td class="marks_item">' +
                value.marks.science + '</td>';

            student += '<td class="marks_item">' +
                value.marks.computers + '</td>';

            student += '<td class="marks_item">' +
                value.marks.hardware + '</td>';

            student += '</tr>';
        }


        //INSERTING ROWS INTO TABLE 
        $('#students_table_body').append(student);

        // Display none on 'save' and 'hideDetails' buttons
        $('.save').hide();


    };


    // Add functionality to dropdown menu to select
    // number of students

    $("#student_select").change(function () {
        var str_to_display = "";
        $("#student_select option:selected").each(function () {
            str_to_display += $(this).text();
        });

        var int_to_display = parseInt(str_to_display);
        if (isNaN(int_to_display)) {
            int_to_display = 10;
        }

        displayStudents(0, int_to_display, local_students_data);
    });

    // edit button

    $(document).on('click', '.edit', function () {
        $(this).hide();
        $(this).parent().children().closest('.save').css("display", "block");


        // firstname
        var curDom = $(this).parent().parent().children().closest('.firstname');
        var curDomVal = curDom.text();
        curDom.html(' <input value =" ' + curDomVal + '"</input>');

        // lastname
        curDom = $(this).parent().parent().children().closest('.lastname');
        curDomVal = curDom.text();
        curDom.html(' <input value =" ' + curDomVal + '"</input>');

        // email
        curDom = $(this).parent().parent().children().closest('.email');
        curDomVal = curDom.text();
        curDom.html(' <input value =" ' + curDomVal + '"</input>');

        // location
        curDom = $(this).parent().parent().children().closest('.location');
        curDomVal = curDom.text();

        curDom.html(' <input value =" ' + curDomVal
            + '"</input>' +
            '<div>Separated by commas</div>');

        // phone
        curDom = $(this).parent().parent().children().closest('.phone');
        curDomVal = curDom.text();
        curDom.html(' <input value =" ' + curDomVal + '"</input>');

        // add_comm
        curDom = $(this).parent().parent().children().closest('.add_comm');
        curDomVal = curDom.text();
        curDom.html(' <input value =" ' + curDomVal + '"</input>');

        // add_perm
        curDom = $(this).parent().parent().children().closest('.add_perm');
        curDomVal = curDom.text();
        curDom.html(' <input value =" ' + curDomVal + '"</input>');


    });

    // save button
    $(document).on('click', '.save', function () {
        $(this).hide();
        $(this).parent().children().closest('.edit').css("display", "block");


        // firstname
        var curDom = $(this).parent().parent().children().closest('.firstname');
        var curDomInput = curDom.children().closest('input');
        var curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        var idx = $(this).parent().parent().children().closest('.no').text();
        idx = parseInt(idx);

        local_students_data[idx].firstname = curDomVal;

        // lastname
        curDom = $(this).parent().parent().children().closest('.lastname');
        curDomInput = curDom.children().closest('input');
        curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        local_students_data[idx].lastname = curDomVal;




        // email
        curDom = $(this).parent().parent().children().closest('.email');
        curDomInput = curDom.children().closest('input');
        curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        local_students_data[idx].email = curDomVal;

        // location
        curDom = $(this).parent().parent().children().closest('.location');
        curDomInput = curDom.children().closest('input');
        curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        curDomVal = curDomVal.split(',').map(function (item) {
            return item.trim();
        })


        // phone
        curDom = $(this).parent().parent().children().closest('.phone');
        curDomInput = curDom.children().closest('input');
        curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        local_students_data[idx].phone = curDomVal;

        // add_comm
        curDom = $(this).parent().parent().children().closest('.add_comm');
        curDomInput = curDom.children().closest('input');
        curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        local_students_data[idx].address.communication = curDomVal;

        // add_perm
        curDom = $(this).parent().parent().children().closest('.add_perm');
        curDomInput = curDom.children().closest('input');
        curDomVal = curDomInput.val();
        curDom.html(curDomVal);

        local_students_data[idx].address.permanent = curDomVal;
        console.log(local_students_data[idx]);


    });



    // delete button
    $(document).on('click', '.delete', function () {

        var trTarget = $(this).parent().parent();

        // delete from local storage
        var idx = $(this).parent().parent().children().closest('.no').text();
        idx = parseInt(idx);
        local_students_data.splice(idx, 1);
        console.log(local_students_data);

        var str_to_display = ""; // default
        $("select option:selected").each(function () {
            str_to_display = $(this).text();
        });
        var int_to_display = parseInt(str_to_display);

        if (isNaN(int_to_display)) {
            int_to_display = 10;
        }

        // remove from UI and display records based on selected number in dropdown menu
        trTarget.fadeOut(300, function () {
            $(this).remove();
            displayStudents(0, int_to_display, local_students_data);
        });

    });

    // details button
    $(document).on('click', '.showDetails', function () {

        var jq_marks = $(this).parent().parent().find('.marks_item');
        var list_marks = [];

        console.log(jq_marks);

        jq_marks.each(function () {
            list_marks.push($(this).text());
        })

        console.log(list_marks);

        var marks_str = 'Marks:\n';
        marks_str += 'English: ';
        marks_str += list_marks[0];
        marks_str += '\nScience: ';
        marks_str += list_marks[1];
        marks_str += '\nComputers: ';
        marks_str += list_marks[2];
        marks_str += '\nHardware: ';
        marks_str += list_marks[3];

        alert(marks_str);



    });

    var locLen = 1;
    $("#addLocation").click(function () {
        locLen++;

        var locDiv = $("#form-location1").parent().parent();
        var locHtml = locDiv.html();

        locHtml += '<div class="col-md-3 ">' +
            '<label for="form-location' + locLen + '">Location' + locLen + '</label>' +
            '<input type="text" class="form-control" id="form-location' + locLen +
            '" placeholder="Location"></div>';

        locDiv.html(locHtml);
    })

    $('#addForm').on('submit', function (e) {
        e.preventDefault();

        var firstname = $('#form-firstname').val();
        $('#form-firstname').val("");

        var lastname = $('#form-lastname').val();
        $('#form-lastname').val("");

        var email = $('#form-email').val();
        $('#form-email').val("");

        var locArr = [];
        for (let i = 1; i < locLen + 1; i++) {
            let item = $('#form-location' + i).val();

            if (item.replaceAll(/\s/g, '')) {
                locArr.push(item);
            }

            $('#form-location' + i).val("");
        }

        var phone = $('#form-phone').val();
        $('#form-phone').val("");

        var addComm = $('#form-add-comm').val();
        $('#form-add-comm').val("");

        var addPerm = $('#form-add-perm').val();
        $('#form-add-perm').val("");

        var obj = new Object();
        obj.firstname = firstname;
        obj.lastname = lastname;
        obj.email = email;
        obj.location = locArr;
        obj.phone = phone;

        var addr = new Object();
        addr.communication = addComm;
        addr.permanent = addPerm;
        obj.address = addr;

        var marksObj = new Object();
        marksObj.english = "";
        marksObj.science = "";
        marksObj.computers = "";
        marksObj.hardware = "";
        obj.marks = marksObj;


        console.log(obj);
        local_students_data.push(obj);
        console.log(local_students_data[local_students_data.length - 1]);


        alert("New student is succesfully added!");
    });

    /**
     * 
     * Source: https://gist.github.com/donmccurdy/6d073ce2c6f3951312dfa45da14a420f
     * 
     * Creates a RegExp from the given string, converting asterisks to .* expressions,
     * and escaping all other characters.
     */
    function wildcardToRegExp(s) {
        return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
    }

    /**
     * RegExp-escapes all characters in the given string.
     */
    function regExpEscape(s) {
        return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }


    /*
    * Search button implmentation
    */
    var searchBtnClicked = false;
    $('#searchBtn').on('click', function (e) {
        e.preventDefault();
        searchBtnClicked = true;

        var option = "";
        option = $('#search_select').val();
        var token = "";
        token = '*' + $('#searchForm').val() + '*';

        if (option === 'firstname') {

            let searchedArr = [];

            for (let i = 0; i < local_students_data.length; i++) {
                let curObj = local_students_data[i];
                if (wildcardToRegExp(token.toLowerCase()).test(curObj.firstname.toLowerCase())) {
                    searchedArr.push(curObj);
                }
            }

            displayStudents(0, searchedArr.length, searchedArr);

            alert(searchedArr.length + " records are searched!");

        } else if (option === 'lastname') {

            let searchedArr = [];

            for (let i = 0; i < local_students_data.length; i++) {
                let curObj = local_students_data[i];
                if (wildcardToRegExp(token.toLowerCase()).test(curObj.lastname.toLowerCase())) {
                    searchedArr.push(curObj);
                }
            }

            displayStudents(0, searchedArr.length, searchedArr);

            alert(searchedArr.length + " records are searched!");

        } else if (option === 'location') {

            let searchedArr = [];

            for (let i = 0; i < local_students_data.length; i++) {
                let curObj = local_students_data[i];

                for (let j = 0; j < curObj.location.length; j++) {
                    if (wildcardToRegExp(token.toLowerCase()).test(curObj.location[j].toLowerCase())) {
                        searchedArr.push(curObj);
                        break;
                    }
                }

            }

            displayStudents(0, searchedArr.length, searchedArr);

            alert(searchedArr.length + " records are searched!");

        } else if (option === 'phone') {

            let searchedArr = [];

            for (let i = 0; i < local_students_data.length; i++) {
                let curObj = local_students_data[i];
                if (wildcardToRegExp(token.toLowerCase()).test(curObj.phone.toLowerCase())) {
                    searchedArr.push(curObj);
                }
            }

            displayStudents(0, searchedArr.length, searchedArr);

            alert(searchedArr.length + " records are searched!");

        }
    }); // end of search

    /* Implementation of
    * window scroll that detects bottom reached
    */
    var curNum = 10;
    var alreadyBottom = false;
    $(window).scroll(function () {

        if (alreadyBottom) {
            return;
        }

        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var scrolledToBottom = (scrollTop + window.innerHeight) >= scrollHeight;

        if (scrolledToBottom) {


            if (searchBtnClicked) {
                alreadyBottom = true;
                alert('No more records');
            } else {
                curNum += 10;
                if (curNum >= local_students_data.length) {
                    alreadyBottom = true;
                    alert('No more records');
                }

                displayStudents(0, curNum, local_students_data);
            }
        }
    });
});
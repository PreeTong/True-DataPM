var xl = require('excel4node');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "10.4.109.54",
    user: "root",
    password: "qwerty+",
    database: "rsos_db"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM view_pm_general_data WHERE view_pm_general_data.reg_code = 'NOE'", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        //console.log(fields);
    });
});


var wb = new xl.Workbook();
var ws = wb.addWorksheet('Main');
// //เราสามารถสร้างได้หลาย worksheet โดยการใช้คำสั่ง addWorksheet


// ws.cell(1, 1).number(100);
// // หมายถึงใส่ค่าตัวเลข 100 ลงไปที่ cell A1
// ws.cell(1, 2).string('some text');
// //หมายถึงใส่ค่าตัวอักษร some text ลงใน cell B1
// ws.cell(1, 3).formula('A1+A2');
// //หมายถึงใส่สูตร A1+A2 ใน cell C1
// ws.cell(1, 4).bool(true);
// //หมายถึงใส่ค่า boolean true ใน cell D1


// var numStyle = wb.createStyle({
//     font: {
//         color: '#FF0800',
//         size: 12
//     },
//     numberFormat: '$#,##0.00; ($#,##0.00); -'
// });

// ws.cell(1, 5).number(23000).style(numStyle);

// ws.cell(1, 6).string('my big string').style({ font: { size: 25 } });

// ws.cell(1, 7).number(45900).style(numStyle).style({ font: { size: 25 } });

// wb.write('myfirstexcel.xlsx');
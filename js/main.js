function show(){
	$("#table-body").html("");
	var data = studentCollection.find();
	console.log(data);

	for (var i = 0; i < data.length; i++) {
		var student = data[i];
		$("#table-body").append(
			"<tr>" +
				"<td>" + student._id +"</td>" +
				"<td>" + student.name +"</td>" +
			"</tr>"
		);
	}
}
function myFun() {
	$(".tag").remove("");
	var studentName = $("input[name ='studentName']").val();
	var studentAge = $("input[name ='studentAge']").val();
	if (!isNaN(studentName)) {
		$("#name").append(
			"<div class = 'tag'>" +
			"<br>" +
			"<span style = 'color : red'>" +
			"please input the word." +
			"</span>" +
			"</div>"
		);
	}
	if (isNaN(studentAge)||studentAge=="") {
		$("#age").append(
			"<div class = 'tag'>" +
			"<br>" +
			"<span style = 'color : red'>" +
			"please input the nunber." +
			"</span>" +
			"</div>"
		);
	}
	if (isNaN(studentName)&&!isNaN(studentAge)) {
		var newStudent = {
	    name: studentName,
	    age: studentAge
	  };
	  studentCollection.insert(newStudent);
		studentCollection.save(function(){
			studentCollection.load(show);
		});
	}
}
$("#new").on("click",myFun);

var fdb = new ForerunnerDB();
// 創造資料庫
var db = fdb.db("myDB");
// 創造資料表
var studentCollection = db.collection('students');

studentCollection.load(show);

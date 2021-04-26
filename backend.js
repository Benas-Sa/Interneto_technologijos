
function validateNotEmpty() {
  var x = document.forms["forma"]["vardas"].value;
  if (x == "") {
    alert("nepalikite tusciu langeliu");
    return false;
  }
    var numeris = document.forms["forma"]["numeris"].value;
  if (!Number.isInteger(numeris) && numeris <=0 ) {
    alert("Iveskite teigiama skaiciu");
    return false;
  }
  
  var data = document.forms["forma"]["data"].value;
  if(!checkDate(data)){
  alert("neteisinga data")
  return false;
  }
  
}

function checkDate(input) {
  var inputArray = input.split('-');
  
  var yearInput;
  var monthInput;
  var dayInput;
  
  yearInput = inputArray[0];
  monthInput = inputArray[1];
  dayInput = inputArray[2];
  
  if (yearInput != parseInt(yearInput) || monthInput != parseInt(monthInput) || dayInput != parseInt(dayInput))return false;
	
    var year = parseInt(yearInput);
    var month = parseInt(monthInput) - 1; // Sausis - 0
    var day = parseInt(dayInput);
    if (month < 0 || month > 11 || year < 0 || day < 0 || day > 31) return false;
 
    var date = new Date(year, month, day);
    if (date.getDate() !== day) return false;

	return true;
}

$(document).ready(function(){
	$(".formosKlase").change(function() {
		if ($("#vardas").val().length !== 0 || $("#numeris").val().length !== 0 || $("#data").val().length !== 0) {
			$("#istrinti").show();
		} else {
			$("#istrinti").hide();
		}
	})
	.change();
	
	$("#StiliausKeitimas").click(function() {
		$("#antrasParagrafas").css("background-color", "yellow");
	});
	
	$("#TurinioKeitimas").click(function() {
		$("p:first").text("kitoks paragrafas");
	});
	
	$("#TurinioTrynimas").click(function() {
		var elementValue = $("#paragrafoId").val();
		if (elementValue.length !== 0 && $.isNumeric(elementValue)) {
			$("p").eq(elementValue - 1).remove();
		} else {
			alert("Paragrafas su siuo Id neegzistuoja");
		}
	});	
	
	$("#TurinioPridejimas").click(function() {
		var elementValue = $("#TekstoLaukas").val();
		if (elementValue.length !== 0) {
			$("article").prepend("<p>" + elementValue + "</p>");
		} else {
			alert("Irasykite teksta");
		}
	});		
	
	
	$(".postForma").submit(function() {
		var name = document.forms["registracijosForma"]["vardoLaukelis"].value;
		var lastname = document.forms["registracijosForma"]["pavardesLaukelis"].value;
		$.ajax({
		url: "https://jsonblob.com/api/jsonBlob",
		data: JSON.stringify({
		  name: name,
		  lastname: lastname,
		}),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			type: "POST"
		}).then(success, error);
		function success(res, status, xhr) {
			console.log(res);
			GETrequest(xhr.getResponseHeader("Location"));
		}
		function error(errorMsg) {
			console.log(errorMsg);
		}
		return false;

	});
	
	
	function GETrequest(url) {
	  $.ajax({
		url: url,
		method: "GET"
	  }).then(success, error);
		function success(res, status, xhr) {
			console.log(res);
			var row = $(
			  "<tr><td>" +
				res.name +
				"</td><td>" +
				res.lastname +
				"</td></tr> "
			);
			row.appendTo("#atsakymai");
		}
		function error(errorMsg) {
			alert("ivyko klaida su GET");
		}
	}

});



	
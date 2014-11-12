$(document).ready(function(){


	$("#instructionsSp").click(function() {
		$("#instructionsSp").fadeOut("slow");
		$("#instructionsEn").fadeIn("slow");
	});
	
	$("#instructionsEn").click(function() {
		$("#instructionsEn").fadeOut("slow");
		$("#instructionsSp").fadeIn("slow");
	});

	$("#clickMe").click(function(){
		$("html, body").animate({
			scrollTop: $("#menu").offset().top}, 800);

	});

	/* When the landform is clicked, it directs the user to the landform selected */

	$("#lf1").click(function(){
		$("html, body").animate({
			scrollTop: $("#saltos").offset().top}, 1000);
	});

	$("#lf2").click(function(){
		$("html, body").animate({
			scrollTop: $("#montanas").offset().top}, 1000);
	});

	$("#lf3").click(function(){
		$("html, body").animate({
			scrollTop: $("#volcanes").offset().top}, 1000);
	});

	$("#lf4").click(function(){
		$("html, body").animate({
			scrollTop: $("#lagos").offset().top}, 1000);
	});

	$("#lf5").click(function(){
		$("html, body").animate({
			scrollTop: $("#canones").offset().top}, 1000);
	});

	$("#lf6").click(function(){
		$("html, body").animate({
			scrollTop: $("#praderas").offset().top}, 1000);
	});

	$("#lf7").click(function(){
		$("html, body").animate({
			scrollTop: $("#valles").offset().top}, 1000);
	});

	$("#lf8").click(function(){
		$("html, body").animate({
			scrollTop: $("#desiertos").offset().top}, 1000);
	});

	$("#lf9").click(function(){
		$("html, body").animate({
			scrollTop: $("#islas").offset().top}, 1000);
	});


	/* Bar Menu appears when one of the landforms is clicked */

	$(window).scroll(function(){
        
    if($(window).scrollTop() > 1530){
	    $("#topMenu").slideDown();
	}

	if($(window).scrollTop() < 1530){
        $("#topMenu").slideUp();
	}

	});

	/* Bar Menu Functionality */

	$("#menuLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#menu").offset().top}, 1000);
	});

	$("#saltosLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#saltos").offset().top}, 1000);
	});

	$("#montanasLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#montanas").offset().top}, 1000);
	});

	$("#volcanesLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#volcanes").offset().top}, 1000);
	});

	$("#lagosLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#lagos").offset().top}, 1000);
	});

	$("#canonesLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#canones").offset().top}, 1000);
	});

	$("#praderasLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#praderas").offset().top}, 1000);
	});

	$("#vallesLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#valles").offset().top}, 1000);
	});

	$("#desiertosLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#desiertos").offset().top}, 1000);
	});

	$("#islasLink").click(function(){
		$("html, body").animate({
			scrollTop: $("#islas").offset().top}, 1000);
	});

	/* Main Content */

	/* Waterfalls */

	$("#saltosTextoSp").click(function() {
		$("#saltosTextoSp").fadeOut("slow");
		$("#saltosTextoEn").fadeIn("slow");
	});
	
	$("#saltosTextoEn").click(function() {
		$("#saltosTextoEn").fadeOut("slow");
		$("#saltosTextoSp").fadeIn("slow");
	});

	/* Mountains */

	$("#montanasTextoSp").click(function() {
		$("#montanasTextoSp").fadeOut("slow");
		$("#montanasTextoEn").fadeIn("slow");
	});
	
	$("#montanasTextoEn").click(function() {
		$("#montanasTextoEn").fadeOut("slow");
		$("#montanasTextoSp").fadeIn("slow");
	});

	/* Volcanoes */

	$("#volcanesTextoSp").click(function() {
		$("#volcanesTextoSp").fadeOut("slow");
		$("#volcanesTextoEn").fadeIn("slow");
	});
	
	$("#volcanesTextoEn").click(function() {
		$("#volcanesTextoEn").fadeOut("slow");
		$("#volcanesTextoSp").fadeIn("slow");
	});	

	/* Lakes */

	$("#lagosTextoSp").click(function() {
		$("#lagosTextoSp").fadeOut("slow");
		$("#lagosTextoEn").fadeIn("slow");
	});
	
	$("#lagosTextoEn").click(function() {
		$("#lagosTextoEn").fadeOut("slow");
		$("#lagosTextoSp").fadeIn("slow");
	});	

	/* Canyons */

	$("#canonesTextoSp").click(function() {
		$("#canonesTextoSp").fadeOut("slow");
		$("#canonesTextoEn").fadeIn("slow");
	});
	
	$("#canonesTextoEn").click(function() {
		$("#canonesTextoEn").fadeOut("slow");
		$("#canonesTextoSp").fadeIn("slow");
	});	

		/* Prairies */

	$("#praderasTextoSp").click(function() {
		$("#praderasTextoSp").fadeOut("slow");
		$("#praderasTextoEn").fadeIn("slow");
	});
	
	$("#praderasTextoEn").click(function() {
		$("#praderasTextoEn").fadeOut("slow");
		$("#praderasTextoSp").fadeIn("slow");
	});	

		/* Valles */

	$("#vallesTextoSp").click(function() {
		$("#vallesTextoSp").fadeOut("slow");
		$("#vallesTextoEn").fadeIn("slow");
	});
	
	$("#vallesTextoEn").click(function() {
		$("#vallesTextoEn").fadeOut("slow");
		$("#vallesTextoSp").fadeIn("slow");
	});	

		/* Deserts */

	$("#desiertosTextoSp").click(function() {
		$("#desiertosTextoSp").fadeOut("slow");
		$("#desiertosTextoEn").fadeIn("slow");
	});
	
	$("#desiertosTextoEn").click(function() {
		$("#desiertosTextoEn").fadeOut("slow");
		$("#desiertosTextoSp").fadeIn("slow");
	});	

		/* Islas */

	$("#islasTextoSp").click(function() {
		$("#islasTextoSp").fadeOut("slow");
		$("#islasTextoEn").fadeIn("slow");
	});
	
	$("#islasTextoEn").click(function() {
		$("#islasTextoEn").fadeOut("slow");
		$("#islasTextoSp").fadeIn("slow");
	});	



























});
<?php 
	$hostname = "localhost";
	$username = "root";
	$password = "";
	$databasename = "dungminhdongho";

	$conn = mysqli_connect($hostname, $username, $password, $databasename);
	mysqli_query($conn, "SET NAMES 'utf8'");
 ?>
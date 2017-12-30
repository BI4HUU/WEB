<?php
$mysgli = nev mysgli ("localhost", "root", "", "mybase");
	$mysgli->query ("SET NAMES 'utf8'");
	 $mysgli->query ("INSERT INTO  `mybase`. `users`(`login`, `password`, `reg_date`) VALUES ('test_login', 'test_password', '8888888')");
	$mysgli->query (" DELETE FROM `mybase`.`users`WHERE `users`.`id` = 8 ");

	$mysgli->close ();
	
 ?>

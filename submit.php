<?php 

	if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['phone'])) {
		$latter	.= 'name: '.$_POST['name'].'/r/n';
		$latter	.= 'email: '.$_POST['email'].'/r/n';
		$latter	.= 'phone: '.$_POST['phone'].'/r/n';
		mail(to, subject, message)
	}
	 else {}


 ?>
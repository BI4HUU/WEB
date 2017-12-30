<? php
include ""; // підключить файл (якщо нема то вивести остальне)
require ""; // підключить файл (якщо нема то неробе нічого)
require_once ""; // підключить файл 1 раз (якщо нема то неробе нічого)
$name = "Danue"; // переменна
$let = 8;         // переменна
 echo "string";
 print_r(masive); //показать масив
 $let = $let < 0? - $let :$let;
 if (condition) { 	code }   // якщо да то
 if (condition) { 	code } else { code }  //якщо да то якщо ні то
 if ((condition) && (condition)) { 	code } else { code } //оба обязательны
 if ((condition) || (condition)) { 	code } else { code } //хочаб одне
 for ($i=0; $i < 8; $i++) {  code }
 while ($i <= 8) {$i++ code}
 do {$i=0} while ($i <= 8);	
goto label;    label: // після кода "goto label;" виповнить код який після label:
break; // завершает работу цикла (використовується в циклі)
continue; // продовжа роботу цикла не виводячи код цикла (використовується в циклі)
switch (variable) {	case 'value': code	break;	default:code break;}
gettype($let) // Узнать тип переменной
// Массиви
$Array = [1, 'too']; $Array[2] = true;
foreach ($Array as $key => $value) { echo"$key  $value" }; // розбива(перебор) масив
$asoc_masiv = array('name' => 'Ivan') // асоціативний масив
function nameFun(e)  {return echo"e";}
static // не удаляет переменну у function
// OOП
class nameClass {public $publiclet = CP1;private $privatelet = 2;}
$nameObekt = new nameClass();
$nameObekt->publiclet = "newCP1" // CP1 переименовано на newCP1
 ?>

// коментарій        /* коментарій багатострочний*/
var x = 5; // переменна
alert(); /*показать на модальній сторінці*/
confirm('name?');/*показать на модальній сторінці попросить вибрать-да- -ні- */
prompt('name?', 'Vasya'); /*показать на модальній сторінці попросить ввести дані*/

setTimeout(() => {}, 1000);  /* з затримкою */
switch;

while (условие) { code };
do { code } while (условие);
for (var i = 0; i < 10; i++) { code };

onclick="return val()"  function val() {
	$('body').css('background','#f99');};

<input type="text" value="password" onBlur="if (this.value.legth ==0) {this.value = 'password'; this.type = 'text'}" onFocus="if (this.value == 'password') {this.value = ''; this.type = 'password'}"
typeof /* верне  строку типа даних */
/* Масив */
var a = []; /* пустий масив */
a.push("zero"); /* Масив a = ["zero"]*/
delete a[0]; /* Удалить елемент масива  a = []*/
a = [1,2,3,4,5]; b = [6, 7, 8]; /* Масив */
a.join(","); /* Перетворить масив в текст "1,2,3,4,5" */
a.slice(1,3); /* верне фрагмент масива [2,3] с 1 до 3 ячейки */
a.splice (1,3); /* верне масив [2,3], а з самого масива удалить з здвигом */
a.splice (1,0,8); /* Змінить масив [1,2,8,3,4,5] */
a.push("_end") /* Добавить в кінець масива [1,2,8,3,4,5,"_end"] */
a.concat(["_end"]) /* Добавить масив в кінець масива [1,2,8,3,4,5,"_end"] */
a.pop() /* верне масив i Удалить кінець масива [1,2,8,3,4,5,] */
a.unshift("_end") /* Добавить в початок масива ["_end",1,2,8,3,4,5] */
a.shift() /* верне масив i Удалить початок масива [1,2,8,3,4,5,] */
a.indexOf("a") /* поиск с начала верне позицію строкu 1 */
a.lastIndexOf("a") /*a = "abca"; поиск с конца верне позицію строкu 3 */
a.sort
a.reduce
[1,2,8,3,4,5].toString(); /* верне строку '1,2,8,3,4,5' */
[1,2,8,3,4,5].toLocaleString(); /* верне строку '1','2','8','3','4','5' -!X3- */
<!-- var a = ['g','p']; var b = a.splice (0,1); alert(b.join()); var c = a.splice (0,1); alert(c.join()); -->
/* Строки */
a = "abc"; b = "def"; 
a.split(',', 2) /* Перетворить текст в масив , 2 символа ["a","b"] */
a.concat(b)  /* Добавить строку в кінець строкu верне 'abcdef' */
a.indexOf("a") /* поиск с начала верне позицію строкu 1 */
a.lastIndexOf("a") /*a = "abca"; поиск с конца верне позицію строкu 3 */
a.valueOf() /*возвращает значение для объекта*/
a.substring(4) /* c 0 , до 2 символа - верне фрагмент строкu b */
a.substr(-1,2) /* c -1 с конца символа , 2 символа - верне фрагмент строкu ab */
a.slice(0,-1) /* c 0 до -1 с конца символа - верне фрагмент строкu аb */
a.replace("b","x") /* Заменит строку, символ "b" на строку, символ "x"*/  
window.onload = function(){}; /* после полной загрузки сторінки*/
setTimeout(function(){}, 1000); /* виповнить через 1 сек*/
setInterval(function(){}, 1000); /* виповнять через кожну 1 сек*/
id = "id_timestamp" class="class_timestamp" name="name_timestamp";
var a = document.getElementById('timestamp');/* блок з id timestamp*/
document.getElementsByName('name_timestamp');
document.getElementsByTagName("div")[0];
document.getElementsByClassName("class_timestamp");
document.querySelector('.a8')
document.getElements();
document.createElement();
a.firstChild; /* Извлеч дані з блока*/
a.appendChild(дані); /* Записать дані, блок в блок а*/
a.innerHTML          /* Записать дані в блок а*/
a.style.backgroundColor = "red";
a.className = "classname";
a.onclick = function() {console.log("OK")};
a.onmouseover = function() {console.log("OK")};/* наведена мишка*/
for (var key in mas) { alert(key + mas[key]); }; var mas = {"a":1,"b":2}


 function f1 (a) { return b => { return a * b }} console.log(f1(2)(3)) /*  Замикання */

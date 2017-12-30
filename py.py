print("Показать ето в консоль")
name = 8 # переменная
input("1") # Предлагает ввести даные
# Преобразовать тип даных
    int(name) # В число
    str(name) # В строку
    float(name) # В число с точкой
del name # Удалить переменную
name += 80
# Условные операции
ten = 10
if ten == 1:
    print("ok1")
elif ten == 10:
    print("ok10")
else:
    print("ok--")
# Цыклы
i = 0
while i < 10:
    print(i)
    i += 1
for j in "hello":
    print(j)
    continue # прпустить ету итерацию
    break # выйти с цыкла
else: # выполнится если break был но сработал
    print(0)
# Списки (Массивы)
aray = [1, "a", True]
aray2 = [2]
aray.append("append")# добавля в конец масива
aray.extend(aray2)# добавля в конец масива масив
aray.insert(2, aray2)# добавля в 2 место масива масив
aray.remove("a") # Удалить "a" с масива
aray.pop(2) # Удалить 2 елемент с масива
aray.index("append") # вернет индекс значения "append"
aray.sort() # сортирует с меньшего к большему значению
aray.clear() # Очищает список (Массивы)
aray[2:4:1]#Обрезать с 1 елмент до 4 с шагом 1
# Кортежи
korteg = (1, "a", True)
#Словари (асоциативный масив)
slovar + {'klyuch' : 'znachenia', 'klyuch2' : 'znachenia2'}
slovar['klyuch2'] = 'znachenia3'
#Функции
def nameFun(e):
    return e
(lambda e: print(e))(8)
# Исключения (ошибки)
try:
    5/0
except ZeroDivisionError:
    False
else:
    True
finally:
    100%
# робота с файламы
filename = open('test.py', 'rt' encoding='utf-8')
print(filename.read())
filename.write("NewText")
filename.close
#Модули
import math, os
from myModule import fun1
import myModule as mm # myModule.py
# ООП
class nameClass:
    name = "Nastya"
    age = 18
    def __init__(self, name):
        self .name = name
    # def set(self, name):
    #     self .name = name
class nameClass2(nameClass):
    course = 2    
class2 = nameClass("Vika")
# class2.set("Vika")
print(class2.age)
print(class2.name)
#Декоратори
def decorator (func):
    def wrapper ():
        print("Код ДО")
        func()
        print("Код ПОСЛЕ")
    return wrapper
@decorator #
def s ():
    print("Код")
# s = decorator(s)
s()







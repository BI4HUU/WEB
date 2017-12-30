def decorator (func):
    def wrapper ():
        print("Код ДО")
        func()
        print("Код ПОСЛЕ")
    return wrapper
@decorator
def s ():
    print("Код")
# s = decorator(s)
s()

def evenCheck(n):
    if(n % 2==0):
        return True
    else:
        return False

def checkRange(n):
    if(n>=1000 and n <=9999):
        return True
    else:
        return False

def isDivisibleBy4(n):
    if(n % 4==0):
        return True
    else:
        return False
n = int(input("please enter a number"))

if(evenCheck(n) and checkRange(n) and isDivisibleBy4(n)):
       print(n,"it is a special number")
else:
       print(n,"it is a not special number")
       
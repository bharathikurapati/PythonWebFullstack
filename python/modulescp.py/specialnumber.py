from commonlogic import evenCheck, diviSableBy4

def checkForRange(n):
    if n >= 1000 and n<= 9999:
        return True
    else:
        return False
    

n = int(input("Please enter a number  "))

if(evenCheck(n) and diviSableBy4(n) and checkForRange(n)):
    print("Yeaahh! its a special  number")
else:
    print("Nop, its not a special number")
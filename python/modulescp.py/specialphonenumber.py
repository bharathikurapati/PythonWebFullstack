
from commonlogic import evenCheck, diviSableBy4

def checkFor10Digits(n):
    if len(str(n)) == 10:
        return True
    else:
        return False
    

n = int(input("Please enter a phone number  "))

if(evenCheck(n) and diviSableBy4(n) and checkFor10Digits(n)):
    print("Yeaahh! its a special phone number")
else:
    print("Nop, its not a special number")
class Employee:
    companyName ="amazon india pvt ltd"
    def __init__(self,name,registrationNumber,numberofEmployees,salary,address,headofQuarters,ceo):
        self.name = name
        self.registrationNumber = registrationNumber
        self.numberofEmployees = numberofEmployees
        self.salary = salary
        self.address = address
        self.headofQuarters = headofQuarters
        self.ceo = ceo
    def EmployeeDetails(self):
        print("Employee Details===>",self.name,self.registrationNumber,self.numberofEmployees,self.salary,self.address,self.headofQuarters,self.ceo)
emp1 = Employee ("rajiv","ka6677",20987,387976,"hyderabad",250,"jassyassay")
emp2 = Employee ("sunil","ts99889",88999,965324,"andrapradesh",3500,"jassyassay")
print(Employee.companyName)
print(emp1.companyName)
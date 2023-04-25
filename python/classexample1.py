class Employee:
    companyName="Google India Pvt Ltd"
    def __init__(self,name,employeeId,salary):
        self.name = name
        self.employeeId = employeeId
        self.salary = salary
    def getEmployeeDetails(self):
        print("Employee Details ===>", self.name, self.employeeId, self.salary)
emp1 = Employee("raji",99887,900000)
emp2 = Employee("bharathi",88888,7000000)
print(emp2.getEmployeeDetails())
print(emp1.getEmployeeDetails())            

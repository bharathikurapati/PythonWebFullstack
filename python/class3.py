class Employee:
    companyName = "flipcard India pvt ltd"
    def __init__(self,name,employeeId,salary):
        self.name = name
        self.employeeId = employeeId
        self.salary = salary

    def getEmployeesalary(self):
        return "Employee Salary:"+str(self.salary)
emp1 = Employee("Ravi Kumar",8899,500000)
emp2 = Employee("Rajesh",4433,200000)        
print(emp1.CompanyName,Employee.companyName,emp1.getEmployeeSalary(),emp2.getEmployeesalary)
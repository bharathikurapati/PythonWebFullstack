class Employee:
   companyName = "union bank of india"
   def __init__(self,name,age,employeeId):
    self.name=name
    self.age=age
    self.employeeId=employeeId
   def getEmployeeDetails(self):
     return "Name : "+self.name+",EmployeeId:"+str(self.employeeId)+",CompanyName:"+Employee.companyName
class HomeLoan(Employee):
    GeneralManager='ashok'
    def __init__(self,name,age,employeeId):
        super().__init__(name,age,employeeId)
class EducationLoan(Employee):
    GeneralManager='sivakumar'
    def __init__(self,name,age,employeeId):
        super().__init__(name,age,employeeId) 
    def getMyWork(self):
        return "=> I work as opening account"
class PersonalLoan(Employee):
    GeneralManager='ravikumar'
    def __init__(self,name,age,employeeId):
        super().__init__(name,age,employeeId)
    def checkCompanyPerformance(self):
        return"Done"
hl1=HomeLoan("prakash",38,45000)
eEl1=EducationLoan("rajesh",27,50000)
Pl1=PersonalLoan("mahesh",43,65000)
print(hl1.getEmployeeDetails())
print(eEl1.getEmployeeDetails(),eEl1.getMyWork())
print(Pl1.getEmployeeDetails(),Pl1.checkCompanyPerformance())

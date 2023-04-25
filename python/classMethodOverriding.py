class Employee:
    companyName="union Bank of India"
    def __init__(self,name,age,employeeId):
      self.name=name
      self.age=age
      self.employeeId=employeeId
    def getEmployeeDetails(self):  
        return"Name:"+self.name+",EmployeeId:"+str(self.employeeId)+",companyName:"+Employee.companyName 
class HomeLoan(Employee):
    GeneralManager='prakash'   
    def getEmployeeDetails(self):
        return"Name:"+self.name+",EmployeeId:"+str(self.employeeId)+",companyName:"+Employee.companyName+"and I report to"+HomeLoan.GeneralManager
hl1=HomeLoan("prakash",45,35000)
print(hl1.getEmployeeDetails)        


   
class Vehicle:
    companyName = "Volvo International Ltd"
    def _init_(self, name, numberTyres, model, color):
        self.name = name
        self.numberTyres = numberTyres
        self.model = model
        self.color = color
        
    def getMyVehicleData(self):
        print(" Name ",self.name,"numr of Tyres",self.numberTyres,"model", self.model, "color", self.color)
    
class Truck(Vehicle):
    def _init_(self, name, numberTyres, model, color, transportCapacity):
        super()._init_(name, numberTyres, model, color)
        self.transportCapacity = transportCapacity
    
            
    def getTransportCapacity(self):
        print("Transporport capacity", self.transportCapacity)
        
class Car(Vehicle):
    def _init_(self, name, numberTyres, model, color, seatingCapcity):
        super()._init_(name, numberTyres, model, color)
        self.seatingCapcity = seatingCapcity
        
    def getSeatingCapacity(self):
        print("Seating capacity", self.seatingCapcity)

car1 = Car("car",4,"Volvo GTX", "Silver",5)
truck1 = Truck("Truck 14555", 12,"JKhsjkhjh", "White", "10 tonnes")


car1.getMyVehicleData()
car1.getSeatingCapacity()
truck1.getMyVehicleData()
truck1.getSeatingCapacity()
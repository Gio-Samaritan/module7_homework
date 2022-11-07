/* Модуль 7.4 Задание 5*/


class PowerOfElectricalAppliances{//родительский класс
    constructor(appliance, power, brend){
      this.appliance = appliance
      this.power = power,
      this.brend = brend,
      this.connected = false
    }
    isConnected(){//метод включающий прибор в сеть
    console.log(this.appliance + " is connected");
    this.connected = true
    }
    isNotConnected(){//метод выключающий прибор из сети
    console.log(this.appliance + " is not connected");
    this.connected = false
    }
  }
  
  class Lamp extends PowerOfElectricalAppliances{//делаем PowerOfElectricalAppliances родителем
    constructor(appliance, power, brend, lampBrightness){
      super(appliance, power, brend),
      this.lampBrightness = lampBrightness,
      this.connected = false
    }
  }
  class Pc extends PowerOfElectricalAppliances{//делаем PowerOfElectricalAppliances родителем
    constructor(appliance, power, brend, cpu){
      super(appliance, power, brend),
      this.cpu = cpu,
      this.connected = false
    }
  }  
  const HomeLamp = new Lamp("Лампа", "50 ват", "No name(Made in China)", "600 люменов");  
  const HomePc = new Pc("Компьютер", "300 ват", "Apple", "M1");
  
  HomeLamp.isConnected();
  console.log(HomeLamp);
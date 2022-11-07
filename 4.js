/* Модуль 7.4 Задание 4*/

function PowerOfElectricalAppliances(appliance, power, brend){// функция которую после впишем в прототип лампы и пк
    this.appliance = appliance
    this.power = power,
    this.brend = brend,
    this.connected = false
  }
  PowerOfElectricalAppliances.prototype.isConnected = function(){ // функция включения прибора в сеть
    console.log(this.appliance + " is connected");
    this.connected = true
  }
  PowerOfElectricalAppliances.prototype.isNotConnected = function(){// функция выключения прибора из сети
    console.log(this.appliance + " is not connected");
    this.connected = false
  }
  function Lamp(appliance, power, brend, lampBrightness){
    this.appliance = appliance
    this.power = power,
    this.brend = brend,
    this.lampBrightness = lampBrightness,
    this.connected = false
  }
  Lamp.prototype = new PowerOfElectricalAppliances();//вписываем PowerOfElectricalAppliances в прототип этого элемента
  
  function Pc(appliance, power, brend, cpu){
    this.appliance = appliance
    this.power = power,
    this.brend = brend,
    this.cpu = cpu,
    this.connected = false
  }
  Pc.prototype = new PowerOfElectricalAppliances();//вписываем PowerOfElectricalAppliances в прототип этого элемента
  
  const HomeLamp = new Lamp("Лампа", "50 ват", "No name(Made in China)", "600 люменов");
  
  const HomePc = new Pc("Компьютер", "300 ват", "Apple", "M1");
  
  console.log(HomeLamp);
  
  console.log(HomePc);
  
  HomePc.isConnected();
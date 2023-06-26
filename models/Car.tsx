

    enum TypesCar {
        "Грузовой",
        "Пассажирский",
        "Спецтранспорт",
      }
      type Driver = {
        Name: string;
        PhoneNumber: string;
        WhatsApp: string;
        Location: string;
      };
      interface Car{
        id: number;
        carName: string;
        typeCar?: TypesCar;
        Driver?: Driver;
      };
    
      export default Car;


  
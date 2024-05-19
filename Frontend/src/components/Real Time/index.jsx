import React, { useEffect, useState } from 'react';

const RealTimeClock = () => {
  const [dateTime, setDateTime] = useState({
    date: '',
    time: ''
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth())
      const Meses = [
        "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Diciembre","Noviembre",
      ]

      const hours = now.getHours();
      var Hora = ""
    
        if (hours >= 20 || hours < 6 ){
            Hora = "Noche"
        }if (hours >= 6 && hours < 10){
            Hora = "Mañana"
        }if (hours >= 10 && hours < 14){
            Hora = "Mediodia"
        }if (hours >= 14 && hours <  20){
            Hora = "Tarde"
        }
        

    

      const formattedDate = `${Meses[month]}, ${day}`;
      const formattedTime = `${Hora}`;

      setDateTime({ date: formattedDate, time: formattedTime });
    };

    const intervalId = setInterval(updateClock, 3600000);

    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    {dateTime.time} <br/> {dateTime.date}  
    </>
  );
};

export default RealTimeClock;

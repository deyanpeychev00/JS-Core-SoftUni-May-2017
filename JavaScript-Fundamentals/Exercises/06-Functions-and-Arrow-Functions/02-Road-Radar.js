/**
 * Created by Deyan Peychev on 27-May-17.
 */
function solve([speed, area]) {

    let getLimit = area => {
      switch (area){
          case 'motorway': return 130;
          case 'interstate': return 90;
          case 'city': return 50;
          case 'residential': return 20;
      }
    };

    let infraction = (driverSpeed, limit) => {
      overSpeed = driverSpeed - limit;
      if (overSpeed<=0){
          return false;
      }else{
          if (overSpeed <= 20){
              return 'speeding';
          }else if (overSpeed <=40){
              return 'excessive speeding';
          }else{
              return 'reckless driving';
          }
      }
    };

    speed = Number(speed);

    if(infraction(speed, getLimit(area))){
        console.log(infraction(speed, getLimit(area)));
    }
}
/*
solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);
*/




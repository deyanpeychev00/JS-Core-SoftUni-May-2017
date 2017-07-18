/**
 * Created by Deyan Peychev on 18-Jul-17.
 */
let returnClass = (function () {
    let id = 0;
    class Record{
        constructor( temperature, humidity, pressure, windSpeed){
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.weather = 'Not stormy';
        }

        toString(){
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                this.weather = 'Stormy';
            }
            return `Reading ID: ${this.id}` + '\n' +
                    `Temperature: ${this.temperature}*C` + '\n' +
                    `Relative Humidity: ${this.humidity}%` + '\n' +
                    `Pressure: ${this.pressure}hpa` + '\n' +
                    `Wind Speed: ${this.windSpeed}m/s` + '\n' +
                    `Weather: ${this.weather}`;
        }
    }
    return Record;
})();

let record1 = new returnClass(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new returnClass(10, 40, 680, 30);
console.log(record2.toString());
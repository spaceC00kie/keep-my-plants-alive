# Keep My Plants Alive!

## About

<img src="readme-assets/PlantsSensor.jpg" width="50%">

This is a full-stack system to monitor soil moisture levels in houseplants. An express api takes in data from moisture sensors and a react app shows the output from the api. I have both running on a raspberry pi.

<img src="readme-assets/PiSensor.jpg" width="50%">

You can put the sensors in water or soil for data. When the react app doesn't receive any data it will show the message "Failed to Connect!" in a banner above the gauges and the gauges will read 50%. Otherwise, there will be no error message and the gauges will show the moisture level from each sensor.

<img src="readme-assets/Gauges.png" width="50%">

<sub><sup> Thank you for checking out my project :) </sup></sub>

<details>
   <summary>
     Credits
  </summary>
  
###### Thanks to [Martin36](https://github.com/Martin36) for the [react component](https://github.com/Martin36/react-gauge-chart) that helped me create this app.
</details>

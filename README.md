# Keep My Plants Alive!

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## About

<img src="readme-assets/PlantsSensor.jpg" width="50%">

Keep My Plants Alive is a comprehensive system designed to help you maintain the health and hydration of your houseplants. It leverages the power of moisture sensors, an Express API, and a React app, all running on a Raspberry Pi.

<img src="readme-assets/PiSensor.jpg" width="50%">

The moisture sensors can be placed in the soil or water of your plants, and they transmit data to the Express API. This data is then visualized on user-friendly gauges in the React app.

<img src="readme-assets/Flow.png" width="50%">

With Keep My Plants Alive, you can ensure your plants are neither over-watered nor under-watered!

<img src="readme-assets/Gauges.png" width="50%">

## Usage

To use Keep My Plants Alive, follow these steps:

1. Clone or Download the Repository: Use the "git clone" command or download the zip file of this repository to your local system.
2. Install Dependencies: Navigate to the project directory and run "npm install" to install all the necessary dependencies mentioned in the package.json file.
3. Set Up the Hardware: Connect the moisture sensors to your Raspberry Pi. Make sure the connections are secure and correct.
4. Run the Application: Start the Express API and the React app. You can do this by running "npm start" in the respective directories of the Express API and the React app.

## Troubleshooting

If you run into any issues while using Keep My Plants Alive, consider the following solutions:

- Check the Sensor Connections: Ensure that the moisture sensors are correctly and securely connected to the Raspberry Pi.
- Verify the API and App Status: Ensure that both the Express API and the React app are running without errors.
- Recalibrate the Sensors: If the gauges are not showing accurate readings, you may need to recalibrate the sensors.

## Credits

Keep My Plants Alive was developed by [spaceC00kie](https://github.com/spaceC00kie). Thanks to [Martin36](https://github.com/Martin36) for the [React component](https://github.com/Martin36/react-gauge-chart) that helped make this app possible.

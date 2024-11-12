# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Technologies and Techniques Used

- **React:** Utilized for building the user interface.
- **JavaScript:** Core language for application logic.
- **HTML/CSS:** For structuring and styling the web application.
- **Weather API:** Fetches real-time weather data.
- **Responsive Design:** Ensures the application is usable on various devices and screen sizes.
- **Git:** Version control for tracking changes and collaboration.

[Back End](https://github.com/VSouvv/se_project_express)

## Production URL

The live version of the application is available at:

**Production URL**: `heeps://gcp-demo1.jumpingcrab.com`

## API Configuration

The front end communicates with the back end vis this base API URL:

**API URL**: `https://api.gcp-demo1.jumpingcrab.com/`

To set this in your environment variables, add the following line to your `.env` file in the front end:

plaintext
VITE_API_BASE_URL=https://api.gcp-demo1.jumpingcrab.com

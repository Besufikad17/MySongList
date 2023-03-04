# MySongList

React app that's used to create, get, update and delete song from a list of songs. 

## Technologies used

- [ReactJs](https://reactjs.org/) - Frontend library
-  [Redux](https://react-redux.js.org/) - State management tool
-   [Redux-Saga](https://redux-saga.js.org/) - Tool used to fetch data from API
-   [Emotion-CSS](https://emotion.sh/docs/introduction) - Styling tool 

## Installation

1. Clonning the repo
   
   ```bash
    git clone https://github.com/Besufikad17/MySongList.git
   ```

2. Installing npm packages
   
   ```bash
    cd MySongList && npm install
    ```
3. Connecting to backend
   
   First read usage guide listed in [here](https://github.com/Besufikad17/MySongList-server) to use the backend and [cloudinary guide](https://dev.to/ogwurujohnson/cloudinary-image-upload-the-setup-k3h#:~:text=On%20the%20settings%20page%2C%20click,pre-signing%20the%20upload%20request) to configure the API used for image uploading.
   
   ```bash
   // creaing .env file
   touch .env
   ```
   ```.env
   // storing backend base url, cloudinary cloud name and upload preset  in .env file
   VITE_DATABASE_URL = "BACKEND_URL"
   VITE_CLOUD_NAME = "YOUR_CLOUD_NAME"
   VITE_CLOUDINARY_UPLOAD_PRESET = "YOUR_CLOUDINARY_UPLOAD_PRESET"
   ```
4. Running
    ```bash 
    npm run dev
    ```

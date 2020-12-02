# Bug in webpack-dev-server

How to reproduce

* Run
  ```
  npm install
  ```
  ```
  npm start
  ```
* Open http://localhost:8080
* No webpage is visible, just raw template `index.html`. 
   - http://localhost:8080/package.json is visible
   - http://localhost:8080/index.jsx is visible
* Open http://localhost:8080/webpack-dev-server
* Entries are visible
* Click any of the entry
  - Result
    ```
    Cannot GET /main
    ```


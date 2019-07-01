#### **Architecture:**

The frontend uses the [React](https://reactjs.org/) framework to display the data.
The frontend communicates with an intermediate Java [Spring Boot](https://spring.io/projects/spring-boot)
server, which acts as a proxy for the Riot Games API.

The intermediate server was necessary to hide my API key from the web
browser and overcome CORS issues with the web browser directly accessing the API.


**/react**

Contains the web app for viewing statistics related to champion mastery.

**/server**

Contains the server used to communicate between the web app and the Riot Games API.


#### Deployment:

Currently, the webapp and server must be deployed separately.
This means they must be given their own ports.

Requires Gradle and npm.

For specific details, see the README in each subdirectory.

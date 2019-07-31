[![Build Status](https://travis-ci.com/PatrickUbelhor/LeagueMastery.svg?branch=master)](https://travis-ci.com/PatrickUbelhor/LeagueMastery)

# League Mastery
A web app for League of Legends that gives players statistics
about their mastery points on each champion.

## Architecture:

The frontend uses the [React](https://reactjs.org/) framework to display the data.
The frontend communicates with an intermediate Java [Spring Boot](https://spring.io/projects/spring-boot)
server, which acts as a proxy for the Riot Games API.

The intermediate server was necessary to hide my API key from the web
browser and overcome CORS issues with the web browser directly accessing the API.


**/react**

Contains the web app for viewing statistics related to champion mastery.

**/server**

Contains the server used to communicate between the web app and the Riot Games API.


## Deployment:

Currently, the webapp and server must be deployed separately.
This means they must be given their own ports.

Requires Gradle and npm.

For specific details, see the README in each subdirectory.

# Disclaimer
League Mastery isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
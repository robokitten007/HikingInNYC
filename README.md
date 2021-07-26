# HikingInNYC
## Background
Public recreational space is important for the well-being of city dewellers and should always receive sufficient considertions in the city planning and development process. In this project, I attempt to use publicly available data from NYC OpenData to explore, compare and visulize the current status of hiking trails around the five boroughs of the city of New York. Which borogh is the most city-hiking friendly and which is not? Let's dig in together and find out!

## Functionality & MVs
In this project, users will be able to view relevant data in the form of bar charts with the following attributes:
- the level of difficulty, the total number, and the length of the trails in each of the five boroughs;
- the level of difficulty, the total number, and the length of the trails in each park location;
- the total no. of trails and length of trails accessible/not accessible by wheelchair;
- when viewing info on trails' level of difficulty and length, users will be able to select which child info to review (i.e. the sum/average/max/min of the length, and max/min/median for the level of difficulty)  

In addition, the project will also include 
- a modal pop up About page
- a production README

## Wireframes
![wireframe](https://github.com/robokitten007/HikingInNYC/blob/main/wireframe.png)

## Technologies, Libraries, APIs
The project will be built with HTML, SCSS and Javascirpt. Dynamic rendering of the page will be serviced using plain Javascript and DOM manipulation. No jquery should be used.
This porject also plans to use the following:
- Data source: publicly availuble data from [NYC OpenData](https://opendata.cityofnewyork.us/)
- The `D3.js` library to render interactive data visualization
## Implementation Timeline
- Weekend: Set up project skeleton, including webpack, create Github repo, and submit project proposal
- Monday: Get comfortable with D3 library, write underlying logic for displaying the data, making sure correct data source can be fetched and bonded
- Tuesday: Make sure bar charts can be correctly rendered, including the x/y axis. Make drop down menu/selection button for x/y axis for different subset data rendering.
- Wednesday: Finish main bar charts rendering if haven't already on Tuesday. Add project logo, relevent personal links and About page (modal) to the index page. Style the whole project with consistent theme.
- Thursday: half a day to clean up the code and rewrite production README if applicable.  Deploy the code to GitHub page.
## Bonus Features
- Add pie charts to provide additional insights into the data(e.g. percentage of available hiking trails for each of the five boroughs, percentage of wheelchair accessible trails vs not wheel chair accessible trails)  

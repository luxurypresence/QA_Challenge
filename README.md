# Some things to consider
- The present folder contains the browser drivers in sake of making easier and faster to get the test to run
it would be better to get them as a package since everytime they get old, you have to manually copy them

- I have commited some files that would be local, like enzo_local.json and the drivers for OSX. I have 
done it intentionally to show how I solve the issue of working locally on a different OS than CI.

- For time constraints and the solution I'm using, you won't get a url to a public report. However, if 
you follow the command below it will generate an HTML report of each run

- You can check the runs under "Actions" in the repository fork I've made, you'll also see the HTML report there.


# How to run github code tests

under /ui_tests path:

**pytest --html=[report_name] -s**

-s for verbose output


# QA_Challenge

Project for QA challenge 
<br> Suggested Time: 4 hours 

Suggested Libs and Tools:
- Cypress
- Reporting Tool
- CI/CD - Circle CI or GitHub Actions


## 🎯 UI Automation Test

Open [website](https://www.pokemon.com/us/) and create test script for the following:

Scenario 1 - Navigate to the Pokedex and Search by Name </br>
Scenario 2 - Navigate to the Pokedex and Sort by Highest Number (First) </br>
Scenario 3 - From the Home Page, scroll through the Featured Pokemon Gallery Slider and verify Dewott in its highlighted select state </br>
Scenario 4 - By selecting 'Explore More Pokemon' CTA on the Home Page, find Jiggly Puff in the hover state of the Pokedex </br> 
Scenario 5 - Create a new scenario that you wish to add </br> 

## 🎯 API Automation Test 

Task 1 - Create a scenario and check status code OK </br>
Task 2 - Create a scenario and check status code Not Found </br>
Task 3 - Create a scenario and check data results </br>
Task 4 - Create an scenario that simulate create a new pokemon </br>
Task 5 - Create an scenario that simulate create a login in a API : check if the create was successfull </br>
Task 6 - Create an scenario that simulate edit a login in a API : create a new scenario that check if the access was denied </br>
Task 7 - Create two requests on Pokemon API with two pokemons that you wish to choose, comparer results: 
         Create a scenario where data result is the same (e.g. power of the pokemon)
         Create a scenario where data result is not the same  (e.g. name of the pokemon)

 
## 🎯 Contract Test 
Task 1 - Create a contract test and check if results was ok</br>
Task 2 - Create a contract test and check if results was not ok</br>


## :rotating_light: What should the project consist of? 

- The project should be configurable to CI/CD </br>
- In the final run of all tests, a collective summary of results are found on the Reporting Dashboard </br>


## :rotating_light: Steps for QA

The candidate will need to:
1. Fork the project </br>
2. Commit their updates to their fork </br>
3. Send a PR for this repository (including .yml file) </br>
4. Include link to Public Reporting Tool (Cypress Dashboard preferred)

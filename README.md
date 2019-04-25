# Food Content App
A food nutrition app in which you can grab the nutrient database of the food of choice and use that information to track calories.

## About the App
The purpose of this app is to look for the nutrient content of a selected food by accessing an API's database. By getting the data information of the nutrient content of the selected food, the user can track it for his/her benefits such as knowing how many calories he/she consume or if he/she has a target ratio of carbs to fats to consume, and etc.

There will be a total of 4 pages in this app each with it's own unique components except for the navbar, which will remain constant for each page. In total, there will be 7 components used and I will go over them more in details below when I describe each page.

## API Keys Used
  - **USDA Food Composition Databases:** https://ndb.nal.usda.gov/ndb/doc/index
  
## Wireframe for Page 1
The first page of the wireframe shows the blueprint of how I'm going to structure the home/landing page. It will be composed of 2 components. The first component will be the navbar which includes the logo of the brand and 4 links to different pages. The brand name, which I left it as "BRAND" isn't the actual name, it's a placeholder for when I think of a name. As for the links they will be in that order on the wireframe page. 

The other component of the home page is the intro component. The intro component will show a text of the theme of the webpage application. It is to give the users an idea of what they might expect from this page. Again the texts are just placeholders and will be changed because currently it is not as clear on what this webpage does. Below the text is a button which will take you to a different link. It will take the user to the exact same location as the Food Tracker link on the navbar. 

![page1](https://user-images.githubusercontent.com/45612730/56463726-73807f00-63a7-11e9-8ce2-7970b7b9c072.jpeg)

## Wireframe for Page 2
On this page, there is a description of 2 different pages. Each page has 3 components including the navbar. In the first page, the 2 components excluding the navbar are the Search component and Food Tracker component. In the second page, the 2 components again exxcluding the navbar are the Personal Info component and the Health Profile Component.

In the Search component, there will be an input field and a button. The input field will allow the user to type a food that he/she wants to look for. The button will generate an action that will reveal the nutrient contents onto the table in the Food Tracker component.  

In the Food Tracker component, it shows 6 types of nutrients along with the units and weight of the selected food from the Search Component. There are 2 types of weight of the selected food, one in per 100g and the other is in per ounce. One thing that I did miss is the value, which should've been in the last section. The value represents The amount of energy or kilocalories, protein, carbohydrate, fat, fiber, and sugar the food has based on it's weight. For example: a 182 gram apple has 95 kcal, 0.3 grams of fat, 25 grams of carbohydrate, 0.5 grams of protein, 4.4 grams of fiber, and 19 grams of sugar.

In the Personal Info component, it will contain the user's avatar as well as his/her personal information such as his/her username, name, email, date of birth, and location. Data of the user will be stored within the application of this webpage so the user will always know that they are logging food into their profile. 

In the Health Profile component, the user can check the status of their recorded body composition. It inlcudes a button which will calculate the user's BMI, which is based on his/her height and weight. Other data in which the user can record are their body fat, age, starting weight, current weight, goal weight and measurements. The measurements includes the size of the specified limb or body part, which are the waist-to-hip ratio, thighs, arms, chest, and neck. 

![page2](https://user-images.githubusercontent.com/45612730/56463727-73807f00-63a7-11e9-9145-f775bec6584b.jpeg)

## Wireframe for total
This will show a picture of the two pages together because they are connected and there are some overlapping information. And also visually it is easier to read. 

![total](https://user-images.githubusercontent.com/45612730/56463728-73807f00-63a7-11e9-966c-379ffa2b7afa.jpeg)

## Technologies Used
HTML, CSS, JavaScript, React, API, and promises

## Update
I've made several changes for this web application. One is that the food tracker only tracks 4 types of nutrients, which are energy, protein, carbs, and fats. And it only accounts for the weight of the food that's stored in the database and not by per ounce and per 100 grams. The data table also accounts for the amount of protein, carbs, and fats as well as its conversion to energy. 

In the health profile account, there is no measurement data or a button to calculate BMI.

What I added to the web application is a login page. The login page will not let the user view the profile page if he/she does not enter the correct credentials. 

## Deployment
This app is available at: https://food-database-app.herokuapp.com
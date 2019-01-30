# Pig Dice

#### A web app that allows two users to input their names then click a button that generates numbers and adds them to player scores. 1/30/2019

#### By **Maddy Haldeman and Jasmine Lee**

## Description

A web app created with object-oriented Javascript and HTML where a user can submit their names and click a submit button that randomly generates a number (1-6) and adds those values to their overall score. The winner is whichever user's score reaches 100 first.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **the users input their names and the program returns those names on two separate "score sheets"** | Input1: Maddy; Input2: Jasmine | Output1: "Maddy's Score"; Output2: "Jasmine's Score" |
| **User 1 clicks "roll" button and the program returns a number between 1 and 6 into an array** | action: click(roll) | Output: 2 |
| **User 1 will continue clicking "roll" until they click "end turn" which will add the sum of the values in the array and add them to their "total points"**| Input: 3, 5, 2 | Output: 10 |
| **If the program returns a 1 on any roll, that user's turn is ended without returning a value**| Input: 1 | Output: 0 |
| **The program applies the last 3 specs for User 2** | Input: 3, 5, 1 | Output: 0 |
| **Program alternates between user turns until one of the user's score card reaches 100, then creates an alert indicating which User won**| Input: "Maddy's Score: 56"; "Jasmine's Score: 100" | Page Alerts: "Congratulations, [Jasmine]! You Won!" |

## Setup/Installation Requirements

1. To run this program clone github repository from:
2. Open index.html in your preferred web browser
3. In order to enable jQuery and Bootstrap, make sure you have a network connection


## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
  * jQuery
* HTML
* Bootstrap
* CSS

## Support and contact details

_Email madelyn.haldeman@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Madelyn Haldeman & Jasmine Lee}_**

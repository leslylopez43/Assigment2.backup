# What the Project is about? 
The website is about TIc Tac Toe game.
Tic Tac Toe is a two-player game (one of them being played by computer or human). In this game, there is a board with 3 x 3 squares.

The two players take turns putting marks on a 3x3 board. The goal of Tic Tac Toe game is to be one of the players to get three same symbols in a row - horizontally, vertically or diagonal on a 3 x 3 grid. The player who first gets 3 of his/her symbols (marks) in a row - vertically, horizontally, or diagonally wins the game.







# Web pages
## Home page
The Home page is the landing page which introduces the website to the visitor and introduces the latest games with links to go to the Current Computer games page
## Current computer games
Current computer games highlights the latest computer.
## Contact us
The contact us page provides the user with a form to capture the name and email of anyone wishing to contact us. The form is linked to a PHP script that will automatically send the request via email and also generates an automated reply. The form uaes the POST method for security so that the user's details are not made visible in the URL
## about Us
This page give information about the website, its aims and contains a donation button for those wishing to give some money if they so wish.
## Forum page
The forum page consists of a chat facility created using Django and puts visitors in touch with each other to discuss computer games
# Design 
The interface consists of Wireframes – 3 wireframes for each page – (one for each of PC size, Ipad, Smartphone ) – The files are included named as follows:
|Web page| File name|
| ------ | ------ |
|   Home page    |   Home.Png        |
|  Current computer games     | Current computer.png          |
|  About Us     |   About us.png        |
| contact us      | Contact us.png          |
|  Forum     |    Forum.png       |

# Resources  
## images
Fortnight gameplay screenshot  - source www.picturebook
## graphics
Logo - create at wix.com using the online logo maker
## video
All the videos are originally created by the owners of the website and there is no copyright associated with these resources.
# Attribution
Bootstrap library used for styling all pages
Forms - Django forms used for their inbuilt validation and security features
Forum - The chat facility uses standand Django code that is supplied with Django
# Testing
## Testing web page  links
|Test Case| Test|Expected Outcome|Actual Outcome|Comment|
| ------ | ------ |------ |------ |------ |
|1|   Home page links  functional test    |  launch home page        |All links launched home page|n/a|
|2|  Current computer games links functional test     | launch Current computer games page          |all links launched Current computer games page||
|3|  About Us links funtional test for all pages    |   launch About us page        |All links launched |n/a|
|4| contact us links functional tests for all pages     | launch Contact us page          |All links launched correctly|n/a|
|5|  Forum page links functional tests for all pages    |    launch Forum page       |All links launched correctly|n/a|
## Responsive testing
|Test Case| Test|Expected Outcome|Actual Outcome|Comment|
| ------ | ------ |------ |------ |------ |
|1|   Smartphone display test    |  website should display with no distortions        |Website displayed with no distortions|n/a|
|2|  Tablet display test. The website will be tested using an Ipad to represent the most common tables     | All webpages should display with no distortion          |All pages displayed correctly|n/a|
|3|  Display test for all pages on a Desktop computer    |   All web pages should display wirth no distortion |All pages displayed correctly|n/a|

## Browser support testing
The following web browsers were used to test the display of the website including the functionality of the contact us form
###### Safari
###### Edge
###### Chrome
###### Opera

## Language validation
Validation of scripting languages were validated using the following:
•       HTML validation using HTML validator (W3C validator) at https://jigsaw.w3.org/css-validator/
•       JavaScript validated at https://esprima.org/demo/validate.html
•       CSS validated at https://jigsaw.w3.org/css-validator/
# Bugs
|Bug|Comment|
| ------ | ------ |
|Home link page pointed to the wrong page on the About us page|This was corrected and recorded in the Test log|
|The Forum link on the Home page did not launch the Forum page|Code was included to correctly lauch to the Forum page. Subsequent test verified correct operation of the link|

# Deployment
Website pages are standard HTML pages and HTML templates. There is use of Django and a Django environment running version 3.2 and Python 2.7 is required

# Where can it be found on GitHub? 
The GitHub link for the project is - GamesForAll.GitHub.Com





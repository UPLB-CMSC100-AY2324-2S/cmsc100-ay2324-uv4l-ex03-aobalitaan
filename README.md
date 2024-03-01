# Exercise 03: JavaScript Basics part 1

Title: Simulate a password validation program in JavaScript
Type: Individual Assessment
Score: (15 points)


**Name:**
AXEL O. BALITAAN</br>
**Section:**
CMSC 100 UV4L</br>
**Student number:**
2022-05153</br>

## Code Description

### A password validation algorithm that checks for the following in order: 
    - Password 1 and Password 2 matching
    - Password is at least 8 characters
    - Password has a number
    - Password has an uppercase character
    - Password has a lowercase character

## Things you did in the code

    - Matching: used a simple equality check (==)
    - At least 8 characters: used length() function
    - Number: iterates through each character and look for a character that is same uppercased and lowercased
    - Uppercase: lowercased the string and checks if it is still the same as before
    - Lowercase: uppercased the string and checks if it is still the same as before


## Commit Log
1. Added match checker
2. Added length and number checking
3. Added checking for uppercase and lowercase
4. Added reverse function
5. Added the object
6. Fixed, puts uppercase checking first before lowercase
7. Fixed, credentials newpassword, use passw1 if password is not valid
7. Edited ReadMe
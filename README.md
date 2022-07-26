# 03 JavaScript: Password Generator

## Description of Application

This application produces a new and secure password with user's criteria in mind. When the 'generate a password' button is clicked, the user is presented with a series of prompts for desired password criteria. The password must be between 8 and 128 characters, no blanks will be accepted, and the user must choose at least one criteria. The password will render on the page. (Passwords have criteria options of numbers, uppercase letters, lowercase letters, and/or special characters). 

## User Functionality
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Live Link and Mock-Up

[Password Generator Live Link](https://isayani.github.io/js-password-generator/)

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./assets/pw-generator.png)

- - -
© 2022 ISayani Creative Services, Confidential and Proprietary. All Rights Reserved.

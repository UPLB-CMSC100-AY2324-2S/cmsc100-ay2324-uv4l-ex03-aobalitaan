function stringEqual(str1, str2)   // Function for checking if string is equal/same
{
    return(str1 == str2);
}

function hasNumber(str) // Checks if string contains a number
{
    for (var i = 0; i < str.length; i++)    // Iterates through every character in the string
    {
        if (str[i].toUpperCase() == str[i].toLowerCase())   // If the character's lower and uppercase version are the same
        {
            return true;    // Contains a number
        }
    }
    return false;
}

function hasLower(str)  // Checks if string has a lowercase character
{
    return (!(str == str.toUpperCase()));   // Makes the whole string uppercase, if it is still the same it means that it doesn't contain a lowercase charac
}

function hasUpper(str)
{
    return (!(str == str.toLowerCase()));   // Makes the whole string lowercase, if it is still the same it means that it doesn't contain an uppercase charac
}

function validatePassword(passw1, passw2)   // Function for validating password
{
    if (!stringEqual(passw1, passw2))   // If strings are not same
    {
        console.log("Passwords don't match!");
        return false;
    }

    if (passw1.length < 8)  // If string is not at least 8 characters
    {
        console.log("Password too short!");
        return false;
    }

    if (!hasNumber(passw1)) // If string doesn't have a number
    {
        console.log("Password should have a number!");
        return false;
    }

    if (!hasLower(passw1))  // If string doesn't have a lowercase character
    {
        console.log("Password should have a lowercase character!");
        return false;
    }

    if (!hasUpper(passw1)) // If string doesn't have an uppercase character
    {
        console.log("Password should have an uppercase character!");
        return false;
    }
    
    //PASSWORD IS VALID
    console.log("Password is valid.")
    return true;
}

function reverseStr(str)
{
    var rev_str = "";   // Initialize empty reverse string

    for (var i = (str.length - 1); i >= 0; i--) // Iterates from last charcter of the string
    {
        rev_str = rev_str + str[i]; // Concatonates each character into the rev_string
    }

    return rev_str;
}

function storePassword(username, passw1, passw2)
{
    // Initializes the credentials object
    var credentials =
    {
        name: username,
        password: passw1,
        newpassword: validatePassword(passw1, passw2) ? reverseStr(passw1) : passw1 // If password is valid, reverses it, else just use password 1
    }

    console.log(credentials);
    return credentials;
}

// validatePassword("helloworld", "hello")     // returns false
// validatePassword("hello", "hello")    	  // returns false
// validatePassword("hello1234", "hello1234")  // returns false
// validatePassword("Hello1234", "Hello1234")  // returns true
// validatePassword("HELLO1234", "HELLO1234")  // returns false

storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "Pass123", "Pass12345") // returns {name: "John", newpassword:"Pass123"}
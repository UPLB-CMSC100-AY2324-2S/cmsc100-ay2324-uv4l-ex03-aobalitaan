function stringEqual(str1, str2)
{
    return(str1 == str2);
}

function hasNumber(str)
{
    for (var i = 0; i < str.length; i++)
    {
        if (str[i].toUpperCase() == str[i].toLowerCase())
        {
            return true;
        }
    }
    return false;
}

function hasLower(str)
{
    return (!(str == str.toUpperCase()));
}

function hasUpper(str)
{
    return (!(str == str.toLowerCase()));
}

function validatePassword(passw1, passw2)
{
    if (!stringEqual(passw1, passw2))
    {
        console.log("Passwords don't match!");
        return false;
    }

    if (passw1.length < 8)
    {
        console.log("Password too short!");
        return false;
    }

    if (!hasNumber(passw1))
    {
        console.log("Password should have a number!");
        return false;
    }

    if (!hasLower(passw1))
    {
        console.log("Password should have a lowercase character!");
        return false;
    }

    if (!hasUpper(passw1))
    {
        console.log("Password should have an uppercase character!");
        return false;
    }
    
    console.log("Password is valid.")
    return true;
}

function reverseStr(str)
{
    var rev_str = "";

    for (var i = (str.length - 1); i >= 0; i--)
    {
        rev_str = rev_str + str[i];
    }

    return rev_str;
}

function storePassword(username, passw1, passw2)
{
    var credentials =
    {
        name: username,
        password: passw1,
        newpassword: validatePassword(passw1, passw2) ? reverseStr(passw1) : passw1
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
function stringEqual(str1, str2)
{
    return(str1 == str2);
}

function hasNumber(str)
{

}

function hasLower(str)
{

}

function hasUpper(str)
{

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

}

function storePassword(username, passw1, passw2)
{

}

// validatePassword("helloworld", "hello")     // returns false
// validatePassword("hello", "hello")    	  // returns false
// validatePassword("hello1234", "hello1234")  // returns false
// validatePassword("Hello1234", "Hello1234")  // returns true
// validatePassword("HELLO1234", "HELLO1234")  // returns false

// storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
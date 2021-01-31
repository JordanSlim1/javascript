// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {}
        for(let i =1; i <= 100; i++){
            if(i % 3 == 0 && (i % 5 != 0)){
                console.log(i,"TEK");
            }
            else if(i % 5 == 0 && (i % 3 != 0)){
                console.log(i,"camp");
            }
            if(((i % 3 == 0)&&(i % 5 ==0))){
                console.log(i,"TEKcamp");
            }
        }
        tekCamp();



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function fahrenheitCelsius(f) {
           let c = (f-32)*(5/9);
           console.log(c.toFixed(2), "degrees C");
        }

        fahrenheitCelsius(40);



        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFahrenheit(c) {
            let f = (c * (9/5)) + 32;
            console.log((f.toFixed(2)), "degrees F");
        }

        celsiusFahrenheit(40)



        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if(age>=18){
                return true;
            }
            return false;
        }

           let v = canVote(19);
           if(v == 1){
               console.log("This person is old enough to vote");
           }
           else
                console.log("This person is too young to vote");




        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        let wordCopy = "";
        let word = "jordan slim";

        function strToArr() {
            wordCopy = word.split("");
            return [...wordCopy];
        }

        console.log(strToArr(wordCopy));
       




        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        let number = "8172018321";
        function reversePhone(number) {
            return [...number].reverse();
        }

        console.log(reversePhone(number));



        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.


        //your code...
        function car(ml,md,yr,cl) {
           let make= ml;
            let model= md;
           let year= yr;
           let color= cl;

            return{
                _make: make,
                _model: model,
                _year: year,
                _color: color
            }
        };

        var myCar = car('Honda','Pilot',2006, 'White');
        console.log(myCar._make, myCar._model,myCar._year,myCar._color);

        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  
        //The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}



        //your code...
      let myArr = [10, 23,3,4];
      let obj ={};

        function isEven(myArr, obj){
                for(let i = 0; i <= myArr.length-1;i++){
                    if(myArr[i] % 2 == 0){
                        obj[myArr[i]] = 'even';
                    }
                        else{
                            obj[myArr[i]] = 'odd';
                        }
                    }
                    return myArr,obj;
                };
               
                isEven(myArr, obj);
                console.log(obj);


        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.
        //your code...
           for(let i =0; i<numbers.length;i+=3){
                console.log(numbers[i]);
            }


        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
        let retrieve = foodArray[foodArray.length-1];
        let school = retrieve.program;


        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
        let i = 0;
        let food =" ";
        function printSent(foodArray,adjectiveArray){
            for(i = 0; i < foodArray.length; i++){
                if(typeof foodArray[i] === 'object'){
                    console.log(foodArray[i].program," is ", adjectiveArray[i]);
                }
                else{
                    let newFood = foodArray[i].substring(foodArray[i].length - 1);
                        if(newFood == 's'){
                             console.log(foodArray[i]," are ", adjectiveArray[i]);
                         } else{
                             console.log(foodArray[i]," is ",adjectiveArray[i]);
                             }
                    }
            }
        }

        printSent(foodArray,adjectiveArray);


        /************************************************************* */
        // Refactor the for() loop to be a while loop.
        //your code...
        i = 0;
        while( i < 10){
       // for(let i=0; i<10; i++) {
            console.log(" the value of i in the loop is : " + i);
            i+=1;
        }

        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  
        //Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. 
        //Each individual operation needs to be a function expression. 
        //run all the functions after defining them, and print the answer to the console.
        //(((30 + 2) * 20)/10)2??
        //your code...
        let myVar = 30;

        let n = function(num){
            return num + 2;
        }
         
        let n1 = function(myVar){
            return 20 * myVar
        }

        let n2 = function(n1){
            return n1/10;
        }

        let res = function(n1){
            return n1 * n1;
        }

            myVar = (n(myVar));
            myVar = (n2(myVar));
            myVar = (res(myVar));
            console.log(myVar);


        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.
        // 0, false
        console.log("Falsy because 0 literally represents false");
        // "zero";, true
        console.log("Truthy because all non empty strings are true");
        //const zero = 20;
        console.log("Truthy because the declaration is correct");
        // null, false
        console.log("False because null is an absence of a value");
        // "0", true
        console.log("Truthy because all non empty strings are true");
        // !"", true
        console.log("Truthy because it is NOT false, making it true");
        // {}, true
        console.log("Truthy because tested through an if statement, and ran back as true");
        // () => {console.log("hello TEKcamp!");, false
        console.log("False because there is a brace matching with a parenthesis");
        // 125, true
        console.log("Truthy because 125 is a number and numbers are coerced as true");
        // undefined, false
        console.log("Falsey because undefined means it isn't assigned");
        // "", false
        console.log("Falsy because empty strings are coerced as false");



        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "friday";

        switch(day){
            case 'monday':
                console.log("we got a long week ahead of us...");
            case 'tuesday':
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
            case 'wednesday':
                console.log("We are smack dab in the middle of the week");
            case 'thursday':
                console.log("Thursday night... the mood is right");
            case 'friday':
                console.log("TGIF.  Friday truly is the best day of the week!")
            break;
            default:
                console.log("It's a weekend!")
        }
/*
        if(day === "monday") {
            console.log("we got a long week ahead of us...");
        } else if(day === "tuesday") {
            console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        } else if (day === "wednesday") {
            console.log("We are smack dab in the middle of the week");
        } else if (day === "thursday") {
            console.log("Thursday night... the mood is right");
        } else if (day === "friday") {
            console.log("TGIF.  Friday truly is the best day of the week!")
        } else {
            console.log("It's a weekend!")
        }
*/


        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        var adult = age > 21 ? 'adult' : 'minor';
        console.log(adult);
      /*  if (age > 21) console.log("adult"); 
        else {
            console.log("minor");
        }
*/
        var teen = age > 13 && age < 19 ? 'teen' : 'not a teenager';
        console.log(teen);
        /*
        if (age > 13 && age < 19) console.log('teen'); else {
            console.log("not a teenager");
        };
*/

        var working = age > 65 ? 'retired' : 'still working...';
        console.log(working);
        /*
        if (age > 65) console.log("retired"); else {
            console.log("still working...");
        }
        */

        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...
        var person = {
            firstName: "Jordan",
            lastName : "Slim",
            gender       : "Female",
            healthy: "yes",
            hobbies: "Games, sports, hanging out",
            profession: "TEKcamp student",
            education: "Bachelor's degree in Comp Sci",
                        learn : function() {
              return (this.firstName + " " + this.lastName + " is learning JavaScript");
            },
                        aboutMe: function(){
                            return("I got a " + this.education + " at UCA");
                        }
          };
console.log(person.learn());
console.log(person.aboutMe());

        /************************************************************* */

        {
            const year = 2021;
            const nums1 = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
        /*    if(year > 2000 && year < 2100) {
                console.log("welcome to the 21st century");
            }
*/
            var cent = (year > 2000) && (year < 2100) ? 'Welcome to the 21st century' : "not 21st century";
            console.log(cent);
            
            // 2.
           /* for(let i=0; i<nums.length; i++) {
                sum += nums[i];
            }*/
           // console.log(sum);

            console.log(nums1.reduce((a, b) => a + b));
            
            
            // 3.
           /* while(i < nums.length) {
                doubled.push(nums[i]*2);
                i++;
            }
            
            console.log(doubled);
        }*/

        doubled.push((nums1.map((a => a*2))));
        console.log(doubled);
    }


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...
        const squareNums = nums.map(n => n*n);
        console.log(squareNums);



        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.
        const lessthanfive = fivePlus.filter(n => n < 5);
        console.log(lessthanfive);
        //your code...



        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...

        let arr = [];
        const arr_length = 20;
        let arr_sum = 0;
        function generate() {
             for( i = 0; i < arr_length; i++){
                arr.push(Math.floor(Math.random()*20)+1);
             }
             for(i=0;i < arr_length; i++){
                 arr_sum += arr[i];
             }
             return arr_sum;
         }

            console.log(generate(arr_sum));


        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        console.log(showNums.map(n => n/2));

        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
     function chessCalc(pieces) {
         let tot = 0;
         for(i = 0; i < pieces.length - 1; i++){
             if(pieces[i] == 'Pawn'){
                 tot = tot + 1;
             }else if(pieces[i] == 'Rook'){
                tot = tot + 5;
            }
             else if(pieces[i] == 'Bishop'){
                tot = tot + 3;
            }else if(pieces[i] == 'Knight'){
                tot = tot + 3;
            }else if(pieces[i] == 'Queen'){
                tot = tot + 9;
            }else if(pieces[i] == 'King'){
                tot = tot + 0;
            }else{
                tot = tot + 0;
            }
        }
         console.log(tot);
     }
     chessCalc(["Rook","Queen","King"])

        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
       let onesBackwards = ones.slice().reverse();
       console.log(onesBackwards);

        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        function g(){
            console.log("Callback function");
        }
        
        function performer(cb) {
            //code goes here
            console.log("Hello");
            cb();
        }

        performer(g);

        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...
        for(i =0; i < devs.length; i++){
        if(devs[i].age > 25){
            console.log(devs[i].name);
        }
    }

        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)
        //your code here...
        function remove(devs){
        for(i =0; i < devs.length; i++){
            if(devs[i].tech_stack == null){
                console.log(devs[i].name);
                devs.splice(i,1);
            }
        }
    }

        /************************** */  
        // Calculate the total age of all the devs
        //your code here...
        
        devsAge = 0;
        for(i =0; i < devs.length ; i++){
            devsAge += devs[i].age;
        }
        console.log(devsAge);


        /************************** */  
        // Find all female devs
        //your code here...
        for(i =0; i < devs.length - 1; i++){
            if((devs[i].gender == 'f') || (devs[i].gender == 'F')){
                console.log(devs[i].name);
            }
        }

        /************************** */  
        // lowercase the genders of every dev
        //your code here...
        for(i =0; i < devs.length - 1; i++){
            devs[i].gender.toLowerCase();
        }


        /************************** */  
        // Sort the developers by name
        //your code here
        devs.sort(function(a,b){
            if(a.name < b.name){
                return -1;
            }
            if(b.name < a.name){
                return 0;;
            }
        });
        console.log(devs)

        /************************** */  
        // Sort the devs by age in descending order
        //your code here
        devs.sort(function(a,b){
            if(a.age > b.age){
                return -1;
            }
            if(b.age > a.age){
                return 0;;
            }
        });
        console.log(devs)

        /************************** */  
        // Sort the male coders by age
        //your code here
        for(i = 0; i < devs.length; i++){
            if(devs[i].gender == 'm' || devs[i].gender == 'M'){
                 devs.sort(function(a,b){
                        if(a.age > b.age){
                             return -1;
                         }
                         if(b.age > a.age){
                             return 0;;
                        }
                 });
                 console.log(devs[i]);
            }
         }

        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here
        for(i =0; i < devs.length; i++){
            if(devs[i].tech_stack != null){
                console.log(devs[i].name + " " + "specializes" + " " + devs[i].tech_stack);
            }
            else{
                console.log(devs[i].name + " " + "is not a developer");
            }
        }

        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];


for(i =0; i < numbersMixed.length - 1; i++){
    if(typeof numbersMixed[i] == 'string'){
            if ((numbersMixed[i] == 'one') || (numbersMixed[i] == 'two') || (numbersMixed[i] == 'three')){
                if(numbersMixed[i] == "one"){
                    numbersMixed[i] = 1;
                }
                else if(numbersMixed[i] == "two"){
                        numbersMixed[i] = 2;
                    }
                else if((numbersMixed[i] == 'three') || (numbersMixed[i] == '3')){
                            numbersMixed[i] = 3;
                        }
                        else if((numbersMixed[i] == "3")){
                            numbersMixed[i] = 3;
                        }
            }else{
                if((numbersMixed[i] == 'tea') || (numbersMixed[i] == 'sk') || (numbersMixed[i] == 'true-dat') || (numbersMixed[i] === 'nice')){
                    numbersMixed.splice(i,1);
                    i = 0;
                }
                }
            }
            else if((typeof numbersMixed[i] == 'object') || (typeof numbersMixed[i] == '[]' )){
                numbersMixed.splice(i,1);
                i = 0;
            }
            else if((numbersMixed[i] == null) || (numbersMixed[i] == true)){
                numbersMixed.splice(i,1);
                i = 0;
            }
        }


        function maxNumber(numbers) {
            //your code...
            let max = 0;
            for(let i = 0; i < numbers.length - 1; i++){ 
                    max = Math.max(...numbers);
            }
            return max;
      };

      console.log("Max is " + maxNumber(numbersMixed));

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            //your code...
            if(desc = true){
               return numbers.sort(function(a, b){return b-a});
            }else{
                numbers.sort(function(a, b){return a-b});
            }
        };

        console.log("Max is " + sortNums(numbersMixed));

        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

        const myAge = 23;
            //your code...
            console.log(`I am ${myAge}`);
            //This is a template literal. It is useful in the sense that you don't have to
            //concatenate but instead us back tick marks with a dollar sign with curly to
            //print out what you want


        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj. 
        // The key is an example data type, and the value is the name of the data type. 
        // An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set('{company : "TEKsystems"}',"object");
        mapObj.set(7, 'number');
        mapObj.set(true, "boolean");
        mapObj.set("Hello", "string");
        mapObj.set("[]]", "array");

        console.log(mapObj.has({company : "TEKsystems"}));
        //This returns false because for a map, the key of the pair has to be in quotes

        //The above console.log() statmeent returns false.  
        //Write another console.log() statement explaining why this line of code prints false. 
        // Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  
        //The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.
        //your code...
        console.log(mapObj.has('{company : "TEKsystems"}'));

        //loop through the mapObj and create a new array of only the data types, 
        //leaving out the example keys of the mapObj.  Use array methods to do this.  
        //\Example output : ['string',number','boolean',array','object']
        let myArray = [];

            for (let [key, value] of mapObj) {
                myArray.push([value]);
                }
                console.log(myArray[0],myArray[1],myArray[2],myArray[3],myArray[4]);

        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  
        //put them in an array, and create a doMath() function that randomly selects one of 
        //the mathematical operations whenever it is invoked.  The doMath() function should 
        //print to the console the mathetmatical function that was carried out.  
        //The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        const operations = [
            function add(x,y) {
                return x + y;
            },
            function sub(x,y){
                return x - y;
             },
             function mult(x,y){
                return x * y;
            },
            function div(x,y){
                return x / y;
            }
        ];

        function doMath(x,y) {
               return (operations[(Math.floor(Math.random()*3)+1)](2,3));
                return arr[x,y];
        };
            console.log(doMath());
        
        //your code...



        /************************************************************* */
        //Create a Higher Order Function called multiple(x) that takes a single parameter. 
        //This HOF should return another function fn(y) that accepts another single parameter y.  
        //This inner function should compute the product of it's parameter with the parameter passed into multiple.  
        //Use this returned "first-class" function to compute triples of any given number.

        //your code...
        const multiple = x => y => x* y;
       console.log(multiple(3)(2));

        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; 
        //declare a variable called message that holds " is how much the stock has increased".  
        //Return an inner function with years (yrs) as a parameter and declare a variable for 
        //growth rate (r) of 5%. Console log your calculation.
        //your code

       const futureValue = function stockGain(basis){
            const msg = " is how much the stock has increased";
             return function(yrs){
                const growth = 0.05;
                return basis * (yrs*growth) + msg;
             }
        }

        // Once finished, declare a variable called futureValue that holds your stockGain function 
        //and enter any amount for the cost basis and a number for the number of years.  
        //Run the function returned by the higher order function to display the future value of 
        //the stock.  
        //your code...
        console.log(futureValue(100)(7));

// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


/*************************************** */
        
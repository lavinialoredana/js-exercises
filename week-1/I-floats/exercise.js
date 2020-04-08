/*var numberOfStudents = 15;
var numberOfMentors = 8;

var sum = (numberOfStudents+ numberOfMentors);
var percentageofstudents = (sum / numberOfMentors) * 100);
var quotient = ( math.round */


    // playing around with Math.round() function and variable: let

    let preciseAge = 30.412437;
    var roughAge = Math.round(preciseAge);
    console.log(roughAge);

    preciseAge = 30.612345;
    var roughAge = Math.round(preciseAge);
    console.log(roughAge);

    // solving Exercise I 
    var numberOfStudents =15;
    var numberOfMentors = 8;

    var sum = numberOfStudents + numberOfMentors;
    console.log(sum);
    
    var percentageOfstudents = numberOfStudents / sum;
    var roughPercentageOfstudents = Math.round(percentageOfstudents);
    console.log("Percentage of students: " + roughPercentageOfstudents + "%");


    var percentageOfmentors = numberOfMentors / sum;
    var roughPercentageOfmentors = Math.round(roughPercentageOfmentors);
    console.log("Percentage of mentors: " + roughPercentageOfmentors + "%");
 
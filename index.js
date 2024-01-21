
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord (array){
let alex = {
    firstName: array[0], 
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
}
return alex;
}

function createEmployeeRecords(rows){
let employeeRecords = [];
 for(let i = 0; i < rows.length; i++){
    employeeRecords[i] = (createEmployeeRecord(rows[i]));
 };
    return employeeRecords;
}

function createTimeInEvent(date){
   let cecil = {
    type: "TimeIn",
    hour: parseInt(date.slice(-4)),
    date: date.slice(0,10)
   }
   this.timeInEvents.push(cecil);
   return this;
}
function createTimeOutEvent(date){
    let cecil = {
     type: "TimeOut",
     hour: parseInt(date.slice(-4)),
     date: date.slice(0,10)
    }
    this.timeOutEvents.push(cecil);
    return this;
}

    function hoursWorkedOnDate(date) {
        const timeIn = this.timeInEvents.find(event => event.date === date);
        const timeOut = this.timeOutEvents.find(event => event.date === date);
    
        return (timeOut.hour - timeIn.hour) / 100;
    }

    function wagesEarnedOnDate(date){

        let hours = hoursWorkedOnDate.call(this, date)
        let wage = this.payPerHour;
        return(hours*wage)
    }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(array, firstName){ 
    let record = array.find(entry => entry.firstName === firstName)
    return record;
}

function calculatePayroll(array){
    
    let payroll = array.reduce((total, num) => total + allWagesFor.call(num), 0)
    return payroll;
}


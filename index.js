/* Your Code Here */
function createEmployeeRecord (array){
    let employee = {
        firstName:array[0],
        familyName:array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee;
}

function createEmployeeRecords(array){
    let records = []
    for (let i of array){
        records.push(createEmployeeRecord(i));
    }

    return records;
}

function createTimeInEvent(date){
    let hr = (date.split(' ')[1])
    let day = (date.split(' ')[0])
    
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hr),
        date: day
    })

    return this;
}

function createTimeOutEvent(date){
    let hr = (date.split(' ')[1])
    let day = (date.split(' ')[0])

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hr),
        date: day
    })

    return this;
}

function hoursWorkedOnDate(date){
    let day = (date.split(' ')[0])

    let startHour, endHour;
    
    let start = this.timeInEvents.find((time)=>{
        if(time.date == day){
            startHour = time.hour/100
            return startHour
        }
    })

    let end = this.timeOutEvents.find((time)=>{
        if(time.date == day){
            endHour = time.hour/100
            return endHour
        }
    })
    
    return parseInt(endHour) - parseInt(startHour);
}


function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let rate = parseInt(this.payPerHour)

    return hours*rate;
}



function allWagesFor(){
    let wage = 0
    let time = this.timeInEvents; //array of date

    for (let day of time){
        wage += wagesEarnedOnDate.call(this, day.date)
    }
    
    return wage;
}


function calculatePayroll (array){
    let payroll = 0
    for(let employee of array){
        payroll += allWagesFor.call(employee)
    }

    return payroll;
}

//TODO: findEmployeeByFirstName
//Todo: Argument(s)
    //srcArray: Array of employee records
    //firstName: String representing a first name held in an employee record
//Todo: Returns
    //Matching record or undefined
//Todo: Behavior
    //Test the firstName field for a match with the firstName argument

function findEmployeeByFirstName(srcArray, firstName){
    for (let record of srcArray){
        if (record.firstName == firstName){
            return record;
        }
    }
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }


/* Your Code Here */
function createEmployeeRecord(array) {
  const employee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employee
}

function createEmployeeRecords(array) {
  return array.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime) {
  let [date, hour] = dateTime.split(' ')

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

function createTimeOutEvent(dateTime) {
  let [date, hour] = dateTime.split(' ')

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(function (e){
    return e.date === date
  })

  let timeOut = this.timeOutEvents.find(function (e){
    return e.date === date
  })

  return (timeOut["hour"] - timeIn["hour"]) / 100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(record) {
  return record.reduce(function(memo, record){
    return memo + allWagesFor.call(record)
  }, 0)
}

function findEmployeeByFirstName(array, firstName){
  return array.find(function(name){
    return name.firstName === firstName
  })
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

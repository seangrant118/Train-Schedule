$(document).ready(function () {

  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyCkQEOUwR30Mm7wbF4AtFPe0yw06Wyo96M",
    authDomain: "class-activities-b5bcc.firebaseapp.com",
    databaseURL: "https://class-activities-b5bcc.firebaseio.com",
    projectId: "class-activities-b5bcc",
    storageBucket: "class-activities-b5bcc.appspot.com",
    messagingSenderId: "197797132539"
  };
  firebase.initializeApp(config);

  // on submit

  $("#submit").on('click', function(event) {

    event.preventDefault();

    var newRow = $("<tr>")

    var trainName = $("#train-name").val();
    var trainDestination = $("#destination").val();
    var firstTrain = $("#first-time").val();
    var trainFrequency = $("#frequency").val();

    $("#table").append(newRow);

    // write train name to page

    var userName = $("<td class='user-name'>");
    userName.text(trainName);
    newRow.append(userName);

    // write destination to page

    var userDestination = $("<td class='user-destination'>");
    userDestination.text(trainDestination);
    newRow.append(userDestination);

    // write frequency to page

    var userFrequency = $("<td class='user-frequency'>");
    userFrequency.text(trainFrequency);
    newRow.append(userFrequency);

    // time conversion

    var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var difference = moment().diff(moment(firstTrainConverted), "minutes");
    var timeRemaining = difference % trainFrequency;
    var timeUntilNextTrain = trainFrequency - timeRemaining;
    var nextTrain = moment().add(timeUntilNextTrain, "minutes");
    console.log(firstTrainConverted);
    console.log(currentTime);
    console.log(difference);
    console.log(timeRemaining);
    console.log(timeUntilNextTrain);
    console.log(nextTrain);

    // write next arrival to page

    var nextArrival = $("<td class='next-arrival'>");
    nextArrival.text(nextTrain);
    newRow.append(nextArrival);

    // write minutes away to page

    var minutesAway = $("<td class='minutes-away'>");
    minutesAway.text(timeUntilNextTrain);
    newRow.append(minutesAway);

  })
})
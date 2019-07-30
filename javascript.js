
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5CEgRqqT_FdEatfYNjgusblJaKoKrM8g",
    authDomain: "fir-traintime-d5e6f.firebaseapp.com",
    databaseURL: "https://fir-traintime-d5e6f.firebaseio.com",
    projectId: "fir-traintime-d5e6f",
    storageBucket: "fir-traintime-d5e6f.appspot.com",
    messagingSenderId: "828994904923",
    appId: "1:828994904923:web:ab5cc7cce92c8ee5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  $("#enter-train").on("click", function(event) {
    // Prevent the default form submit behavior
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-field")
      .val()
      .trim();
    var destination = $("#destination-field")
      .val()
      .trim();
    var firstTrain = $("#first-train-field")
      .val()
      .trim();
    var frequency = $("#frequency-field")
      .val()
      .trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
    };
  
    // Uploads train data to the database
    trainData.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);
  
    // Alert
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-field").val("");
    $("#destination-field").val("");
    $("#first-train-field").val("");
    $("#frequency-field").val("");
  });
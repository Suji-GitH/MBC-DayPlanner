    //moment object
    var moment = moment();

    //Display day, month, date, year
    $("#headerDate").text((moment.format("dddd, MMMM Do YYYY")));

    //start time 9am
    var startTime = 9;
    //Calculate current time to the hour
    var currentTime = moment.hour();
    //duration from start time to current time
    var timeDiff = currentTime - startTime;

    // Clear text Area if past 6pm
      if (timeDiff > 9) {
      localStorage.clear()
    };
    
    // past, present, future color coordination
    $(".form-control").each(function () {

      if (timeDiff === ($(this).data("columns"))) {
        $(this).css("background-color", "palevioletred");
      } else if (($(this).data("columns")) < timeDiff) {
        $(this).css("background-color", "lightgrey");
      } else if (($(this).data("columns")) > timeDiff) {
        $(this).css("background-color", "darkseagreen");
      }

    });

    //Get tasks from local storage
    var getUserTasks = JSON.parse(localStorage.getItem("userTasks"));

    // If local storage is null create time block object
    if (getUserTasks !== null) {

      for (var i=0; i < getUserTasks.timeBlocks.length; i++) {
      $(".form-control").eq(i).html(getUserTasks.timeBlocks[i]);
      
      timeBlockTasks = getUserTasks;

      }
    } else {

      var timeBlockTasks = {
          timeBlocks: new Array(9)
      };

    };

    //Event listener for text area to display Modal
    $(".form-control").on("click", function () {
      $('#myModal').modal('show');

      //get block column value
      var $blockId = $(".form-control").index(this);

      $("#blockId").text($blockId);

    });

    //Save button function 
    $("#saveButton").on("click", function () {

      var $taskInput = $("#taskInput");

      var blockId = $("#blockId").text();

      //Access Array for time block user input
      var timeBlockArr = timeBlockTasks.timeBlocks;

      for (var i = 0; i < timeBlockArr.length; i++) {

        if (i == blockId) {

          timeBlockArr[i] = $taskInput.val().trim();

          break;
        }
      }

      //stringify user input
      var timeBlockTasks_serialized = JSON.stringify(timeBlockTasks);

      //save to local storage
      localStorage.setItem("userTasks", timeBlockTasks_serialized);

      //Display Array value to textarea 
      var indexValue = timeBlockArr[blockId];

      $(".form-control").eq(blockId).html(indexValue);

      // //clear text
      $taskInput.val("");

      $('#myModal').modal('hide');

    });
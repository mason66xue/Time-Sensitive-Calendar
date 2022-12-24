// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// add time display on the header
const timeDisplayEl=$('#time-display');
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

//call back function for displayTime
displayTime();






//use jQuery to set up event listener to save 
const saveBtn = $('.saveBtn')
$('.saveBtn').on('click',function(){
  var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    $('.time-block').each(function() {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
      $(this).children('.description').val(localStorage.getItem(timeBlock));
    })
  
    function readDescriptionFromStorage() {
      var projects = localStorage.getItem('description');
      if (projects) {
        projects = JSON.parse(projects);
      } else {
        projects = [];
      }
      return projects;
    }

readDescriptionFromStorage();


    function saveDescriptionToStorage(projects) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
    
    saveDescriptionToStorage();


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(function () {
    // COLOR CONDITIONAL
    $('.time-block').each(function() {
      var currentTime = parseInt(dayjs().format('HH'));
      var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
  
      if (blockTime > currentTime) {
        $(this).children('.description').addClass("future").removeClass("past present");
        $(this).children('.saveBtn').addClass("future-btn").removeClass("past-btn present-btn");
      } else if (blockTime < currentTime) {
        $(this).children('.description').addClass("past").removeClass("present future");
        $(this).children('.saveBtn').addClass("past-btn").removeClass("present-btn future-btn");
      } else {
        $(this).children('.description').addClass("present").removeClass("past future");
        $(this).children('.saveBtn').addClass("present-btn").removeClass("past-btn future-btn");
      }
    })

  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.




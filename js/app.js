// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search User Event
searchUser.addEventListener('keyup', e => {
  // Get value
  const inputText = e.target.value;
  // Clear Profile
  ui.clearProfile()
  // Start Spinner
  ui.showSpinner();

  if(inputText !== '') {
    // Make HTTP Call
    github.getUser(inputText)
      .then(data => {
        console.log(data.repos)
        if(data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found!', 'alert alert-danger')
          // Hide Spinner
          ui.hideSpinner()

        } else {
          // Show Profile
          setTimeout(() => {
            // Show Profile
            ui.showProfile(data.profile);
            // Show Repos
            ui.showRepos(data.repos);
            // Hide Spinner
            ui.hideSpinner()
          }, 1000)
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile()
    // Hide Spinner
    ui.hideSpinner()
  }
  

})


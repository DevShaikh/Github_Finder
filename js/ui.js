class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show Spinner
  showSpinner() {  
    document.getElementById('loader').className = '';
  }

  // Hide Spinner
  hideSpinner() {
    document.getElementById('loader').className = 'd-none';
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body">
        <div class="row">
          <div class="col-md-3 text-center">
            <img class="img-fluid" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block my-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-dark">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Company:</strong> ${user.company === null ? 'There is no company' : user.company}</li>
              <li class="list-group-item"><strong>Website/Blog:</strong> ${user.blog === '' ? 'There is no Website/Blog' : user.blog}</li>
              <li class="list-group-item"><strong>Email:</strong> ${user.email === null ? 'There is no email' : user.email}</li>
              <li class="list-group-item"><strong>Member Since:</strong> ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading my-3">Latest Repositories</h3>
      <div id="repos"></div>
    `;
  }

  // Show Repositories
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a>
          </div>
          <div class="col-md-6 mx-right">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-dark">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  // Show Alert
  showAlert(msg, alertType) {
    // Clear any remain alert
    this.clearAlert();
    // Create div
    const alertUI = document.createElement('div');
    // Add alert type
    alertUI.className = alertType;
    // Add Message
    alertUI.appendChild(document.createTextNode(msg))
    // Get Parents
    const body = document.getElementById('searchContainer');
    const child = document.getElementById('search');
    // Insert in UI
    body.insertBefore(alertUI, child)

    // Clear alert after 2 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000)
  }

  clearAlert() {
    const currAlert = document.querySelector('.alert')
    if(currAlert) {
      currAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = ''; 
  }
}
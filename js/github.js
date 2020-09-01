class Github {

  constructor() {
    this.client_id = 'df03f4085a2b90f0f6c0';
    this.client_secret = '9f82c7792d34a272c477f2c56a0bfff357739b87';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()
    return {
      profile,
      repos
    }
  }

}
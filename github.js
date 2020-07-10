class Github{
    constructor(){
        this.client_id = 'a2a82f235695f86e328e';
        this.client_secret = '62e36c6ac6193048b942171679806c6345a9ac00';
        this.repos_count = 5;
        this.repos_sort  = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}
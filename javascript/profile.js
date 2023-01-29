class Profile {
    constructor() {
        this.clientID = '',
        this.clientSecret = ''
    }

    async getProfile(userName) {
        const url = `https://jsonplaceholder.typicode.com/users?username=${userName}`;
        const profileResponse = await fetch(url);
        const profile = await profileResponse.json();
        const todoUrl = `https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`;
        const todoResponse = await fetch(todoUrl);
        const todo = await todoResponse.json();
        return {
            profile,
            todo
        }
    }
}
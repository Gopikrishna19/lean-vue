const app = Vue.createApp({
    template: `
      <img :class="gender" :src=picture :alt="firstName + ' ' + lastName"/>
      <h1>{{ firstName }} {{ lastName }}</h1>
      <h3>Email: {{ email }}</h3>
      <button v-on:click="getUser()" :class="gender">Get Random User</button>
    `,
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const {results: [data]} = await res.json();

            console.log(data);

            this.firstName = data.name.first;
            this.lastName = data.name.last;
            this.email = data.email;
            this.gender = data.gender;
            this.picture = data.picture.large;

        },
    },
    data() {
        return {
            firstName: 'Gopi',
            lastName: 'Krishna',
            email: 'gk@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        };
    },
});

app.mount('#app');
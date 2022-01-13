// dichiaro prima su quale container devo visualizzare Vue
new Vue({
    el:"#app",
    data:{
        message:'Hello World',
        url:'https://i.picsum.photos/id/320/300/300.jpg?hmac=Ro-_JH-iriuI8r9qjts__9GxeEuFk3okOh9c3G32eZI',
        nome:''
    },
    methods: {
        saluta: function () {
            alert('Ciao '+this.nome)
        },
    }
})

var app = new Vue({
    el: '#app',
    data: {
        users: [{
            id: 0,
            name: "Vlad",
            mosp: [{ id_mosp: 0, amount: 300 }]
        }],
        buffname: "",
        mosp: //MOneq SPent

            [{
            id: 0,
            name: "Тестовая запись"
        }]
    },
    methods: {
        getMosp: function(id) {
            // console.log(this.mosp)
            let item = this.mosp.find(n => n.id == id)
                // console.log(item)
            return item
        },
        addUser: function(event) {
            if (this.users[0] != null) {
                buffuser = {
                    id: this.users[this.users.length - 1].id + 1,
                    name: this.buffname,
                    mosp: []
                }

            } else {
                buffuser = {
                    id: 0,
                    name: this.buffname,
                    mosp: []
                }
            }

            console.log(buffuser)
            this.users.push(buffuser)
        },
        delUser: function(item) {
            this.users.splice(this.users.indexOf(item), 1)

        },
        getSpentAmount(item) {
            let amount = 0
            item.mosp.forEach(i => {
                amount += i.amount
            });
            return amount
        }
    },
})
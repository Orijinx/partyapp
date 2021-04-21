var app = new Vue({
    el: '#app',
    data: {
        users: [],
        buffname: "",
        buffmosp: {
            id: 0,
            name: ""
        },
        mosp: //MOneq SPent
            [],
        midlleRes: [],
        sMosp: 0,
        sTotalMosp: 0,
        offline: false,
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
        addUMosp: function(item) {


            let user = this.users[this.users.indexOf(item)]
            user.mosp.forEach(el => {
                if (el.id_mosp == this.sMosp) {
                    el.amount = el.amount + parseInt(this.sTotalMosp)
                    user.mosp.push(mosp)
                    return 1
                }
            });

            let mosp = {
                id_mosp: this.sMosp,
                amount: this.sTotalMosp
            }
            user.mosp.push(mosp)
            return 0

        },
        addMosp: function(event) {
            var buffmsp = {}
            if (this.mosp[0] != null) {
                this.buffmosp.id = this.mosp[this.mosp.length - 1].id + 1
                Object.assign(buffmsp, this.buffmosp);

            } else {
                Object.assign(buffmsp, this.buffmosp);
                // buffmsp = this.buffmosp
            }

            console.log(buffmsp)
            this.mosp.push(buffmsp)
        },
        delUser: function(item) {
            this.users.splice(this.users.indexOf(item), 1)

        },
        getSpentAmount(item) {
            let amount = 0
            item.mosp.forEach(i => {
                amount += parseInt(i.amount)
            });
            return amount
        },
        getTotalMosp: function(id) {
            let total = 0
            this.users.forEach(i => {
                i.mosp.forEach(j => {
                    if (j.id_mosp == id) {
                        total += parseInt(j.amount)
                    }
                })
            })
            return total
        },
        Calculate: function() {
            var result = []
            this.midlleRes = []
            this.users.forEach(i => {
                let calc = {
                    user_id: i.id,
                    total: this.getSpentAmount(i)
                }
                result.push(calc)
            })

            result.forEach(i => {
                this.midlleRes.push(i.total / this.users.length)
            })
        },

    },
    // beforeMount() {
    //     console.log("App is mount")
    //     Offline.options = { checks: { xhr: { url: 'http://127.0.0.1:5500/www/index.html' } } };
    //     // Offline.options = { checks: { image: { url: '/img/logo.png' }, active: 'image' } }

    //     // Offline.options = { checks: { image: { url: 'https://www.google.com/' }, active: 'image' } }
    //     console.log(Offline.check())
    //     this.offline = Offline.check().offline
    // },
})
let miapp = new Vue({
    el: `#container`,
    data:{
        schedule:
        [
            {
                name:"Dentista",
                done:false
            },
            {
                name: "Corsa pomeridiana",
                done:true
            },
            {
                name:"Cena con amici",
                done:false
            },
            {
                name: "Riunione di condominio",
                done:false
            }
        ],
        appointment:null
    },
    methods:{
        isdone: function(index){
            if (this.schedule[index].done == true){
                return "done";
            }
            return "";
        },
        check: function(index){
            if (this.schedule[index].done == true){
                this.schedule[index].done = false;
            } else {
                this.schedule[index].done = true;
            } 
        },
        addtoschedule: function(){
            this.schedule.push({
                name:this.appointment,
                done:false
            })
        },
        remove: function(index){
            this.schedule.splice(index,1);
        }
    }
})
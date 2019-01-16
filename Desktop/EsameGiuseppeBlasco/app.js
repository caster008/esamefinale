var vue = new Vue({
    el: '#app',
    data: {
        users:"",
        toDos:[],
        name:"",
        description:"",
        completed:"",
       assignedTo:"",
       toDoId:null,
       error:"non puoi inserire l'utente"
    },
    methods: {
        post:function(){
           
            this.$http.post('http://localhost:3001/post',{
                name:this.name,
                description:this.description,
                completed:this.completed,
                assignedTo:this.assignedTo
            })
            .then(response => { console.log(response)})
            .catch(error => {  })
            
           },
           loadUsers: function() {
            var url = 'http://localhost:3001/getUsers';
            this.$http.get(url).then(response => {
                this.users= response.body;
            })
            .catch(error => {  })
        },
        loadToDos: function() {
            var url = 'http://localhost:3001/getToDo';
            this.$http.get(url).then(response => {
                this.toDos= response.body;
                
            })
            .catch(error => {  })
        },
        deleteToDo: function() {
            var url = 'http://localhost:3001/deleteToDo/'+ this.toDoId;
            this.$http.delete(url).then(response => {
                this.toDos=responde.body
            })
            .catch(error => {  })
        },
        
       
    },
    created: function() {
        this.loadUsers();
        this.loadToDoos();
    },
    watch: {
        /*'code': function (newVal) {
            if(newVal.length === 3){
                this.loadMatchesByCode(newVal);
            }
        }*/
        'currentTeam': function(newVal, oldVal) {
            if (newVal === null && oldVal !== null) {
               
            }
        }
    }
})
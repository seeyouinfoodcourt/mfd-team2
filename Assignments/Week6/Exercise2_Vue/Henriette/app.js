const app = Vue.createApp({
  /* data(){
       return{
           ShowBooks: true,
           title: 'The Golden Compas',
           author: 'Philip Pullman', 
           age: 46, 
           x: 0,
           y: 0
       }
   }, */

   data(){
       return {
           url: 'http://www.google.com',
           ShowBooks: true,
           books: [
               {title: 'dirk gentlys holistic detective agency', author: 'douglas adams', img: 'assets/book1.jpg', isFav: true},
               {title: 'The Long Dark Tea-Time of the Soul', author: 'douglas adams', img: 'assets/book2.jpg', isFav: false},
               {title: 'The Salmon of Doubt', author: 'douglas adams', img: 'assets/book3.jpg', isFav: true}
           ]
       }
   },

   methods:{

    toggleShowBooks(){
        this.ShowBooks = !this.ShowBooks
    },

    toggleFav(book){
        book.isFav = !book.isFav
    }
   },

    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
   }
})

       /* CHANGE BOOK TITLE METHODE
       ChangeTitle(title){
           //console.log("you clicked me")
           //this.title = 'Harry Potter'
           this.title = title
       } */

    /* MOUSE EVENTS METHODS
    handleEvent(e, data){
        console.log(e, e.type)
        if (data){
            console.log(data)
        }
    }, 

    handleMousemove(e){
        this.x = e.offsetX
        this.y = e.offsetY
    }

    */



app.mount('#app')
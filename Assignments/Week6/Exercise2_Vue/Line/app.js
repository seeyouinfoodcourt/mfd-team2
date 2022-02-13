// console.log("hello, vue");

const app = Vue.createApp({
    // data, functions
    // template:  '<h2>I Am the template</h2>'
    data(){
        return {
            url: 'http://youtube.com',
            showBooks: true,
            books: [
                { title: 'Name of the wind', author: 'Patrick rothfuss', img: 'assets/1.jpeg', isFav: true },
                { title: 'The way of kings', author: 'Brandon sanderson', img: 'assets/2.jpeg', isFav: false },
                { title: 'The final empire', author: 'Brandon sanderson', img: 'assets/3.jpeg', isFav: true },
            ]
            // title: 'The final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
    },
    toggleFav(book) {
        book.isFav =!book.isFav
    }
    // handleEvent(e, data) {
    //     console.log(e, e.type)
    //     if (data){
    //         console.log(data)
    //     }
    // },
    // handleMousemove(e) {
    //     this.x = e.offsetX
    //     this.y = e.offsetY
    // }
   },
   computed: {
       fiteredBooks() {
           return this.books.filter((book) => book.isFav)
       }
   }
})

app.mount('#app')


// changeTitle(title){
        //     // this.title = 'Words of Randiance'
        //     this.title = title // den tager udgangspunkt i vores title ved 'changeTitle'
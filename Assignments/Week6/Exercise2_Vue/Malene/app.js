const app = Vue.createApp({
    // Root Component
    // Data and functions to react to events

    // Template will be rendered inside the app element
    // template: '<h2>I am the template</h2>'

    // Object returning a data object
    data() {
        return {
            showBooks: true,
            age: 37,
            x: 0,
            y: 0,
            url: 'https://www.youtube.com/',
            books: [
                { title: 'The Smell of The Wind', author: 'Georg Hanson', isFav: true, img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/39127/preview.png'},
                { title: 'The Taste of The Floor', author: 'Kyle L. Bones', isFav: false, img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/39127/preview.png'},
                { title: 'The Floor of The Windy Taste', author: 'Samuel Karlson', isFav: true, img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/39127/preview.png'}
            ]
        }
    },

    // Functions/methods to run for component
    methods: {
        /* changeTitle(title) {
            this.title = title
        }, */
        toggleShowBooks() {
            // Reverse with exclamation 
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
<template>  
    <div class="slider-container">
        <div class="slide" :style="{width: slideWidth + 'vw'}" v-for="recipe in recipes" :key="recipe.id" 
            @touchstart.passive="touchStart($event, this.recipes.findIndex(x => x.id === recipe.id))"
            @touchmove.passive="touchMove"
            @touchend="touchEnd"
            @mousedown.passive="touchStart($event, this.recipes.findIndex(x => x.id === recipe.id))"
            @mousemove.passive="touchMove"
            @mouseleave="touchEnd"
            @mouseup="touchEnd"
            >
            
            <RecipeCard :recipe="recipe" :slide-width="slideWidth" />
        </div>
    </div>
   

</template>

<script>
import RecipeCard from './recipe/RecipeCard.vue'

export default {
    components: { RecipeCard },
    props: [ 'slideWidth', 'recipes' ], 
    data(){
        return{
            recipes2: [ 
                {title: 'Mushroom Parmesan Pizza', author: 'Aria Jameson', difficulty: 1, ingredients: 14, cookTime: 40, id: 1},
                {title: 'Grilled cheese with kimchi', author: 'Gentleman Finn', difficulty: 2, ingredients: 12, cookTime: 15, id: 2},
                {title: 'Wonton soup', author: 'Bjarne Goldbæk  ', difficulty: 3, ingredients: 22, cookTime: 55, id: 3}
            ],
            slider: 'fart',
            slides: [],
            isDragging: false,
            startPosition: 0,
            currentPosition: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationID: 0,
            currentIndex: 0
        }
    },
    mounted(){

        this.slider = document.querySelector('.slider-container')
        this.slides = Array.from(document.querySelectorAll('.slide'))        
        this.slides.forEach(slide => {
            const slideImage = slide.querySelector('img')
            slideImage.addEventListener('dragstart', (e) => e.preventDefault())
        });
        
        // window.oncontextmenu = function(event){
        //     event.preventDefault()
        // }
    },
    methods: {
        touchStart(event, index){
            this.currentIndex = index
            this.startPosition = this.getPositionX(event)
            // console.log(this.startPosition)
            this.isDragging = true
            this.animationID = requestAnimationFrame(this.animation)
            this.slider.classList.add('grabbing')  
        },
        touchEnd(){
            // console.log('Touch End')
            this.isDragging = false
            cancelAnimationFrame(this.animationID)

            const movedBy = this.currentTranslate - this.prevTranslate

            if(movedBy < -100 && this.currentIndex < this.slides.length -1) this.currentIndex += 1

            if(movedBy > 100 && this.currentIndex > 0) this.currentIndex -= 1

            this.setPositionByIndex()

            this.slider.classList.remove('grabbing')
        },
        touchMove(event){
            if(this.isDragging){
                // console.log('Touch Move' + event)
                this.currentPosition = this.getPositionX(event)
                this.currentTranslate = this.prevTranslate + this.currentPosition - this.startPosition

            }
        },
        getPositionX(event){
            return event.type.includes('mouse')
                ? event.pageX 
                : event.touches[0].clientX
        },
        animation(){
            this.setSliderPosition()
            if(this.isDragging) requestAnimationFrame(this.animation)
        },
        setSliderPosition(){
            // console.log('setslider ' + this.slider)
            this.slider.style.transform = `translateX(${this.currentTranslate}px)`
        },
        setPositionByIndex(){
            // console.log('window: ' + window.innerWidth / 100 * this.slideWidth)
            this.currentTranslate = this.currentIndex * -window.innerWidth / 100 * this.slideWidth
            this.prevTranslate = this.currentTranslate
            this.setSliderPosition()
        }
        
    }
}
</script>

<style >


    

    
    


</style>
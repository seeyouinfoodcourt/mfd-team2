<template>  
    <div class="slider-container" :class="`slider-${sliderId}`">
        <div class="slide" :class="`slide-slider-${sliderId} ${slideWidth}`" v-for="item in items" :key="item.id" 
            @touchstart.passive="touchStart($event, this.items.findIndex(x => x.id === item.id))"
            @touchmove.passive="touchMove"
            @touchend="touchEnd"
            @mousedown.passive="touchStart($event, this.items.findIndex(x => x.id === item.id))"
            @mousemove.passive="touchMove"
            @mouseleave="touchEnd"
            @mouseup="touchEnd"
            >            
            <slot name="item" v-bind:item="item" />
        </div>
    </div>
   

</template>

<script>


export default {    
    props: [ 'slideWidth', 'items', 'sliderId' ], 
    data(){
        return{
            appWidth: 0,
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
        this.slider = document.querySelector('.slider-'+this.sliderId)    
        this.getSlides()    
    },
    updated(){
        this.getSlides() 
    },
    methods: {
        getSlides(){
            this.slides = Array.from(document.querySelectorAll('.slide-slider-'+this.sliderId))
            this.slides.forEach(slide => {
            const slideImage = slide.querySelector('img')
            if(slideImage){
                slideImage.addEventListener('dragstart', (e) => e.preventDefault())
            }
            
            }); 
        },
        touchStart(event, index){
            this.appWidth = document.querySelector('.slide-slider-'+this.sliderId).offsetWidth
            this.currentIndex = index
            this.startPosition = this.getPositionX(event)
            this.isDragging = true
            this.animationID = requestAnimationFrame(this.animation)
            this.slider.classList.add('grabbing')  
        },
        touchEnd(){
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
            this.slider.style.transform = `translateX(${this.currentTranslate}px)`
        },
        setPositionByIndex(){
            this.currentTranslate = this.currentIndex * -this.appWidth
            this.prevTranslate = this.currentTranslate
            this.setSliderPosition()

        }
        
    }
}
</script>

<style >


    

    
    


</style>
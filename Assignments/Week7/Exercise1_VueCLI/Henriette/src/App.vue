<template>
 <h1>{{ title }}</h1>
 <p>Welcome...</p>
 <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toogleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Hello h1</h1>
      <p>This is a paragraph</p>
    </Modal>
 </teleport>

 <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toogleModalTwo">
      <h1>Hello this is ModalTwo</h1>
      <p>This is a paragraph in modal two</p>
    </Modal>
 </teleport>
 <button @click.alt="toogleModal">Open modal (alt)</button>
 <button @click="toogleModalTwo">Open modal</button>
 <!--<input type="text" ref="name">
 <button @click="handleClick">Click me</button>-->
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      title:'My first Vue App:)',
      showModal: false, 
      showModalTwo: false,
    }
  },

  methods:{
    toogleModal(){
      this.showModal = !this.showModal
    },
     toogleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
  /*
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }*/
}

</script>

<style lang="scss">
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px soldi #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

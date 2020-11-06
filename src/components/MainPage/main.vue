<template>
  <div>
    <h2>main</h2>
    <router-link to="/"> Home </router-link>
  </div>

</template>

<script>
// import axios from "axios";

export default {
name: "main",
  mounted() {
    // this.checkForm();
  },
  data(){
    return{
      id:null,
      name:null,
      email:null,
      email_verified_at:null,
      created_at :null,
      updated_at : null,
      // error:null,

    }
  },
  methods:{
    // async checkForm () {
    //     try {
    //       console.log(('Bearer ' + localStorage.getItem('token')))
    //     }catch (e) {
    //       this.error = 'Error'
    //     }
    //
    // },
  },
}
</script>

<style scoped>

</style>

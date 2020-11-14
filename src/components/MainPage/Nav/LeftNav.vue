<template>
  <div class="Left-NavBar">
    <div>
      <p>DB</p>
    </div>
    <ul>
      <li><router-link to="/mainPage">Main</router-link></li>
<!--      <li><router-link to="/mainPage/Profile/user" >Profile</router-link></li>-->
      <li><a href="/mainPage/Profile/user" >Profile</a></li>

      <li><a title="Log Out" href="javascript:void(0)" @click.prevent="handleClick" class="logout"><img src="@/assets/img/exit.png" alt=""></a></li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "LeftNav",
  methods:{
    handleClick(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$store.dispatch('user' , null);
      this.$router.push('/login');
    }
  },
  computed:{
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
.body {
  padding: 0px;
  margin: 0px;
  position: relative;
  background: #343434;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: white;
}

a {
  text-decoration: none;
  color: white;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

a:hover {
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

button:focus {
  outline: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

nav {
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin: 0px auto;
  background: #3f3f3f;
  z-index: 1;
  -webkit-box-shadow: 1px 1px 5px  #00000073;
  box-shadow: 1px 1px 5px  #00000073;
}

nav div {
  display: inline-block;
  margin: 10px 35px;
}

nav div span {
  margin: 0px 15px;
}

nav div span img {
  width: 40px;
  height: 40px;
  border: 2px solid #757575;
  border-radius: 100%;
  margin-right: 10px;
}

nav div label {
  margin: 4px auto;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

section {
  position: relative;
  top: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

section .Left-NavBar {
  position: fixed;
  height: 100vmax;
  background: #3d3d3d;
  padding: 5px;
  margin: 5px auto;
  z-index: 1;
}

section .Left-NavBar p {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #915AC9;
  text-align: center;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 10px;
  margin: 20px;
}

section .Left-NavBar ul li {
  text-align: center;
  padding: 5px;
  margin: 15px auto;
}

section .Left-NavBar ul li a {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  font-size: 20px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  padding: 5px;
  margin: 15px auto;
}

section .Left-NavBar ul li a:hover {
  text-decoration: none;
  color: #3d3d3d;
  background: #a1a1a1;
}

section .Left-NavBar ul li a img {
  width: 50%;
  height: 50%;
  padding: 15px 0px;
}

section .Left-NavBar ul li .logout:hover {
  text-decoration: none;
  color: #3d3d3d;
  background: none;
}

section .body-content {
  position: relative;
  left: 0px;
  margin: 0px 0px 0px 150px;
  width: auto;
  height: auto;
}

section .body-content .All-Drivers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin: 0px auto;
}

section .body-content .All-Drivers .device {
  text-align: center;
  margin: 20px 10px;
}

section .body-content .All-Drivers .device a:hover {
  text-decoration: none;
  color: white;
}

section .body-content .All-Drivers .device section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 2px dashed #A5A5A5;
  border-radius: 15px;
  padding: 15px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

section .body-content .All-Drivers .device section img {
  width: 100px;
  height: 100px;
}

section .body-content .All-Drivers .device section p {
  padding: 5px;
  background: #A5A5A5;
  border-radius: 5px;
  margin: 15px auto 0px auto;
  font-size: 16px;
}

section .body-content .All-Drivers .device .addimage {
  width: 115px;
  height: 100px;
}

/* Extra small devices (phones, 600px and down) */
/*@media only screen and (max-width: 600px) {*/
/*  section {*/
/*    position: relative;*/
/*    top: 60px;*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    display: flex;*/
/*  }*/
/*  section .body-content {*/
/*    position: relative;*/
/*    left: 0px;*/
/*    width: 90%;*/
/*    height: 90vh;*/
/*    margin: 0px 90px;*/
/*  }*/
/*  section .body-content .All-Drivers {*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    display: flex;*/
/*    position: relative;*/
/*    -webkit-box-orient: vertical;*/
/*    -webkit-box-direction: normal;*/
/*    -ms-flex-direction: column;*/
/*    flex-direction: column;*/
/*    margin: 10px 100px;*/
/*  }*/
/*  section .body-content .All-Drivers .device {*/
/*    text-align: center;*/
/*    width: 200px;*/
/*    margin: 10px auto;*/
/*  }*/
/*  section .body-content .All-Drivers .device a:hover {*/
/*    text-decoration: none;*/
/*    color: white;*/
/*  }*/
/*  section .body-content .All-Drivers .device section {*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    display: flex;*/
/*    -webkit-box-orient: vertical;*/
/*    -webkit-box-direction: normal;*/
/*    -ms-flex-direction: column;*/
/*    flex-direction: column;*/
/*    border: 2px dashed #A5A5A5;*/
/*    border-radius: 15px;*/
/*    padding: 15px;*/
/*    -webkit-box-pack: center;*/
/*    -ms-flex-pack: center;*/
/*    justify-content: center;*/
/*    -webkit-box-align: center;*/
/*    -ms-flex-align: center;*/
/*    align-items: center;*/
/*  }*/
/*  section .body-content .All-Drivers .device section img {*/
/*    width: 100px;*/
/*    height: 100px;*/
/*  }*/
/*  section .body-content .All-Drivers .device section p {*/
/*    padding: 5px;*/
/*    background: #A5A5A5;*/
/*    border-radius: 5px;*/
/*    margin: 15px auto 0px auto;*/
/*    font-size: 16px;*/
/*  }*/
/*  section .body-content .All-Drivers .device .addimage {*/
/*    width: 115px;*/
/*    height: 100px;*/
/*  }*/
/*}*/
/*# sourceMappingURL=style.css.map */
</style>

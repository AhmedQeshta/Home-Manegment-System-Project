<template>
  <div>
    <NavBar/>
    <div class="content-body">
      <div>
        <h2>About Us</h2>
        <h4>This application aims to make it easier for the user to control the house appliances</h4>
        <p>
          We are five graduate students and this is our graduation project and We selected this project because we think it will benefit and solve a problem for it’s users.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/TopBar/NavBar";
import StyleAboutUsPage from "@/assets/css/_aboutUsStyle.css";
export default {
  name: "AboutUsPage",
  components:{
    NavBar,
  },
  StyleAboutUsPage,
}
</script>





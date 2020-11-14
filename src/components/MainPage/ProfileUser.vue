<template>
  <div class="body-profileUser">
    <!-- top nav bar  -->
    <TopNavBar/>
    <!--  end top nav bar    -->
    <section>
      <LeftNavBar/>
      <!-- body section -->
      <div class="body__content-profileUser">
        <!-- section change just it  -->
        <div class="All-Drivers">
          <h2>ProFile User Page</h2>
          <div>
              <form action="#" @submit.prevent="checkForm">
              <label >Name</label>
              <input type="text" v-model.trim="name">
              <br>
              <hr>
              <label >Email</label>
              <input type="text" v-model="email">

              <div class="Group2">
                <div class="btn-group">
                  <button type="submit">update</button>
                </div>
              </div>
            </form>
          </div>

        </div>

        <h2> UpLoad image in FireBase</h2>
        <input type="file" accept="image/" @change.prevent="previewImage">
        <button @click.prevent="onUpload">UpLoad</button>
        <div>
          <p> Progress : {{uploadValue.toFixed() + "%" }}
            <progress :value="uploadValue" max="100"></progress>
          </p>
        </div>
      </div>
      <!-- End -->
    </section>
  </div>
</template>

<script>
import TopNavBar from "@/components/MainPage/Nav/TopNav";
import LeftNavBar from "@/components/MainPage/Nav/LeftNav";
import {mapGetters} from "vuex";
import axios from "axios";
import firebase from 'firebase/app';
import 'firebase/storage';
export default {
  name: "ProfileUser",
  components:{
    TopNavBar,
    LeftNavBar,
  },
  mounted() {
    // var httpsReference = firebase.storage().refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
    // // var gsReference = firebase.storage().refFromURL('gs://hmsy-test.appspot.com/User/Profile/2020_10_1605114797620admin.jpg')
    // this.Reference = httpsReference ;
    // console.log(httpsReference);
    // console.log(httpsReference.location.path_);

  },
  data(){
    return{
      name: this.$store.getters.GetUser.name ,
      email: this.$store.getters.GetUser.email ,
      imageUrlRef: this.$store.getters.GetUser.image ,
      imageData:null,
      picture:null,
      uploadValue:0,
    }
  },
  methods:{
    async checkForm () {
      try {
        let ImagePath;
        if (this.picture){
          ImagePath = this.picture;
        }else{
          ImagePath = this.$store.getters.GetUser.image;
        }

        let response  = await axios.patch('update',{
          name      : this.name,
          email     : this.email,
          image     : ImagePath,
        });
        await this.$store.dispatch('user', response.data);
      }catch (e) {
        this.error = 'Error'
      }

    },
    test(){
      console.log(this.picture);
    },
    previewImage(event){
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload(){
      this.picture = null;
      const D = new Date();
      const Year = D.getFullYear();
      const Month = D.getMonth();
      const Time = D.getTime();
      const FullName = 'User/Profile/'+ `${Year}_${Month}_${Time}` ;
      const storageRef = firebase.storage().ref(FullName + `${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_change` , snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },error=>{console.log(error.message)},()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture = url;
        })
      })
    },

  },
  computed:{
    ...mapGetters(['GetUser']),
    ...mapGetters(['user']),

  },
}
</script>

<style scoped>
    @import "../../assets/css/MainPageStyle/_profileUserStyle.css";
</style>

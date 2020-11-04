<template>
  <div>
    <NavBar/>
    <div class="content-body">
      <div class="main-body-content">
        <h2>Login</h2>
        <form action="#" @submit.prevent="checkForm">
          <div class="Group1">
            <div class="input-group">
              <label for="email">E-Mail</label>
              <input v-if="!submitStatus" :class="{ }" v-model.trim="$v.email.$model" type="email" placeholder="Enter Your E-Mail" name="email"  class="email">
              <input v-else-if="submitStatus" v-model.trim="$v.email.$model" :class="{ 'inputError':$v.email.$error ,'inputSuccess':!$v.email.$invalid }" type="email" placeholder="Enter Your E-Mail" name="email" id="email" class="email">
              <div>
                <span class="ErrorText" v-if="!$v.email.minLength"> E-mail must have at least {{$v.email.$params.minLength.min}} letters</span>
                <span class="ErrorText" v-if="!$v.email.maxLength"> E-mail must have at most {{$v.email.$params.maxLength.min}} letters</span>
              </div>
            </div>
            <div class="input-group ">
              <label for="Password">Password</label>
              <input v-if="!submitStatus" :class="{ }" v-model.trim="$v.password.$model"   type="password" placeholder="Enter Your Password" name="Password" class="Password">
              <input v-else-if="submitStatus" v-model.trim="$v.password.$model" :class="{ 'inputError':$v.password.$error ,'inputSuccess':!$v.password.$invalid }"  type="password" placeholder="Enter Your Password" name="Password" id="Password" class="Password">
              <div>
                <span class="ErrorText" v-if="!$v.password.minLength"> password must have at least {{$v.password.$params.minLength.min}} letters</span>
                <span class="ErrorText" v-if="!$v.password.maxLength"> password must have at most {{$v.password.$params.maxLength.min}} letters</span>
              </div>
            </div>
          </div>

          <div v-if="submitStatus" >
            <p class="ErrorText" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="PENDINGText" v-if="submitStatus === 'PENDING'">Sending...</p>
            <p class="SuccessText" v-if="submitStatus === 'OK' && !error">Thanks for your submission!</p>
            <div v-if="error">
              <p class="ErrorText"> {{error}}</p>
            </div>
          </div>

          <div class="Group2">
            <div class="btn-group">
              <button type="submit">Login</button>
            </div>
            <div class="input-group">
              <label for="Password">Forget Password?<router-link to="/forgetPassword"> Reset Password </router-link></label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength,maxLength} from 'vuelidate/lib/validators'
import axios from "axios";
import NavBar from "@/components/TopBar/NavBar";
export default {
  name: "LoginPage",
  components:{
      NavBar,
    },
  data() {
    return {
      email: '',
      password: '',
      submitStatus: null,
      error:null
    }
  },
  validations:{
    email:{required, minLength:minLength(4), maxLength:maxLength(70)},
    password:{required, minLength:minLength(6), maxLength:maxLength(60)},
  },
  methods:{

    async checkForm () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        setTimeout(() => {
          this.submitStatus = null
        }, 3000);
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 200);
        setTimeout(() => {
          this.submitStatus = null
        }, 3000);

        try {
          const response  = await axios.post('login-api',{
            email     : this.email,
            password  : this.password
          });

          localStorage.setItem('token' , response.data.token);
          await this.$store.dispatch('user', response.data);
          this.$router.push('/mainPage');

        }catch (e) {
            this.error = 'Invalid Email/Password'
        }


      }
    },

  }
}
</script>

<style scoped>
.SuccessText{
  color: #0b4712;
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
.PENDINGText{
  color: #696b15;
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.ErrorText{
  color: #831e7d;
  font-weight: bold;
}


.content-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  width: 500px;
  margin: 10px auto;
  background: linear-gradient(103.72deg, #45A0F4 0%, #68DFA6 105.3%);  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 1px 1px 8px 1px #abeecd;
  box-shadow: 1px 1px 8px 1px #abeecd;
  border-radius: 10px;


}

.content-body h2 {
  text-align: center;
  padding: 10px 25px;
  font-size: 30px;
  color: white;
  position: relative;
  width: -moz-max-content;
  width: max-content;
  margin: 0px auto 15px auto;
  -webkit-transition: ease-in-out 0.25s;
  transition: ease-in-out 0.25s;
  border-bottom: 3px solid white;
}

.content-body h2::after {
  content: "";
  background: none;
  width: 70px;
  height: 6px;
  border-radius: 10px;
  position: absolute;
  bottom: -3.5px;
  left: 0%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

.content-body h2:focus::after, .content-body h2:hover::after {
  -webkit-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
  content: "";
  background: #8ae4e4;
  width: 70px;
  height: 4px;
  border-radius: 10px;
  position: absolute;
  bottom: -3.8px;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  -webkit-box-shadow: 1px 2px 10px #8ae4e4;
  box-shadow: 1px 2px 10px #8ae4e4;
}

.content-body h2::before {
  content: "";
  background: none;
  width: 70px;
  height: 6px;
  border-radius: 10px;
  position: absolute;
  bottom: -3.5px;
  left: 100%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

.content-body h2:focus, .content-body h2:hover {
  cursor: pointer;
}

.content-body h2:focus::before, .content-body h2:hover::before {
  -webkit-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
  content: "";
  background: #8ae4e4;
  width: 70px;
  height: 4px;
  border-radius: 10px;
  position: absolute;
  bottom: -3.8px;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

.content-body form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0px 10px;
}

.content-body form .Group1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.content-body form .input-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: start;
  margin: 5px auto;
}

.content-body form .input-group label {
  padding: 0px 8px;
  font-family: Arial, Helvetica, sans-serif;
  color: #C9E6F5;
  font-size: 16px;
}

.content-body form .input-group label a {
  color: #a9dfcd;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.content-body form .input-group label a:hover, .content-body form .input-group label a:focus {
  color: #cceaf0;
}

.content-body form .input-group input[type=text], .content-body form .input-group input[type=email], .content-body form .input-group input[type=password] {
  border-radius: 30px;
  padding: 8px 20px;
  margin: auto 15px;
  color: #5c5c5ce1;
  background: #C9E6F5;
  font-weight: bold;
}

.content-body form .input-group ::-webkit-input-placeholder {
  color: #5c5c5c8f;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.content-body form .input-group :-ms-input-placeholder {
  color: #5c5c5c8f;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.content-body form .input-group ::-ms-input-placeholder {
  color: #5c5c5c8f;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.content-body form .input-group ::placeholder {
  color: #5c5c5c8f;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.content-body form .btn-group {
  margin: 15px auto;
}

.content-body form .btn-group button {
  background: #178d66;
  padding: 5px 60px;
  border-radius: 30px;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  -webkit-transition: ease-in-out 0.30s;
  transition: ease-in-out 0.30s;
  border: 2px solid #178d66;
}

.content-body form .btn-group button:hover, .content-body form .btn-group button:focus {
  border: 2px solid #22926d;
  background: #25a57a;
  -webkit-box-shadow: 1px 2px 8px #228f6a;
  box-shadow: 1px 2px 8px #228f6a;
  color: white;
}

.content-body input[type=text], .content-body input[type=email], .content-body textarea, .content-body button, .content-body input[type=password] {
  outline: none;
  border: none;
}

.inputError {
  border: #c53c3c;
  -webkit-box-shadow: 0px 1px 8px  #862929;
  box-shadow: 0px 1px 8px  #862929;
}

.inputSuccess {
  border: #48c53c;
  -webkit-box-shadow: 0px 1px 8px  #298638;
  box-shadow: 0px 1px 8px  #298638;
}

@media only screen and (max-width: 800px) {

  .content-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 500px;
    margin: 10px auto;
    background: linear-gradient(103.72deg, #459ff470 0%, #68dfa67c 105.3%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 1px 1px 8px 1px #abeecd;
    box-shadow: 1px 1px 8px 1px #abeecd;
    border-radius: 10px;

  }
  .content-body .main-body-content {
    width: 90%;
  }
  .content-body h2 {
    text-align: center;
    padding: 5px 25px;
    font-size: 25px;
    color: white;
    position: relative;
    width: -moz-max-content;
    width: max-content;
    margin: 0px auto 20px auto;
    -webkit-transition: ease-in-out 0.25s;
    transition: ease-in-out 0.25s;
    border-bottom: 3px solid white;
  }
  .content-body form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0px 10px;
  }
  .content-body form .Group1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .content-body form .input-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: start;
    margin: 5px auto;
  }
  .content-body form .input-group label {
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #C9E6F5;
    font-size: 16px;
  }
  .content-body form .input-group input[type=text], .content-body form .input-group input[type=email], .content-body form .input-group input[type=password] {
    border-radius: 30px;
    padding: 4px 15px;
    margin: auto 15px;
    color: #5c5c5ce1;
    background: #C9E6F5;
    font-weight: bold;
  }
  .content-body form .input-group ::-webkit-input-placeholder {
    color: #5c5c5c8f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
  .content-body form .input-group :-ms-input-placeholder {
    color: #5c5c5c8f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
  .content-body form .input-group ::-ms-input-placeholder {
    color: #5c5c5c8f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
  .content-body form .input-group ::placeholder {
    color: #5c5c5c8f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
  .content-body form .btn-group {
    margin: 20px auto;
  }
  .content-body form .btn-group button {
    background: #178d66;
    padding: 5px 50px;
    border-radius: 30px;
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    -webkit-transition: ease-in-out 0.30s;
    transition: ease-in-out 0.30s;
    border: 2px solid #178d66;
  }
  .content-body form .btn-group button:hover, .content-body form .btn-group button:focus {
    border: 2px solid #22926d;
    background: #25a57a;
    -webkit-box-shadow: 1px 2px 8px #228f6a;
    box-shadow: 1px 2px 8px #228f6a;
    color: white;
  }
  .content-body input[type=text], .content-body input[type=email], .content-body textarea, .content-body button {
    outline: none;
    border: none;
  }
}
/*# sourceMappingURL=style.css.map */
</style>



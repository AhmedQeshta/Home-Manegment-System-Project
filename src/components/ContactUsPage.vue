<template>
  <div>
    <NavBar/>
    <div class="content-body">
      <div>
        <h2>Contact Us</h2>
        <form action="#" @submit.prevent="checkForm">
          <div class="Group1">
            <div class="input-group ">
              <label  for="name">Name</label>
              <input v-if="!submitStatus" v-model.trim="$v.name.$model" :class="{ }" type="text" placeholder="Enter Your Name" name="name">
              <input v-else-if="submitStatus"  v-model.trim="$v.name.$model" :class="{ 'inputError':$v.name.$error ,'inputSuccess':!$v.name.$invalid }" type="text" placeholder="Enter Your Name" name="name" id="name">
              <div >
                <span class="ErrorText" v-if="!$v.name.minLength"> Name must have at least {{$v.name.$params.minLength.min}} letters</span>
<!--                <span class="ErrorText" v-if="!$v.name.required"> Name is required </span>-->
                <span class="ErrorText" v-if="!$v.name.maxLength"> Name must have at most {{$v.name.$params.maxLength.min}} letters</span>
              </div>
            </div>
            <div class="input-group">
              <label for="email">E-Mail</label>
              <input v-if="!submitStatus" :class="{ }" v-model.trim="$v.email.$model" type="email" placeholder="Enter Your E-Mail" name="email">
              <input v-else-if="submitStatus" v-model.trim="$v.email.$model" type="email" placeholder="Enter Your E-Mail" name="email" id="email" :class="{ 'inputError':$v.email.$error ,'inputSuccess':!$v.email.$invalid }">
              <div >
<!--                <span class="ErrorText" v-if="!$v.email.required"> email is required </span>-->
                <span class="ErrorText" v-if="!$v.email.minLength"> email must have at least {{$v.email.$params.minLength.min}} letters</span>
                <span class="ErrorText" v-if="!$v.email.maxLength"> email must have at most {{$v.email.$params.maxLength.min}} letters</span>
              </div>
            </div>
          </div>
          <div class="Group2">
            <div class="input-group">
              <label for="contactsMessage">Message</label>
              <textarea v-if="!submitStatus" :class="{ }"  v-model.trim="$v.contactsMessage.$model"  name="contactsMessage"  cols="35" rows="9" placeholder="Enter Your Message ..."></textarea>
              <textarea v-else-if="submitStatus" :class="{ 'inputError':$v.contactsMessage.$error ,'inputSuccess':!$v.contactsMessage.$invalid }"  v-model.trim="$v.contactsMessage.$model"  name="contactsMessage" id="contactsMessage" cols="35" rows="9" placeholder="Enter Your Message ..."></textarea>
              <div >
<!--                <span class="ErrorText" v-if="!$v.contactsMessage.required"> Message is required </span>-->
                <span class="ErrorText" v-if="!$v.contactsMessage.minLength"> Message must have at least {{$v.contactsMessage.$params.minLength.min}} letters</span>
                <span class="ErrorText" v-if="!$v.contactsMessage.maxLength"> Message must have at most {{$v.contactsMessage.$params.maxLength.min}} letters</span>
              </div>
            </div>

            <div v-if="submitStatus" >
              <p id="Ok" class="SuccessText" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
              <p  class="ErrorText" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
              <p class="PENDINGText" v-if="submitStatus === 'PENDING'">Sending...</p>
            </div>

            <div class="btn-group">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { required, minLength,maxLength} from 'vuelidate/lib/validators'
import NavBar from "@/components/TopBar/NavBar";
export default {
  name: "ContactUsPage",
  components:{
    NavBar,
  },
  data() {
    return {
      name: '',
      email: '',
      contactsMessage: '',
      submitStatus: null
    }
  },
  validations:{
    name:{required, minLength:minLength(3), maxLength:maxLength(50)},
    email:{required, minLength:minLength(4), maxLength:maxLength(70)},
    contactsMessage:{required, minLength:minLength(5), maxLength:maxLength(255)}
  },
  methods:{
    checkForm () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        setTimeout(() => {
          this.submitStatus = null
        }, 3000);
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500);
        setTimeout(() => {
          this.submitStatus = null
        }, 3000);

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

.content-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  width: 60%;
  margin: 10px auto;
}

.content-body h2 {
  text-align: center;
  padding: 5px 50px;
  font-size: 50px;
  color: white;
  position: relative;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  margin: -25px auto 25px auto;
  -webkit-transition: ease-in-out 0.25s;
  transition: ease-in-out 0.25s;
  border-bottom: 3px solid white;
}

.content-body h2::after {
  content: "";
  background: none;
  width: 100px;
  height: 6px;
  border-radius: 10px;
  position: absolute;
  bottom: -5px;
  left: 0%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

.content-body h2:focus::after, .content-body h2:hover::after {
  -webkit-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
  content: "";
  background: #8ae4e4;
  width: 180px;
  height: 6px;
  border-radius: 10px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  -webkit-box-shadow: 1px 2px 10px #8ae4e4;
  box-shadow: 1px 2px 10px #8ae4e4;
}

.content-body h2::before {
  content: "";
  background: none;
  width: 100px;
  height: 6px;
  border-radius: 10px;
  position: absolute;
  bottom: -5px;
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
  width: 180px;
  height: 6px;
  border-radius: 10px;
  position: absolute;
  bottom: -5px;
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
}

.content-body form .Group1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
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
  font-size: 20px;
}

.content-body form .input-group input[type=text], .content-body form .input-group input[type=email] {
  border-radius: 30px;
  padding: 8px 20px;
  margin: auto 15px;
  color: #5c5c5ce1;
  background: #C9E6F5;
  font-weight: bold;
}

.content-body form .input-group textarea {
  border-radius: 5px;
  padding: 5px 15px;
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
  background: #089EDE;
  padding: 5px 60px;
  border-radius: 30px;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  -webkit-transition: ease-in-out 0.30s;
  transition: ease-in-out 0.30s;
  border: 2px solid #089EDE;
}

.content-body form .btn-group button:hover, .content-body form .btn-group button:focus {
  border: 2px solid #089EDE;
  background: #3ea6fac7;
  -webkit-box-shadow: 1px 2px 8px #21b0ee;
  box-shadow: 1px 2px 8px #21b0ee;
  color: white;
}

.content-body input[type=text], .content-body input[type=email], .content-body textarea, .content-body button {
  outline: none;
  border: none;
}

.inputError {
  border: 6px solid #c53c3c;
  -webkit-box-shadow: 0px 1px 8px  #862929;
  box-shadow: 0px 2px 6px  #862929;
}

.inputSuccess {
  border: 6px solid #48c53c;
  -webkit-box-shadow: 0px 1px 8px  #298638;
  box-shadow: 0px 2px 6px  #298638;
}

.ErrorText{
  color: #831e7d;
  font-weight: bold;
}

@media only screen and (max-width: 800px) {
  .content-body {
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
    text-align: center;
    width: 100%;
    margin: 0px;
  }
  .content-body h2 {
    text-align: center;
    padding: 5px 50px;
    font-size: 40px;
    color: white;
    position: relative;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin: -15px auto 20px auto;
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
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
  .content-body form .input-group input[type=text], .content-body form .input-group input[type=email] {
    border-radius: 30px;
    padding: 5px 15px;
    margin: auto 15px;
    color: #5c5c5ce1;
    background: #C9E6F5;
    font-weight: bold;
  }
  .content-body form .input-group textarea {
    border-radius: 5px;
    padding: 5px 15px;
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
    background: #089EDE;
    padding: 5px 60px;
    border-radius: 30px;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    -webkit-transition: ease-in-out 0.30s;
    transition: ease-in-out 0.30s;
    border: 2px solid #089EDE;
  }
  .content-body form .btn-group button:hover, .content-body form .btn-group button:focus {
    border: 2px solid #089EDE;
    background: #3ea6fac7;
    -webkit-box-shadow: 1px 2px 8px #21b0ee;
    box-shadow: 1px 2px 8px #21b0ee;
    color: white;
  }
  .content-body input[type=text], .content-body input[type=email], .content-body textarea, .content-body button {
    outline: none;
    border: none;
  }
}

</style>

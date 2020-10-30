<template>
  <div>
    <div class="content-body">
      <div>
        <h2>Contact Us</h2>

        <div v-if="errors.length">

          <ul>
            <li class="error" v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </div>

        <form action="#" @submit.prevent="checkForm">
          <div class="Group1">
            <div class="input-group ">
              <label  for="name">Name</label>
              <input @keyup="checkName" v-model="name" type="text" placeholder="Enter Your Name" name="name" id="name" class="name">
            </div>
            <div class="input-group">
              <label for="email">E-Mail</label>
              <input @keyup="checkEmail" v-model="email" type="email" placeholder="Enter Your E-Mail" name="email" id="email" class="email">
            </div>
          </div>
          <div class="Group2">
            <div class="input-group">
              <label for="contactsMessage">Message</label>
              <textarea @keyup="checkTextArea" v-model="contactsMessage" name="contactsMessage" id="contactsMessage" cols="35" rows="9" placeholder="Enter Your Message ..."></textarea>

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
export default {
  name: "ContactUsPage",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      contactsMessage: null
    }
  },
  methods:{
    checkForm () {
      if (this.name && this.email && this.contactsMessage) {
        this.errors = [];
        return true;
      }
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.contactsMessage) {
        this.errors.push('Message required.');
      }

    },
    checkTextArea(){
      if (this.contactsMessage) {
        this.errors = [];
        return true;
      }
      if (!this.contactsMessage) {
        this.errors.push('Message required.');
      }
    },
    checkName(){
      if (this.name) {
        this.errors = [];
        return true;
      }
      if (!this.name) {
        this.errors.push('Name required.');
      }
    },
    checkEmail(){
      if (this.email) {
        this.errors = [];
        return true;
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }
    }
  }
}
</script>

<style scoped>
.error{
  color: #7c1b1b;
  font-size: 20px;
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

<template>
  <transition name="modal-fade">
    <div class="modal-container">
      <div class="modal__wrapper">
        <button type="button" class="close-button" @click="close">
          <img src="../../static/img/close.svg" alt="close" />
        </button>
        <div class="modal__content">
          <header class="modal__header">
            <p class="header-text">{{ header }}</p>
          </header>
          <div v-show="modalStatus === 2" class="modal__main">
            <form>
              <div class="modal__form-content">
                <div class="modal__form-container">
                  <ul class="modal__list">
                    <li
                      v-for="answer in answers"
                      :key="answer.id"
                      class="modal__item"
                    >
                      <input
                        :id="answer.id"
                        v-model="answer.checked"
                        type="checkbox"
                        name="experience"
                        class="modal__checkbox"
                        @change="setIndex($event.target.id)"
                      />
                      <label :for="answer.id" class="modal__checkbox-label">
                        <div class="checkbox__fake">
                          <div
                            :class="{ checkbox__checker: answer.checked }"
                          ></div>
                        </div>
                        {{ answer.text }}
                      </label>
                    </li>
                  </ul>
                  <input
                    v-model="data.answers[0].usage[0].text"
                    class="modal__text-input"
                    type="text"
                    placeholder="Your answer"
                  />
                </div>
                <button
                  class="modal__button accept-button"
                  @click.prevent="send"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div class="modal__buttons">
            <div class="buttons">
              <div v-show="modalStatus === 0">
                <button
                  class="modal__button accept-button"
                  @click="responseYes"
                >
                  Yes, I like!
                </button>
                <button class="modal__button reject-button" @click="responseNo">
                  No, I don’t
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      actions: {
        sendData: 'https://pepperfm.ru/api/v1/questionnaires',
      },
      modalStatus: 0,
      defaultHeader: 'Do you like the idea of our service?',
      header: '',
      data1: {
        is_positive: true,
        options: [],
        text: '',
      },
      data: {
        answers: [
          {
            is_positive: false,
            usage: [
              {
                options: [],
                text: '',
              },
            ],
          },
        ],
      },
      answers: [
        {
          id: 1,
          text: 'I don’t understand what to do',
          checked: false,
        },
        {
          id: 2,
          text: 'I couldn’t find the right button',
          checked: false,
        },
        {
          id: 3,
          text: 'I’m looking to learn another piece',
          checked: false,
        },
      ],
    };
  },
  mounted() {
    this.header = this.defaultHeader;
  },
  methods: {
    async send() {
      const response = await this.$http
        .post(this.actions.sendData, this.data)
        .then((res) => {
          if (res.status === 200) {
            this.modalStatus = 3;
            this.header =
              'Thank you for sharing your thoughts. We’ll fix everything in no time!';
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async responseYes() {
      const access_token = this.$store.getters.token;
      this.data.answers[0].is_positive = true;
      try {
        const response = await this.$http({
          method: 'POST',
          url: this.actions.sendData,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
          body: this.data,
        });
        // if (res.status === 200) {
        //   this.modalStatus = 1;
        //   this.header = 'Thanks a lot! We’re so glad you like us!';
        // }
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
    responseNo() {
      this.data.answers[0].is_positive = false;
      this.modalStatus = 2;
      this.header = 'What exactly spoiled the usage for you?';
    },
    setIndex(id) {
      const answer = this.answers.find((a) => a.id === Number(id));
      if (answer.checked) {
        this.data.answers[0].usage[0].options.push(answer.id);
      } else {
        this.data.answers[0].usage[0].options.forEach((item, index) => {
          if (item === answer.id) {
            this.data.answers[0].usage[0].options.splice(index, 1);
          }
        });
      }
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.modal__wrapper {
  position: relative;
  width: 740px;
  min-height: 325px;
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  color: #000000;
  background: transparent;
}
.modal__header {
  padding: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #000000;
}
.header-text {
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  line-height: 33px;
  margin: 0;
}
.modal__main {
  display: flex;
  justify-content: center;
}
.modal__form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal__form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.modal__list {
  margin: 0;
  text-align: left;
}
.modal__item {
  list-style: none;
}
.modal__checkbox {
  position: absolute;
  top: 0;
  left: -9999px;
}
.modal__checkbox-label {
  font-size: 18px;
  line-height: 25px;
  color: #000000;
}
.checkbox__fake {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: #fff;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.checkbox__checker {
  content: '';
  display: block;
  position: absolute;
  z-index: 5;
  left: 3px;
  top: 3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: grey;
}
.modal__text-input {
  width: 410px;
  height: 33px;
  border: 1px solid #c4c4c4;
}
.modal__text-input:focus {
  outline: none;
}
.modal__buttons {
  display: flex;
  justify-content: center;
}
.modal__button {
  width: 176px;
  height: 32px;
  margin-top: 30px;
  border-radius: 3px;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  border: none;
}
.accept-button {
  background: #bacd39;
  margin-right: 25px;
}
.accept-button:hover {
  background: #cde03b;
}
.reject-button {
  background: #ff4747;
}
.reject-button:hover {
  background: #e44646;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>

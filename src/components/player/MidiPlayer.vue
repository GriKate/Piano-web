<template>
  <div class="buttons">
    <div class="buttons__main">
      <div class="button__center">
        <button id="start">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="player__icon"
          >
            <path
              d="M20.2308 2.45508V18.4685"
              stroke="#F7F7F7"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.74582 10.8828L20.2308 18.4681"
              stroke="#F7F7F7"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.74582 10.8832L20.2308 2.45508"
              stroke="#F7F7F7"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="2.34613"
              y1="2.26953"
              x2="2.34613"
              y2="18.6541"
              stroke="#F7F7F7"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <b-tooltip target="start" triggers="hover"> To start </b-tooltip>
      </div>
      <div class="play">
        <button
          id="play-pause"
          :class="{ button_active: buttonState === 'stop' }"
          @click="handleStartClick"
        >
          <div v-if="buttonState === 'start'">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="play-icon"
            >
              <path
                d="M4.00006 2V27.1429"
                stroke="#F7F7F7"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.0001 14.5703L4.00006 27.1417"
                stroke="#F7F7F7"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.0001 14.5714L4.00006 2"
                stroke="#F7F7F7"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div v-else>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="play-icon"
            >
              <path
                d="M9.2,28.9L9.2,28.9c-0.7,0-1.3-0.6-1.3-1.3V2.5c0-0.7,0.6-1.3,1.3-1.3h0c0.7,0,1.3,0.6,1.3,1.3v25.1
              C10.5,28.3,9.9,28.9,9.2,28.9z"
                stroke="#F7F7F7"
                stroke-width="1.5"
              />
              <path
                d="M20.8,28.9L20.8,28.9c-0.7,0-1.3-0.6-1.3-1.3V2.5c0-0.7,0.6-1.3,1.3-1.3h0c0.7,0,1.3,0.6,1.3,1.3
              v25.1C22.2,28.3,21.6,28.9,20.8,28.9z"
                stroke="#F7F7F7"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </button>
        <b-tooltip target="play-pause" triggers="hover">
          Play / Pause
        </b-tooltip>
      </div>
      <div class="button__center">
        <button id="mute" @click="handleMute">
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mute__icon"
          >
            <line
              x1="21.8"
              y1="10.25"
              x2="27.4569"
              y2="15.9069"
              stroke="#F7F7F7"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="-1"
              x2="9"
              y2="-1"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 29.0281 10.25)"
              stroke="#F7F7F7"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M8.6 7.5H2V19.05H8.6M8.6 7.5L17 2V24L8.6 19.05M8.6 7.5V19.05"
              stroke="#F7F7F7"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <b-tooltip target="mute" triggers="hover"> Mute On / Off </b-tooltip>
      </div>
    </div>
    <div class="buttons__other">
      <div class="player__button">
        <button id="metronome" @click="handleMetronomeClick">
          <svg
            width="23"
            height="26"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="metronome__icon"
          >
            <path
              d="M1.10953 25C1.15815 24.7098 1.22361 24.3728 1.30718 23.9904C1.51367 23.0454 1.81576 21.8877 2.19433 20.5932C2.95128 18.0048 4.00387 14.904 5.18035 11.9226C6.35954 8.93441 7.64955 6.10119 8.87616 4.03049C9.49181 2.99117 10.0677 2.18494 10.5794 1.65129C11.1322 1.07469 11.4347 1 11.5002 1C11.5656 1 11.8681 1.07469 12.4209 1.65129C12.9326 2.18494 13.5085 2.99117 14.1241 4.03049C15.3508 6.10119 16.6408 8.93441 17.82 11.9226C18.9964 14.904 20.049 18.0048 20.806 20.5932C21.1845 21.8877 21.4866 23.0454 21.6931 23.9904C21.7767 24.3728 21.8422 24.7098 21.8908 25H1.10953Z"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="0.5"
              y1="-0.5"
              x2="21.0118"
              y2="-0.5"
              transform="matrix(0.445491 -0.895286 0.893562 0.448939 11.5003 22.1484)"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="1.91669"
              y="20.2227"
              width="19.1667"
              height="1.92593"
              fill="white"
            />
            <path
              d="M18.7739 6.41408L18.6127 3.08221L21.5649 4.60788L18.7739 6.41408Z"
              fill="white"
            />
          </svg>
        </button>
        <b-tooltip target="metronome" triggers="hover">
          Metronome On / Off
        </b-tooltip>
      </div>
      <div class="player__button">
        <button
          id="loop"
          title="Click once for start Loop, click again for end"
          @click="handleLoop"
        >
          <svg
            v-if="setLoopPoint === 0"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="player__icon_loop"
          >
            <path
              d="M14.6212 0.337104L14.5211 0.247402C14.2999 0.0727798 14.0223 -0.0145529 13.7409 0.00198279C13.4595 0.0185185 13.194 0.137772 12.9948 0.337104L12.9051 0.437155C12.7305 0.658152 12.6432 0.935559 12.6598 1.21668C12.6763 1.49781 12.7955 1.76307 12.9948 1.96208L14.4889 3.45365H8.05016L7.77411 3.45825C5.68888 3.52921 3.71271 4.4071 2.26237 5.90679C0.812025 7.40648 0.000879994 9.41073 0 11.4969C0 13.1586 0.503782 14.7031 1.36757 15.9808C1.54496 16.2287 1.8136 16.3961 2.11439 16.446C2.41519 16.496 2.7235 16.4244 2.97151 16.247C3.21951 16.0696 3.38689 15.801 3.43683 15.5003C3.48676 15.1995 3.41516 14.8913 3.23778 14.6433L3.0825 14.3926C2.5734 13.5191 2.30377 12.5268 2.30083 11.5159C2.29789 10.5049 2.56175 9.51103 3.06577 8.63462C3.56979 7.7582 4.29613 7.03024 5.17147 6.52421C6.04682 6.01818 7.04018 5.752 8.05131 5.75253H14.4866L12.9948 7.2441L12.9051 7.34415C12.7183 7.57379 12.6274 7.86664 12.6513 8.16166C12.6752 8.45668 12.812 8.7311 13.0333 8.92772C13.2545 9.12434 13.5432 9.228 13.839 9.21707C14.1348 9.20614 14.415 9.08148 14.6212 8.86907L18.0786 5.41557L18.1672 5.31552C18.3418 5.09453 18.4291 4.81712 18.4125 4.53599C18.396 4.25487 18.2768 3.98961 18.0775 3.7906L14.6212 0.337104ZM21.6086 6.97385C21.4613 6.78485 21.2585 6.64662 21.0288 6.57852C20.799 6.51042 20.5537 6.51585 20.3272 6.59405C20.1007 6.67225 19.9043 6.8193 19.7655 7.01464C19.6267 7.20997 19.5525 7.4438 19.5532 7.68341C19.5532 7.92376 19.6268 8.14571 19.751 8.32856C20.3229 9.19475 20.6495 10.1996 20.6961 11.2365C20.7427 12.2734 20.5076 13.3035 20.0158 14.2175C19.5239 15.1315 18.7936 15.8952 17.9026 16.4276C17.0115 16.96 15.9928 17.2411 14.9547 17.2412H8.52748L10.0158 15.7577L10.1113 15.6473C10.2679 15.4444 10.3523 15.1951 10.3511 14.9388C10.3498 14.6826 10.263 14.434 10.1044 14.2327L10.0158 14.1315L9.90656 14.0349C9.70341 13.878 9.45361 13.7934 9.19686 13.7946C8.9401 13.7959 8.69114 13.8829 8.48953 14.0418L8.38831 14.1315L4.932 17.585L4.83653 17.6943C4.67961 17.8972 4.59505 18.1468 4.5963 18.4033C4.59755 18.6598 4.68454 18.9086 4.84344 19.11L4.932 19.21L8.38831 22.6635L8.49758 22.7601C8.71964 22.9316 8.99675 23.016 9.27673 22.9975C9.55671 22.9789 9.82025 22.8587 10.0177 22.6594C10.2152 22.4601 10.333 22.1955 10.349 21.9154C10.365 21.6353 10.278 21.359 10.1044 21.1386L10.0158 21.0385L8.51598 19.5401H14.9524L15.2285 19.5366C16.6671 19.4872 18.066 19.0529 19.2797 18.279C20.4933 17.5051 21.4771 16.4199 22.1286 15.1366C22.78 13.8532 23.0753 12.4186 22.9837 10.9823C22.892 9.546 22.4167 8.16057 21.6074 6.9704V6.97385H21.6086Z"
              fill="white"
            />
          </svg>
          <svg
            v-else-if="setLoopPoint === 1 || setLoopPoint === 2"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="player__icon_big-loop"
          >
            <path
              d="M9.73333 9.7091C10.5449 8.89636 11.5088 8.25158 12.5698 7.81166C13.6308 7.37174 14.7681 7.1453 15.9167 7.1453C17.0653 7.1453 18.2026 7.37174 19.2636 7.81166C20.3246 8.25158 21.2884 8.89636 22.1 9.7091L23.8267 11.4241H19.8483V12.5908H25.8217V6.6291H24.655V10.5958L22.9167 8.89244C21.5299 7.51045 19.7651 6.56987 17.8446 6.18923C15.9242 5.80859 13.934 6.00493 12.125 6.7535C10.3159 7.50208 8.76894 8.76938 7.67896 10.3957C6.58898 12.0221 6.00478 13.9346 6 15.8924H7.16667C7.16319 14.7431 7.38832 13.6045 7.82896 12.543C8.2696 11.4814 8.91694 10.5181 9.73333 9.7091ZM24.6667 15.8924C24.6651 17.6219 24.1511 19.3121 23.1896 20.7497C22.228 22.1872 20.862 23.3075 19.2641 23.9691C17.6662 24.6308 15.9081 24.804 14.2117 24.467C12.5154 24.1301 10.957 23.2979 9.73333 22.0758L8.00667 20.3608H11.985V19.1941H6.01167V25.1558H7.17833V21.1891L8.91667 22.8924C10.3034 24.2744 12.0682 25.215 13.9887 25.5956C15.9092 25.9763 17.8993 25.7799 19.7084 25.0314C21.5174 24.2828 23.0644 23.0155 24.1544 21.3892C25.2444 19.7628 25.8286 17.8502 25.8333 15.8924H24.6667Z"
              fill="white"
            />
            <path
              d="M14.1 14.17L15.83 13.2H16.83V20H15.65V14.52L14.63 15.08L14.1 14.17Z"
              fill="white"
            />
          </svg>
          <svg
            v-else-if="setLoopPoint === 3"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="player__icon_big-loop"
          >
            <path
              d="M9.73333 9.7091C10.5449 8.89636 11.5088 8.25158 12.5698 7.81166C13.6308 7.37174 14.7681 7.1453 15.9167 7.1453C17.0652 7.1453 18.2026 7.37174 19.2636 7.81166C20.3246 8.25158 21.2884 8.89636 22.1 9.7091L23.8267 11.4241H19.8483V12.5908H25.8217V6.6291H24.655V10.5958L22.9167 8.89244C21.5299 7.51045 19.7651 6.56987 17.8446 6.18923C15.9242 5.80859 13.934 6.00493 12.125 6.7535C10.3159 7.50208 8.76894 8.76938 7.67896 10.3957C6.58898 12.0221 6.00478 13.9346 6 15.8924H7.16667C7.16319 14.7431 7.38832 13.6045 7.82896 12.543C8.2696 11.4814 8.91694 10.5181 9.73333 9.7091V9.7091ZM24.6667 15.8924C24.6651 17.6219 24.1511 19.3121 23.1896 20.7497C22.228 22.1872 20.862 23.3075 19.2641 23.9691C17.6662 24.6308 15.9081 24.804 14.2117 24.467C12.5154 24.1301 10.957 23.2979 9.73333 22.0758L8.00667 20.3608H11.985V19.1941H6.01167V25.1558H7.17833V21.1891L8.91667 22.8924C10.3034 24.2744 12.0682 25.215 13.9887 25.5956C15.9092 25.9763 17.8993 25.7799 19.7084 25.0314C21.5174 24.2828 23.0644 23.0155 24.1544 21.3892C25.2444 19.7628 25.8286 17.8502 25.8333 15.8924H24.6667Z"
              fill="white"
            />
            <path
              d="M18.52 20H14.4V19.05C14.4 18.57 14.4633 18.17 14.59 17.85C14.7167 17.5233 14.8867 17.2567 15.1 17.05C15.3133 16.8367 15.5467 16.6667 15.8 16.54L16.48 16.2C16.74 16.0667 16.95 15.9267 17.11 15.78C17.2767 15.6267 17.36 15.43 17.36 15.19V15.01C17.36 14.7633 17.2733 14.57 17.1 14.43C16.9333 14.2833 16.6633 14.21 16.29 14.21C16.0633 14.21 15.8333 14.2433 15.6 14.31C15.3733 14.3767 15.0967 14.47 14.77 14.59L14.4 13.56C14.7733 13.3933 15.1133 13.2767 15.42 13.21C15.7333 13.1367 16.0367 13.1 16.33 13.1C16.87 13.1 17.3 13.1867 17.62 13.36C17.9467 13.5333 18.18 13.7667 18.32 14.06C18.4667 14.3467 18.54 14.6633 18.54 15.01V15.19C18.54 15.55 18.4667 15.8567 18.32 16.11C18.18 16.3633 17.9933 16.5767 17.76 16.75C17.5267 16.9233 17.2733 17.0767 17 17.21L16.32 17.55C16.0733 17.67 15.89 17.8367 15.77 18.05C15.6567 18.2633 15.5933 18.5367 15.58 18.87H18.52V20Z"
              fill="white"
            />
          </svg>
        </button>
        <b-tooltip target="loop" triggers="hover">
          Click once for start Loop, click again for end
        </b-tooltip>
      </div>
      <button
        class="player__button"
        title="Full screen"
        @click="switchFullscreen($event.target)"
      >
        <div id="fullscreen" class="fullscreen__button fullscreen-active">
          <svg
            id="fullscreen-svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="player__icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 3H24V10.4961H27V1.5V0H25.5H16.5V3ZM10.5 3.00065H3V10.4967H0V1.50065V0.000650764H1.5H10.5V3.00065ZM3 24.0013H10.5V27.0013H1.5H0V25.5013V16.5052H3V24.0013ZM16.5 24.0013H24V16.5052H27V25.5013V27.0013H25.5H16.5V24.0013Z"
              fill="white"
            />
          </svg>
        </div>
        <div id="smallscreen" class="fullscreen__button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="player__icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 19H24V17H18H17V18V24H19V19Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 19L5 24H7L7 18V17H6H0V19H5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 5L0 5V7L6 7H7V6L7 0H5L5 5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 5V0H17V6V7H18H24V5H19Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <b-tooltip target="fullscreen" triggers="hover"> Full Screen </b-tooltip>
    </div>
  </div>
  <!--    <button-->
  <!--      id="play-pause"-->
  <!--      :class="{ button_active: buttonState === 'stop' }"-->
  <!--      @click="handleStartClick"-->
  <!--    >-->
  <!--      <img-->
  <!--        v-if="buttonState === 'start'"-->
  <!--        src="../../static/img/play.svg"-->
  <!--        alt="play"-->
  <!--        class="player__icon"-->
  <!--      />-->
  <!--      <img-->
  <!--        v-else-->
  <!--        src="../../static/img/pause.svg"-->
  <!--        alt="pause"-->
  <!--        class="player__icon"-->
  <!--      />-->
  <!--    </button>-->
  <!--    <b-tooltip target="play-pause" triggers="hover"> Play / Pause </b-tooltip>-->
  <!--    <button id="stop" @click="handleStopClick">-->
  <!--      <img-->
  <!--        src="../../static/img/stop-empty.svg"-->
  <!--        alt="stop"-->
  <!--        class="player__icon"-->
  <!--      />-->
  <!--    </button>-->
  <!--    <b-tooltip target="stop" triggers="hover"> Stop </b-tooltip>-->
</template>

<script>
import { Midi } from '@tonejs/midi';
import * as Tone from 'tone';
import { mapGetters, mapActions } from 'vuex';
import { showNotesTimeInterval } from '@/constants'; //5
import { log } from 'tone/build/esm/core/util/Debug';
import '@/styles/piano.css';

const States = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused',
};

const ButtonState = {
  START: 'start',
  STOP: 'stop',
};

const metronome = new Tone.Player('./static/metronome.mp3').toDestination();

export default {
  name: 'MidiPlayer',
  data: () => ({
    setLoopPoint: 0,
    loopStartTime: null,
    loopEndTime: null,
    url: '',
    part: null,
    synth: null,
    buttonState: ButtonState.START,
    metronome: false,
    metronomeLoop: null,
  }),
  beforeDestroy() {
    if (this.part) {
      this.handleStopClick();
    }
  },
  methods: {
    ...mapActions(['setNotes', 'calculateDisplayNotes']),
    async handleStartClick() {
      if (this.getCurrentMidi() && this.part) {
        // for reset previous melody for playing new melody after search
        this.handleStopClick();
      }
      if (!this.part || Tone.Transport.state === States.STOPPED) {
        const midi = await Midi.fromUrl(this.url);
        // set all melody notes
        this.setNotes(midi.tracks[0].notes);

        this.synth = new Tone.PolySynth(Tone.Synth).toDestination();
        // ?
        this.part = new Tone.Part((time, value) => {
          const res = this.synth.triggerAttackRelease(
            value.name,
            value.duration,
            undefined,
            value.velocity
          );
          this.$emit('trigger', {
            octave: value.octave,
            pitch: value.pitch,
            duration: value.duration,
            type: 'attack',
          });
          // set start/end loop point time
          if (this.setLoopPoint === 1) {
            this.loopStartTime = value.time;
            this.setLoopPoint = 2;
          } else if (this.setLoopPoint === 3) {
            this.loopEndTime = value.time;
            this.setLoopPoint = 0;
            this.setLoop();
          }
          setTimeout(() => {
            this.$emit('trigger', {
              octave: value.octave,
              pitch: value.pitch,
              duration: value.duration,
              type: 'release',
            });
          }, value.duration * 1000 - 180);
          // need to release note little bit earlier (~180ms)
        }, midi.tracks[0].notes);
        const loop = new Tone.Loop(this.loopCallback, 0.1);
        if (this.metronome) {
          this.metronomeLoop = new Tone.Loop((time) => {
            metronome.start();
          }, '1.2s').start(showNotesTimeInterval);
        }

        loop.start(0);
        this.part.start(showNotesTimeInterval);
        Tone.Transport.start();
        this.buttonState = ButtonState.PAUSED;
      } else if (Tone.Transport.state === States.PAUSED) {
        if (this.metronomeLoop) {
          this.metronomeLoop.start();
        }
        Tone.Transport.start();
        this.buttonState = ButtonState.PAUSED;
      } else if (Tone.Transport.state === States.STARTED) {
        Tone.Transport.pause();
        this.buttonState = ButtonState.START;
        this.setPauseCount();
      }
    },
    getCurrentMidi() {
      // for playing melody after search
      if (this.$store.state.currentMelodyPath) {
        if (this.url === this.$store.state.currentMelodyPath) {
          return false;
        } else {
          this.url = this.$store.state.currentMelodyPath;
          return true;
        }
      } else {
        // for playing default melody
        this.url = this.$store.getters.defaultMelodyMidi;
      }
    },
    loopCallback() {
      this.calculateDisplayNotes(Tone.Transport.seconds);
    },
    handleStopClick() {
      Tone.Transport.stop();
      this.part.stop();
      if (this.metronomeLoop) {
        this.metronomeLoop.stop();
      }
      this.calculateDisplayNotes(-999999);
      this.buttonState = ButtonState.START;
    },
    handleLoop() {
      if (this.setLoopPoint === 0) {
        this.setLoopPoint = 1;
      } else if (this.setLoopPoint === 2) {
        this.setLoopPoint = 3;
      }
    },
    setLoop() {
      this.part.loop = true;
      this.part.loopStart = this.loopStartTime;
      // console.log(this.loopStartTime);
      this.part.loopEnd = this.loopEndTime;
      // console.log(this.loopEndTime);
    },
    handleMetronomeClick() {
      this.metronome = !this.metronome;
      if (Tone.Transport.state === States.STARTED) {
        if (!this.metronomeLoop) {
          this.metronomeLoop = new Tone.Loop((time) => {
            metronome.start();
          }, '1.2s');
        }
        if (this.metronome && this.metronomeLoop.state === 'stopped') {
          this.metronomeLoop.start(Tone.Transport.seconds);
        } else {
          this.metronomeLoop.stop();
        }
      }
    },
    handleMute() {
      if (this.part) {
        this.part.mute = !this.part.mute;
        if (this.part.mute && this.metronomeLoop.state === 'started') {
          this.metronomeLoop.stop();
        } else if (!this.part.mute && this.metronomeLoop.state === 'stopped') {
          this.metronomeLoop.start(Tone.Transport.seconds);
        }
      }
    },
    setPauseCount() {
      const localCount = Number(localStorage.count);
      if (localCount) {
        if (this.$store.getters.pauseClickCount !== localCount) {
          this.$store.dispatch('setCount', localCount);
        } else {
          this.$store.dispatch('changeCount');
          localStorage.count = this.$store.getters.pauseClickCount;
        }
      } else {
        localStorage.count = 1;
        this.$store.dispatch('setCount', Number(localStorage.count));
      }
      if (Number(localStorage.count) === 3) {
        this.$emit('showModal');
      }
    },
    ...mapActions(['setPianoSize']),
    switchFullscreen() {
      const fullscreenBtn = document.getElementById('fullscreen');
      const smallscreenBtn = document.getElementById('smallscreen');
      if (fullscreenBtn.classList.contains('fullscreen-active')) {
        fullscreenBtn.classList.remove('fullscreen-active');
        smallscreenBtn.classList.add('fullscreen-active');
      } else {
        fullscreenBtn.classList.add('fullscreen-active');
        smallscreenBtn.classList.remove('fullscreen-active');
      }
      const player = document.getElementById('player');
      const wrapper = document.getElementsByClassName('wrapper')[0];
      if (
        player.classList.contains('fullscreen-player') &&
        wrapper.classList.contains('fullscreen-wrapper')
      ) {
        player.classList.remove('fullscreen-player');
        wrapper.classList.remove('fullscreen-wrapper');
      } else {
        player.classList.add('fullscreen-player');
        wrapper.classList.add('fullscreen-wrapper');
      }
      this.setPianoSize();
    },
  },
};
</script>

<style scoped></style>

import Vue from 'vue';
import Vuex from 'vuex';
import {
  showNotesTimeInterval,
  beforeShowInterval,
  afterShowInterval,
  pianoContainerClass,
} from '@/constants';
import { getPianoDimensions } from '@/utils/pianoDimensions';

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      pianoWidth: null,
      pianoHeight: null,
      notes: [],
      melodies: [],
      displayNotes: [],
      currentTime: null,
      currentLoopTime: null,
      isLoopActive: false,
      pianoDimensions: {},
      pauseClickCount: 0,
      defaultMelodyName: "Ludwig van Beethoven - Sonata № 14, 'Moonlight'",
      defaultMelodyMidi: './static/moonlight_sonata.mid',
      currentMelodyName: '',
      currentMelodyPath: '',
      favourites: [],
      access_token: null,
      userData: {},
      userName: '',
    },
    getters: {
      userName(state) {
        return state.userName;
      },
      userData(state) {
        return state.userData;
      },
      favourites(state) {
        return state.favourites;
      },
      token(state) {
        return state.access_token;
      },
      defaultMelodyName(state) {
        return state.defaultMelodyName;
      },
      defaultMelodyMidi(state) {
        return state.defaultMelodyMidi;
      },
      currentMelodyName(state) {
        return state.currentMelodyName;
      },
      currentMelodyPath(state) {
        return state.currentMelodyPath;
      },
      pianoWidth(state) {
        return state.pianoWidth || 0;
      },
      pianoHeight(state) {
        return state.pianoHeight;
      },
      notes(state) {
        return state.notes;
      },
      melodies(state) {
        return state.melodies;
      },
      displayNotes(state) {
        return state.displayNotes;
      },
      currentTime(state) {
        return state.currentTime;
      },
      currentLoopTime(state) {
        return state.currentLoopTime;
      },
      isLoopActive(state) {
        return state.isLoopActive;
      },
      pianoDimensions(state) {
        return state.pianoDimensions;
      },
      pauseClickCount(state) {
        return state.pauseClickCount;
      },
    },
    mutations: {
      mutateUserName(state, name) {
        state.userName = name;
      },
      saveUserData(state, data) {
        state.userData = data;
      },
      mutateFavourites(state, favourites) {
        state.favourites = favourites;
      },
      addFavourite(state, melody) {
        state.favourites.push(melody);
      },
      changeMelodyStatus(state, melody) {
        const idx = state.melodies.indexOf(melody);
        state.melodies[idx].favorite = !state.melodies[idx].favorite;
      },
      saveToken(state, token) {
        state.access_token = token;
      },
      removeFavourite(state, melody) {
        const idx = state.favourites.indexOf(melody);
        state.favourites.splice(idx, 1);
      },
      mutateMelodyName(state, name) {
        state.currentMelodyName = name;
      },
      mutateMelodyPath(state, path) {
        state.currentMelodyPath = path;
      },
      mutatePianoWidth(state, width) {
        state.pianoWidth = width;
      },
      mutatePianoHeight(state, height) {
        state.pianoHeight = height;
      },
      mutateNotes(state, notes) {
        state.notes = notes;
      },
      mutateMelodies(state, melodies) {
        state.melodies = melodies;
      },
      mutateDisplayNotes(state, displayNotes) {
        state.displayNotes.length = 0;
        state.displayNotes.push(...displayNotes);
      },
      mutateCurrentTime(state, currentTime) {
        state.currentTime = currentTime;
      },
      mutateCurrentLoopTime(state, currentLoopTime) {
        state.currentLoopTime = currentLoopTime;
      },
      mutateIsLoopActive(state, isLoopActive) {
        state.isLoopActive = isLoopActive;
      },
      mutatePianoDimensions(state, pianoDimensions) {
        state.pianoDimensions = pianoDimensions;
      },
      setCount(state, count) {
        state.pauseClickCount = count;
      },
      changeCount(state) {
        state.pauseClickCount++;
      },
    },
    actions: {
      setPianoSize({ commit }) {
        const container = document.querySelector(`.${pianoContainerClass}`);
        commit('mutatePianoWidth', container.clientWidth);
        commit('mutatePianoHeight', container.clientHeight);
        commit(
          'mutatePianoDimensions',
          getPianoDimensions(container.clientWidth, container.clientHeight)
        );
        // console.log(container.clientWidth, container.clientHeight);
      },
      setNotes({ commit }, notes) {
        commit('mutateNotes', notes);
      },
      setLoopActive({ commit }, isLoopActive) {
        commit('mutateIsLoopActive', isLoopActive);
        // console.log('isLoopActive ' + this.isLoopActive);
      },
      setCurrentLoopTime({ commit }, currentTime) {
        const currentLoopTime = currentTime + 5;
        commit('mutateCurrentLoopTime', currentLoopTime);
        console.log('1 currentLoopTime ' + this.currentLoopTime);
      },
      calculateDisplayNotes({ commit, state }, currentTime) {
        // console.log('notes time ' + currentTime);
        const displayNotes = state.notes.filter(
          (note) =>
            note.time - (currentTime - showNotesTimeInterval) <
              showNotesTimeInterval + beforeShowInterval &&
            note.time - (currentTime - showNotesTimeInterval) >
              afterShowInterval * -1
        );
        commit('mutateCurrentTime', currentTime);
        commit('mutateDisplayNotes', displayNotes);
      },
      clearDisplayNotes({ commit }) {
        // console.log('clearDisplayNotes');
        commit('mutateDisplayNotes', []);
      },
      setCount({ commit }, count) {
        commit('setCount', count);
      },
      changeCount({ commit }) {
        commit('changeCount');
      },
    },
  });

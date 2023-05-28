import { whiteNoteHeight, NoteNames, OctaveNames } from '@/constants';
import { bottomLineHeight, sideLineWidth } from '../constants';

class Note {
  constructor(name, x, y, width, height) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Octave {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.notes = {};
  }

  getNotes(whiteNoteWidth) {
    const noteNames = Object.values(NoteNames).filter(
      (noteName) =>
        (this.name === OctaveNames.Octave0 &&
          [NoteNames.A, NoteNames.B].includes(noteName)) ||
        (this.name === OctaveNames.Octave8 &&
          [NoteNames.C].includes(noteName)) ||
        [
          OctaveNames.Octave1,
          OctaveNames.Octave2,
          OctaveNames.Octave3,
          OctaveNames.Octave4,
          OctaveNames.Octave5,
          OctaveNames.Octave6,
          OctaveNames.Octave7,
        ].includes(this.name)
    );

    const whiteNotes = noteNames.map((note) => {
      return new Note(
        note,
        this.getWhiteNoteX(note, whiteNoteWidth),
        this.y,
        whiteNoteWidth,
        whiteNoteHeight
      );
    });

    const blackNoteWidth = (whiteNoteWidth / 5) * 2;
    const blackNoteHeight = (whiteNoteHeight / 3) * 2;

    const blackNotes = noteNames
      .filter(
        (noteName) =>
          ![NoteNames.E, NoteNames.B].includes(noteName) &&
          !(noteName === NoteNames.C && this.name === OctaveNames.Octave8)
      )
      .map((note) => {
        return new Note(
          `${note}#`,
          this.getBlackNoteX(whiteNotes, note),
          this.y,
          blackNoteWidth,
          blackNoteHeight
        );
      });

    this.notes = {
      white: whiteNotes,
      black: blackNotes,
    };
  }

  getBlackNoteX(whiteNotes, note) {
    const whiteNote = whiteNotes.find((n) => n.name === note);
    return whiteNote.x + whiteNote.width - whiteNote.width / 5;
  }

  getWhiteNoteX(note, whiteNoteWidth) {
    switch (note) {
      case NoteNames.C:
        return this.x;
      case NoteNames.D:
        return this.x + whiteNoteWidth;
      case NoteNames.E:
        return this.x + whiteNoteWidth * 2;
      case NoteNames.F:
        return this.x + whiteNoteWidth * 3;
      case NoteNames.G:
        return this.x + whiteNoteWidth * 4;
      case NoteNames.A:
        return this.name === OctaveNames.Octave0
          ? this.x
          : this.x + whiteNoteWidth * 5;
      case NoteNames.B:
        return this.name === OctaveNames.Octave0
          ? this.x + whiteNoteWidth
          : this.x + whiteNoteWidth * 6;
    }
  }
}

export const getPianoDimensions = (containerWidth, containerHeight) => {
  if (!containerHeight || !containerHeight) return { trackHeight: 0 }; //{}

  // black field with moving parts
  const trackHeight = containerHeight - whiteNoteHeight;

  const octaves = getOctaves(
    containerWidth,
    containerHeight - whiteNoteHeight - bottomLineHeight
  );

  return {
    trackHeight,
    octaves,
  };
};

const getOctaves = (containerWidth, yStart) => {
  // 52 white notes
  const whiteNoteWidth = (containerWidth - sideLineWidth * 2) / 52;

  return Object.values(OctaveNames).map((octave) => {
    const octaveObj = new Octave(
      octave,
      getOctaveX(octave, whiteNoteWidth),
      yStart
    );
    octaveObj.getNotes(whiteNoteWidth);
    return octaveObj;
  });
};

const getOctaveX = (octave, whiteNoteWidth) => {
  if (octave === OctaveNames.Octave0) return sideLineWidth;
  else {
    return (
      sideLineWidth + 2 * whiteNoteWidth + (+octave - 1) * whiteNoteWidth * 7
    );
  }
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISongState, ISongUnsaved, ISong } from "../utils/types";

let initialState: ISongState = {
  songs: [],
  pending: false,
};

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    add_song_requested: (state, action: PayloadAction<ISongUnsaved>) => state,
    update_song_requested: (state, action: PayloadAction<ISong>) => state,
    delete_song_requested: (state, action: PayloadAction<ISong>) => state,

    get_songs: (state) => {
      state.pending = true;
    },

    add_song: (state, action: PayloadAction<ISong>) => {
      state.songs.push({
        ...action.payload,
      });
    },

    update_song: (state, action: PayloadAction<ISong>) => {
      state.songs = state.songs.map((song) => {
        return song._id === action.payload._id
          ? { ...song, ...action.payload }
          : song;
      });
    },

    delete_song: (state, action: PayloadAction<ISong>) => {
      state.songs = state.songs.filter(
        (song) => song._id !== action.payload._id
      );
    },

    set_songs: (state, action: PayloadAction<ISong[]>) => {
      state.songs = action.payload;
      state.pending = false;
    },
  },
});

export const {
  add_song_requested,
  update_song_requested,
  delete_song_requested,
  add_song,
  update_song,
  delete_song,
  set_songs,
} = songSlice.actions;
export type SongAction = ReturnType<typeof add_song>
export default songSlice.reducer
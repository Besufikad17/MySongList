import axios from "axios"
import { ISong } from "../utils/types"

const BASE_URL = import.meta.env.VITE_API_URL

const add_song = (song: ISong):Promise<ISong> => {
    console.log(song);
    return axios.post(BASE_URL + "/add", song).then(response => response.data.data)
}

const get_songs = ():Promise<ISong[]> => {
    return axios.get(BASE_URL + "/all").then(response => response.data.data)
}

const update_song = (song: ISong):Promise<ISong> => {
    return axios.put(BASE_URL + `update/${song.id ? song.id : song._id}`, song).then(response => response.data.data)
}

const delete_song = (song: ISong):Promise<ISong> => {
    return axios.delete(BASE_URL + `delete/${song.id ? song.id : song._id}`).then(response => response.data.data)
}

export default { add_song, get_songs, update_song, delete_song }
export interface ISongUnsaved {
  url: string;
  title: string;
  artist: string;
  id?: string;
}

export interface ISong extends ISongUnsaved {
  _id: string;
}

export interface IAction {
  song: ISong;
}

export interface ISongState {
  songs: Array<ISong>;
  pending: boolean;
}

export interface ICloud {
  cloudName: string;
  uploadPreset: string;
  tags: Array<string>;
  maxImageWidth: Number;
  sources: Array<string>;
}

export interface ICloudWidget {
  cloud_name: string;
  upload_preset: string;
  onImageUpload: any;
}

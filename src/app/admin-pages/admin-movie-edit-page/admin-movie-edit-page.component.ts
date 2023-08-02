import { Component } from '@angular/core';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-movie-edit-page',
  templateUrl: './admin-movie-edit-page.component.html',
  styleUrls: ['./admin-movie-edit-page.component.css']
})
export class AdminMovieEditPageComponent {
  public file: any = {};

  public imagePreviewURL: string | ArrayBuffer | null = null;

  constructor(public storage: Storage) { }

  chooseFile(event: any) {
    this.file = event.target.files[0];
    this.previewImage();
  }

  addImage() {
    const storageRef = ref(this.storage, 'MovieImages/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagePreviewURL = event.target.result;
    };
    reader.readAsDataURL(this.file);
  }
}

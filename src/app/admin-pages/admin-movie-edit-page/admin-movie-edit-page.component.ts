import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/features/alert/services/alert.service';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/services/movie.service';

@Component({
  selector: 'app-admin-movie-edit-page',
  templateUrl: './admin-movie-edit-page.component.html',
  styleUrls: ['./admin-movie-edit-page.component.css']
})
export class AdminMovieEditPageComponent implements OnInit {
  movieEdit!: FormGroup;
  submitted = false;
  public file: any = {};

  public imagePreviewURL: string | ArrayBuffer | null = null;

  constructor(public storage: Storage, 
    private fb: FormBuilder,
    private movieService: MovieService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.movieEdit = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      language: ['', Validators.required],
      director: ['', Validators.required],
      releaseDate: ['', Validators.required],
    })
  }

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
        console.log('Upload is ' + progress + '')
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

  onSubmit() {
    this.submitted = true;

    if(this.movieEdit.invalid) {
      return;
    }

    this.movieService.AddMovie(this.movieEdit.value as Movie).subscribe({
      next: () => {
        this.alertService.success("Movie added successfully");
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

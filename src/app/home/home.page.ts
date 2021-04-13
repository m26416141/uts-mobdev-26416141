import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface data {
  judul: string;
  isi: string;
  tanggal: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // items = ['apple', 'cherry', 'banana'];

  public isiData : Observable<data[]>;
  public isiDataCol : AngularFirestoreCollection<data>;
  public Judul : string;
  public Isi : string;
  public Tanggal = new Date().toISOString();

  constructor(afs : AngularFirestore) {
    this.isiDataCol = afs.collection('dataCoba');
    this.isiData = this.isiDataCol.valueChanges();
  }

  save() {
    this.isiDataCol.doc(this.Judul).set({
      judul : this.Judul,
      isi : this.Isi,
      tanggal : this.Tanggal
    });
    // console.log(this.Tanggal)
  }

}

import { Component } from '@angular/core';
import { SpotiService } from './Service/spoti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'start';
  tracks:any[];
  mostrar:boolean=true;
  preview:string;
  url:string="";
  idtrack:string="";
  
  constructor(private spoti:SpotiService ){
    spoti.getData("The beatles").subscribe((data:any)=>{
      this.tracks=data.tracks.items;
      console.log(this.tracks);
    });
  }
  show(e){
    this.spoti.getData(e).subscribe((data:any)=>{
      this.tracks=data.tracks.items
    })
  }
  add(data){
    console.log(data);
  }
  sound(id){
    this.idtrack=id;
  }
  a(){
    console.log("a");
  }
  play(id){
    this.spoti.getTrack(id).subscribe((data:any)=>{
      console.log(data.tracks[0].preview_url);
      this.url=data.tracks[0].preview_url
      this.mostrar=true
    })



    
  }
  stop(){
    this.mostrar=false
  }





  crear(){
    this.mostrar=(this.mostrar)?false:true;
  }
  crearPlaylist(){
    this.spoti.setPlaylist();
  }




}

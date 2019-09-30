import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotiService {

  token="Bearer BQBW8g8UN5EA-ku6swFeKNR8dVIE81YzOVGN-OUNZmEhShfLRuPMEwhhicHO3KxYcfYEwnxJ3Cjw7v5dQqjvzFF4t11DaipvBkWpnIC527ADbajwKaIm2bOkRwPnm7nlEHu96WGdDzuEjzum9B-_GKSG4ZVF07nGTUc96bsWKx9qfrqOtKsgfZZmnJYQr1sXE5KAeMH7vRc_w50NsiWN1YHEuwBe"

  constructor(private http: HttpClient) { }
  getData(artista){
    const headers= new HttpHeaders({
      'Authorization':this.token
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=track&market=MX&limit=21`,{headers})

  }
  getTrack(track){
    const headers:any={
      'Authorization':this.token
    }
    return this.http.get(`https://api.spotify.com/v1/tracks?ids=${track}&market=ES`,{headers})
    
  }
  setPlaylist(){
    const url="https://api.spotify.com/v1/playlists/3YwgyZfjEO7nnuTceRRXJn/tracks?uris=spotify%3Atrack%3A3skn2lauGk7Dx6bVIt5DVj"
    const headers={
      'Authorization':'Bearer BQBW8g8UN5EA-ku6swFeKNR8dVIE81YzOVGN-OUNZmEhShfLRuPMEwhhicHO3KxYcfYEwnxJ3Cjw7v5dQqjvzFF4t11DaipvBkWpnIC527ADbajwKaIm2bOkRwPnm7nlEHu96WGdDzuEjzum9B-_GKSG4ZVF07nGTUc96bsWKx9qfrqOtKsgfZZmnJYQr1sXE5KAeMH7vRc_w50NsiWN1YHEuwBe'
    };
    this.http.post(url,{headers}).subscribe((data:any)=>{
      console.log(data);
    })
  }



}

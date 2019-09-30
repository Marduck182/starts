import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'track'
})
export class TrackPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){

  }

  transform(value): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/track/"+value); 
    
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Contácto: <b><a href="https://wa.me/526143824161" target="_blank">Nahim Rodriguez</a></b>
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/NahimRgz/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://wa.me/526143824161" target="_blank" class="ion ion-social-whatsapp"></a>
    </div>
  `,
})
export class FooterComponent {
}

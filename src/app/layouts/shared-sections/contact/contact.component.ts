import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  emailResult = undefined;
  textCss = '';
  success = false;

  constructor(
      private fb: FormBuilder,
      private readonly http: HttpClient
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.contactForm.status === 'VALID') {
      this.emailResult = undefined;
      this.loading = true;
      const emailUrl = 'https://api.emailjs.com/api/v1.0/email/send';
      const emailData = {
        service_id: 'service_s516xtk',
        template_id: 'template_wgoo7lg',
        user_id: 'user_rTG6qT9eUcfz9irOv6Tsi',
        template_params: {
          message: this.generateMessage(),
        }
      };
      this.http.post(emailUrl, emailData, {responseType: 'text'})
          .subscribe(result => {
            this.emailResult = 'Mensaje exitoso, en un momento nos pondremos en contacto contigo.';
            this.textCss = 'form-success-msg'
            this.success = true;
            this.loading = false;
          }, error => {
            this.emailResult = 'Mensaje no enviado debido a un problema de conexión, intentelo más tarde';
            this.textCss = 'form-error-msg'
            this.loading = false;
          });
    } else {
      this.emailResult = 'Debe llenar los datos primero señalados.';
      this.textCss = 'form-error-msg'
    }
  }

  generateMessage() {
    return 'Nombre: ' + this.contactForm.value.name + ',' +
        'Email: ' + this.contactForm.value.email + ',' +
        'Teléfono: ' + this.contactForm.value.telephone + ',' +
        'Mensaje: ' + this.contactForm.value.message + '.';
  }

}

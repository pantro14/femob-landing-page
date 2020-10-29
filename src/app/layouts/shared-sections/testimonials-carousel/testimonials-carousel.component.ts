import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  public carouselOptions: any;
  public testimonials = [{
    photo: 'assets/images/doctor-1.jpg',
    text: `“Decidí estudiar ortodoncia y ortopedia maxilar porque en esta especialidad puedo tratar a un gran parte de la población desde
            niños hasta adultos mayores, generando cambios significativos en la vida de pequeños y grandes, partiendo que la correcta posición de
            los maxilares (huesos) y dientes nos llevaran a tener una adecuada función  y estética orofacial. ”`,
    title: 'María del Pilar Barba Martinez',
    subtitle: 'Odontóloga General Universidad Javeriana',
    speciality: 'Ortodoncista y Ortopedia Maxilar Universidad Santo Tomas'
  }, {
    photo: 'assets/images/doctor-2.jpg',
    text: `"Soy odontóloga y me especialicé en rehabilitación oral, porque tengo claro que tener una boca sana y devolver sonrisas,
            es importante para una adecuada salud fisica y emocional, generando seguridad y felicidad a mis pacientes."`,
    title: 'Luz Katherine Calderon Gutierrez',
    subtitle: 'Odontóloga General Universidad Santo Tomas',
    speciality: 'Rehabilitación Oral y Estética Universidad Santo Tomas'
  }, {
    photo: 'assets/images/doctor-3.jpg',
    text: `"Decidí ser Odontóloga y especialista en Endodoncia ya que es un gran reto y una satisfacción poder brindar tanto a
            niños como a la población adulta solución a sus diferentes patologías y alivio a sus dolencias."`,
    title: 'Diana Marcela Pardo Corzo',
    subtitle: 'Odontóloga General Universidad Santo Tomas',
    speciality: 'Endodoncia Universidad Santo Tomas'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: false
    }
  }

}

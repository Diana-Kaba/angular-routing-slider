import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  imgSrc = 'public/198-536x354.jpg';

  ngAfterViewInit() {
    const arrOfSrc = ['public/198-536x354.jpg', 'public/274-536x354.jpg', 'public/287-536x354.jpg', 'public/671-536x354.jpg', 'public/834-536x354.jpg'];
    const btnNext = document.querySelector("#next");
    const btnPrev = document.querySelector("#prev");
    const img: HTMLImageElement | null = document.querySelector("img");
    let i = 0;

    function toNext() {
      if (img) {
        i++;
        if (i === arrOfSrc.length) {
          i = 0;
        }
        img.src = arrOfSrc[i];
      }
    }

    function toPrev() {
      if (img) {
        if (i === 0) {
          i = arrOfSrc.length;
        } else if (i === arrOfSrc.length) {
          i = 0;
        }
        i--;
        img.src = arrOfSrc[i];
      }
    }

    btnNext?.addEventListener('click', toNext);
    btnPrev?.addEventListener('click', toPrev);

    document.addEventListener('keydown', function (e) {
      if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        toNext();
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        toPrev();
      }
    });
  }
}


import { Component, Input } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images = [
    { id: 'image1', imageLink: '../../../assets/ad1.PNG' },
    { id: 'image2', imageLink: '../../../assets/ad.png' },
    { id: 'image3', imageLink: '../../../assets/jackpot-ad.png' },
    { id: 'image4', imageLink: '../../../assets/ad1.PNG' },
  ];

  items: any[] | undefined;
  imageId: string = '';
  carouselId: string = 'carousel-main';

  ngAfterViewInit() {
    setTimeout(() => {
      this.firstImageWidth = document.querySelectorAll(
        `#${this.images[0].id}`
      )[0].clientWidth;
    }, 1000);
    this.carousel = document.getElementById(this.carouselId)!;

    this.mouseDown$ = fromEvent(this.carousel, 'mousedown').subscribe(
      (x: any) => this.dragStart(x)
    );
    this.touchStart$ = fromEvent(this.carousel, 'touchstart').subscribe(
      (x: any) => this.dragStart(x)
    );
    this.mouseMove$ = fromEvent(this.carousel, 'mousemove').subscribe(
      (x: any) => this.drag(x)
    );
    this.touchMove$ = fromEvent(this.carousel, 'touchmove').subscribe(
      (x: any) => this.drag(x)
    );
    this.mouseUp$ = fromEvent(this.carousel, 'mouseup').subscribe(() =>
      this.dragStop()
    );
    this.mouseLeave$ = fromEvent(this.carousel, 'mouseleave').subscribe(() =>
      this.dragStop()
    );
    this.touchEnd$ = fromEvent(this.carousel, 'touchend').subscribe(() =>
      this.dragStop()
    );
  }

  private mouseDown$: Observable<MouseEvent> | any;
  private touchStart$: Observable<MouseEvent> | any;
  private mouseMove$: Observable<MouseEvent> | any;
  private touchMove$: Observable<MouseEvent> | any;
  private mouseUp$: Observable<MouseEvent> | any;
  private mouseLeave$: Observable<MouseEvent> | any;
  private touchEnd$: Observable<MouseEvent> | any;
  isDragStart = false;
  prevPageX: any;
  prevScrollLeft: any;
  carousel: any;
  firstImageWidth: any;
  positionDiff: any;
  isDragging = false;

  dragStart(x: any) {
    this.isDragStart = true;
    this.prevPageX = x.pageX || x.touches[0].pageX;
    this.prevScrollLeft = this.carousel.scrollLeft;
  }

  drag(x: any) {
    if (!this.isDragStart) return;
    x.preventDefault();
    this.isDragging = true;
    this.carousel.classList.add('dragging');
    this.positionDiff = (x.pageX || x.touches[0].pageX) - this.prevPageX;
    this.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
  }

  dragStop() {
    this.isDragStart = false;
    this.carousel.classList.remove('dragging');
    if (!this.isDragging) return;
    this.isDragging = false;
    this.autoSlide();
  }

  autoSlide() {
    if (
      this.carousel.scrollLeft ==
      this.carousel.scrollWidth - this.carousel.clientWidth
    )
      return;
    this.positionDiff = Math.abs(this.positionDiff);
    this.positionDiff = this.positionDiff % (this.firstImageWidth + 14);
    let valDifference = this.firstImageWidth + 14 - this.positionDiff;
    if (this.carousel.scrollLeft > this.prevScrollLeft) {
      return (this.carousel.scrollLeft +=
        this.positionDiff > this.firstImageWidth / 10
          ? valDifference
          : -this.positionDiff);
    }
    this.carousel.scrollLeft -=
      this.positionDiff > this.firstImageWidth / 10
        ? valDifference
        : -this.positionDiff;
  }

  ngOnDestroy(): void {
    this.mouseDown$.unsubscribe();
    this.mouseUp$.unsubscribe();
    this.mouseLeave$.unsubscribe();
    this.mouseMove$.unsubscribe();
    this.touchStart$.unsubscribe();
    this.touchEnd$.unsubscribe();
    this.touchMove$.unsubscribe();
  }
}

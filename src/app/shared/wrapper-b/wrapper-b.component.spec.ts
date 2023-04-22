import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperBComponent } from './wrapper-b.component';

describe('WrapperBComponent', () => {
  let component: WrapperBComponent;
  let fixture: ComponentFixture<WrapperBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

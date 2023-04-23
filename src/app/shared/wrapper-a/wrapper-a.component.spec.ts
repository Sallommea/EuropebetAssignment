import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperAComponent } from './wrapper-a.component';

describe('WrapperAComponent', () => {
  let component: WrapperAComponent;
  let fixture: ComponentFixture<WrapperAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

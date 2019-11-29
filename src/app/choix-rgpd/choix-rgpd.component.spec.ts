import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixRgpdComponent } from './choix-rgpd.component';

describe('ChoixRgpdComponent', () => {
  let component: ChoixRgpdComponent;
  let fixture: ComponentFixture<ChoixRgpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixRgpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixRgpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonComponentComponent } from './balloon-component.component';

describe('BalloonComponentComponent', () => {
  let component: BalloonComponentComponent;
  let fixture: ComponentFixture<BalloonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

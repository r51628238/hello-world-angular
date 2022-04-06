import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcomponentComponent } from './textcomponent.component';

describe('TextcomponentComponent', () => {
  let component: TextcomponentComponent;
  let fixture: ComponentFixture<TextcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

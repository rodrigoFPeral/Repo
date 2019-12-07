import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigantionPannelComponent } from './navigantion-pannel.component';

describe('NavigantionPannelComponent', () => {
  let component: NavigantionPannelComponent;
  let fixture: ComponentFixture<NavigantionPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigantionPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigantionPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

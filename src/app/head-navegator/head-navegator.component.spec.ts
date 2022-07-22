import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNavegatorComponent } from './head-navegator.component';

describe('HeadNavegatorComponent', () => {
  let component: HeadNavegatorComponent;
  let fixture: ComponentFixture<HeadNavegatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadNavegatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadNavegatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

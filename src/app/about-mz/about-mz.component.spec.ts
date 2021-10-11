import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMzComponent } from './about-mz.component';

describe('AboutMzComponent', () => {
  let component: AboutMzComponent;
  let fixture: ComponentFixture<AboutMzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

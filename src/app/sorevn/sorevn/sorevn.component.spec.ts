import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorevnComponent } from './sorevn.component';

describe('SorevnComponent', () => {
  let component: SorevnComponent;
  let fixture: ComponentFixture<SorevnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorevnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorevnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

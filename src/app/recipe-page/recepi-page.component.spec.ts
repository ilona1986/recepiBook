import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiPageComponent } from './recepi-page.component';

describe('RecepiPageComponent', () => {
  let component: RecepiPageComponent;
  let fixture: ComponentFixture<RecepiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreinosCarrosselComponent } from './treinos-carrossel.component';

describe('TreinosCarrosselComponent', () => {
  let component: TreinosCarrosselComponent;
  let fixture: ComponentFixture<TreinosCarrosselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TreinosCarrosselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TreinosCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

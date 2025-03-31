import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTowerComponent } from './stack-tower.component';

describe('StackTowerComponent', () => {
  let component: StackTowerComponent;
  let fixture: ComponentFixture<StackTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackTowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

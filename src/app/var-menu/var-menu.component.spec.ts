import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarMenuComponent } from './var-menu.component';

describe('VarMenuComponent', () => {
  let component: VarMenuComponent;
  let fixture: ComponentFixture<VarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

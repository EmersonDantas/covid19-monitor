import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesAndDeathsComponent } from './cases-and-deaths.component';

describe('CasesAndDeathsComponent', () => {
  let component: CasesAndDeathsComponent;
  let fixture: ComponentFixture<CasesAndDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesAndDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesAndDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

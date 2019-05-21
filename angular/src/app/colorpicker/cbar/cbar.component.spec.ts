import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbarComponent } from './cbar.component';

describe('CbarComponent', () => {
  let component: CbarComponent;
  let fixture: ComponentFixture<CbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

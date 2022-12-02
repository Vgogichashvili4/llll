import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedFullUserInfoPgComponent } from './med-full-user-info-pg.component';

describe('MedFullUserInfoPgComponent', () => {
  let component: MedFullUserInfoPgComponent;
  let fixture: ComponentFixture<MedFullUserInfoPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedFullUserInfoPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedFullUserInfoPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

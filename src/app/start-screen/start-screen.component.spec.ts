import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { StartScreenComponent } from './start-screen.component';

describe('StartScreenComponent', () => {
  let component: StartScreenComponent;
  let fixture: ComponentFixture<StartScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(environment.firebase), RouterTestingModule],
      declarations: [ StartScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

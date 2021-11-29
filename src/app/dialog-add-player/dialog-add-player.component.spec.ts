import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { DialogAddPlayerComponent } from './dialog-add-player.component';

describe('DialogAddPlayerComponent', () => {
  let component: DialogAddPlayerComponent;
  let fixture: ComponentFixture<DialogAddPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddPlayerComponent ],
      providers: [{provide: MatDialogRef, useValue: []}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

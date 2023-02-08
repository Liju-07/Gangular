import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Google Sign-In button when the user is not logged in', () => {
    component.user = false;
    fixture.detectChanges();

    const signInButton = debugElement.query(By.css('asl-google-signin-button'));
    expect(signInButton).toBeTruthy();
  });

  it('should not show the Google Sign-In button when the user is logged in', () => {
    component.user = true;
    fixture.detectChanges();

    const signInButton = debugElement.query(By.css('asl-google-signin-button'));
    expect(signInButton).toBeFalsy();
  });
});

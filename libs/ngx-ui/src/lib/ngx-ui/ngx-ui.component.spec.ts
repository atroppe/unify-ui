import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxUiComponent } from './ngx-ui.component';

describe('NgxUiComponent', () => {
  let component: NgxUiComponent;
  let fixture: ComponentFixture<NgxUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

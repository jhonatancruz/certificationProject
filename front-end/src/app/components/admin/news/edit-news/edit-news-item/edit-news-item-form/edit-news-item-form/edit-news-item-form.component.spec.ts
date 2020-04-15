import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsItemFormComponent } from './edit-news-item-form.component';

describe('EditNewsItemFormComponent', () => {
  let component: EditNewsItemFormComponent;
  let fixture: ComponentFixture<EditNewsItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

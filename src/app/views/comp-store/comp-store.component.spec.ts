import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompStoreComponent } from './comp-store.component';

describe('CompStoreComponent', () => {
  let component: CompStoreComponent;
  let fixture: ComponentFixture<CompStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

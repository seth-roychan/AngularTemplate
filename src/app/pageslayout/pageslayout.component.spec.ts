import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslayoutComponent } from './pageslayout.component';

describe('PageslayoutComponent', () => {
  let component: PageslayoutComponent;
  let fixture: ComponentFixture<PageslayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageslayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

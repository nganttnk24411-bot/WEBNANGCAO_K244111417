import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceGroupCustomers } from './service-group-customers';

describe('ServiceGroupCustomers', () => {
  let component: ServiceGroupCustomers;
  let fixture: ComponentFixture<ServiceGroupCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceGroupCustomers],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceGroupCustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

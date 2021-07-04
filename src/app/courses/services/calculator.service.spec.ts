import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('Calculator service', () => {
  let calcService: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService, useValue: loggerSpy,
        }
      ]
    });

    calcService = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    const result1 = calcService.add(1, 2);
    const result2 = calcService.add(-4, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(-2);

    expect(loggerSpy.log).toHaveBeenCalledTimes(2);
  });

  it('should subtract two numbers', () => {
    const result1 = calcService.subtract(4, 2);
    const result2 = calcService.subtract(0, 2);

    expect(result1).toBe(2);
    expect(result2).toBe(-2);

    expect(loggerSpy.log).toHaveBeenCalledTimes(2);
  });

});

import { Directive, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
} from '@angular/forms';
import { Subject, distinctUntilChanged, startWith, takeUntil, tap } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[appControlValueAccesorGeneric]',
  providers: [
    {
      provide: DefaultValueAccessor,
      useExisting: ControlValueAccesorGenericDirective,
    },
  ],
})
export class ControlValueAccesorGenericDirective<T>
  implements ControlValueAccessor, OnInit, OnDestroy
{
  formAccesorValue!: T;
  control = new FormControl();

  private _disabled = false;
  private _destroy$ = new Subject<void>();
  private _onTouched!: () => T;

  constructor(@Inject(Injector) private injector: Injector) {}
  ngOnInit(): void {
    this.setFormControl();
  }

  setFormControl() {
    try {
      const formControl = this.injector.get(FormControl);

      switch (formControl.constructor) {
        case FormControlName:
          this.control = this.injector
            .get(FormGroupDirective)
            .getControl(formControl as unknown as FormControlName);
          break;
        default:
          this.control = (formControl as unknown as FormControlDirective)
            .form as FormControl;
          break;
      }
    } catch (err) {
      this.control = new FormControl();
    }
  }

  writeValue(value: T): void {
    this.control
      ? this.control.setValue(value)
      : (this.control = new FormControl(value));
    this.control.markAsTouched();
    this.formAccesorValue = value;
  }
  registerOnChange(fn: (val: T | null) => T): void {
    this.control?.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        startWith(this.control.value),
        distinctUntilChanged(),
        tap((val) => fn(val))
      )
      .subscribe(() => this.control?.markAsUntouched());
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(_disabled: boolean): void {
    this._disabled = _disabled;
    if (this.control) {
      if (_disabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }
  }

  get disabled(): boolean {
    return this._disabled;
  }

  ngOnDestroy(): void {
    console.log('destroy in directive');
    this._destroy$.next();
    this._destroy$.complete();
  }
}

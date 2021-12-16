import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { discountSmallerThanPrice } from 'src/app/shared/discount-smaller-than-price.validator'

@Directive({
  selector: '[discountSmallerThanPrice]',
  providers: [{ provide: NG_VALIDATORS, useExisting:DiscountSmallerThanPriceDirective, multi: true}]
})
export class DiscountSmallerThanPriceDirective {
  @Input('discountSmallerThanPrice') discountSmallerThanPrice: string[]=[];
  
  validate(formGroup: FormGroup): ValidationErrors{
    return discountSmallerThanPrice(this.discountSmallerThanPrice[0], this.discountSmallerThanPrice[1])(formGroup);
  }

}
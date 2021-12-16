import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function discountSmallerThanPrice(discount: string, price: string) {
    return (formGroup: FormGroup) => {
        const discountControl = formGroup.controls[discount];
        const priceControl  = formGroup.controls[price];

        // return null if controls haven't initialised yet
        if (!discountControl || !priceControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (discountControl .errors && !priceControl.errors?.['discountSmallerThanPrice']) {
           return null;
        }

        // set error on matchingControl if validation fails
        if (discountControl.value > priceControl.value) {
            discountControl.setErrors({ discountSmallerThanPrice: true });
            return null as any;
        } else {
            discountControl.setErrors(null);
            return null as any;
        }
    }
}

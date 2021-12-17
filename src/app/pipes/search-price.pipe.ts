import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search-price'
})
export class SearchPricePipe implements PipeTransform 
{

    transform(contents: any, filterString: String): any
    {
        // if no match is found then return everything
        if (contents.length === 0 || filterString === '')
        {
            return contents;
        }

        const results = [];

        for (const item of contents)
        {
            if ( item.price.toLocaleLowerCase().match( filterString.toLocaleLowerCase() ) )
            {
                results.push(item);
            }
        }

        return results;
    }

}

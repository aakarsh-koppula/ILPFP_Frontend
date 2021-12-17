import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform 
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
            if ( item.name.toLocaleLowerCase().match( filterString.toLocaleLowerCase() ) )
            {
                results.push(item);
            }
            else if ( item.description.toLocaleLowerCase().match( filterString.toLocaleLowerCase() ) )
            {
                results.push(item);
            }
        }

        return results;
    }

}

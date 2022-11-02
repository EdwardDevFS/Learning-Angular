import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{


    transform(values: string[], arg: string): string[] {

        if(!arg || arg?.length < 3) return values;
        let resultado: string[]= [];

        for(const value of values){
            if(value.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                resultado = [...resultado,value]
            }
        }
        return resultado;
    }

}
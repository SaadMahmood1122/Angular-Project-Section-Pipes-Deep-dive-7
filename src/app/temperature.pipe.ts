import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  // this method will automatically excute when place the pipe in template
  transform(value: number, unit: 'C' | 'F' = 'C'): string {
    if (value === null || value === undefined) {
      return `${value}`;
    }

    let convertedValue: number;

    if (unit === 'F') {
      // Fahrenheit to Celsius
      convertedValue = ((value - 32) * 5) / 9;
    } else if (unit === 'C') {
      // Celsius to Fahrenheit
      convertedValue = (value * 9) / 5 + 32;
    } else {
      convertedValue = value; // Default case (no conversion)
    }

    // Return the value rounded to 2 decimal places
    return `${convertedValue.toFixed(2)}°${unit}`;
  }
}

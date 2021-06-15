import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'trunkText' })
export class TrunkTextPipe implements PipeTransform {
  transform(text: string, maxsize: number): string {
    if (text) {
      if (maxsize) {
        if (text.length > 13) {
          return (
            text.substring(0, maxsize - 3) +
            '...'
          )
        } else {
          return text
        }
      } else {
        return text
      }
    } else {
      return ''
    }
  }
}

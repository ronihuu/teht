import { Service } from '@angular/core';

/*
Service tarjoaa yhteisiä palveluita kaikille komponenteille ja 
joskus muillekkin rakenneosille. Tärkeä osa angularin arkkitehtuuria.
*/

//@Service - dekoraattori antaa Servicelle servicen ominaisuudet

@Service()
export class CalculatorService {
  //laskumetodit voidaan laittaa serviceen ja niitä voidaan kutsua sieltä
  //kaikkiin komponentteihin
  public calculate1(price: number, percent: number) {
    return Number((price * (1 + percent * 0.01)).toFixed(2));
  }

  public calculate2(price: number, newprice: number) {
    return Number((((newprice - price) / price) * 100).toFixed(2));
  }
}

export class TimeUtils {

  /**
   * @description This method is to get today date
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static getNowDate(): Date {
    return new Date();
  }

  /**
   * @description This method is to prepare string today
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static getTodayString(): string {
    let today = this.getNowDate();
    return `${today.getFullYear()}-${this.getNumberWithZero(today.getMonth() + 1)}-${this.getNumberWithZero(today.getDate())}`; // 1994-03-14
  }

  /**
   * @description This method is to get string number by zero
   * 
   * @param number 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static getNumberWithZero(number: number): string {
    return number > 9 ? `${number}` : `0${number}`;
  }

  /**
   * @description This method is to get date to string in normally format
   * 
   * @param date 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static dateToStringFormat(date: Date) {
    return `${date.getFullYear()}-${this.getNumberWithZero(date.getMonth() + 1)}-${this.getNumberWithZero(date.getDate())}`; // 1994-03-14
  }

  /**
   * @description This method is to get difference days in two dates
   * 
   * @param initDate 
   * @param endDate 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static difDaysDates(initDate: Date, endDate: Date): number {
    let init = new Date(initDate).getTime();
    let end = new Date(endDate).getTime();
    let diff = end - init;
    return (Math.floor(diff/(1000*60*60*24)));
  }

}
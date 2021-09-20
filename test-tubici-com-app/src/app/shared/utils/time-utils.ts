export class TimeUtils {

  static getNowDate(): Date {
    return new Date();
  }

  static getTodayString(): string {
    let today = this.getNowDate();
    return `${today.getFullYear()}-${this.getNumberWithZero(today.getMonth() + 1)}-${this.getNumberWithZero(today.getDate())}`; // 1994-03-14
  }

  static getNumberWithZero(number: number): string {
    return number > 9 ? `${number}` : `0${number}`;
  }

  static dateToStringFormat(date: Date) {
    return `${date.getFullYear()}-${this.getNumberWithZero(date.getMonth() + 1)}-${this.getNumberWithZero(date.getDate())}`; // 1994-03-14
  }

  static difDaysDates(initDate: Date, endDate: Date): number {
    let init = new Date(initDate).getTime();
    let end = new Date(endDate).getTime();
    let diff = end - init;
    console.log(diff/(1000*60*60*24) );
    return (Math.floor(diff/(1000*60*60*24)));
  }

}
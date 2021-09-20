export class StorageUtils {

  static save(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  static get(key: string): string {
    return window.localStorage.getItem(key);
  }
}
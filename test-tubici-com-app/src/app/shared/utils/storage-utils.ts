export class StorageUtils {

  /**
   * @description This method is to save in local storage
   * 
   * @param key 
   * @param value 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static save(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  /**
   * @description This method is to get data fro local storage
   * 
   * @param key 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  static get(key: string): string {
    return window.localStorage.getItem(key);
  }
}
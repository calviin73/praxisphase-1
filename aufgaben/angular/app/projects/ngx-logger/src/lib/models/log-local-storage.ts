export interface LogLocalStorage {
    level: string;
    message: string;
    timestamp: Date;
  }
  
  export class LogLocalStorageService {
    private storageKey = 'ngx-logger-logs';
  
    saveLog(log: LogLocalStorage): void {
      const logs = this.getLogs();
      logs.push(log);
      localStorage.setItem(this.storageKey, JSON.stringify(logs));
    }
  
    getLogs(): LogLocalStorage[] {
      const logs = localStorage.getItem(this.storageKey);
      return logs ? JSON.parse(logs) : [];
    }
  
    clearLogs(): void {
      localStorage.removeItem(this.storageKey);
    }
  }
  
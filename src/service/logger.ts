enum LogLevel {
	Trace = "trace",
	Debug = "debug",
	Info = "info",
	Warn = "warn",
	Error = "error",
}
class Logger {
	public trace = (message: string): void => {
		this.logWithLevel(LogLevel.Trace, message);
	};
	public debug = (message: string): void => {
		this.logWithLevel(LogLevel.Debug, message);
	};
	public info = (message: string): void => {
		this.logWithLevel(LogLevel.Info, message);
	};
	public warn = (message: string): void => {
		this.logWithLevel(LogLevel.Warn, message);
	};
	public error = (message: string): void => {
		this.logWithLevel(LogLevel.Error, message);
	};
	private logWithLevel = (logLevel: LogLevel, message: string): void => {
		console[logLevel.toString() as LogLevel](message);
	};
}
const logger = new Logger();
export { logger as Logger };

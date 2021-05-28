interface Request {
  invalidateSession(): void;
  header(headerName: string): void;
  file(fileParameterName: string): void;
}

interface Response {
  set(name: string, value: string): Response;
  type(type: string): Response;
  send(content: string): void;
  sendFile(file: any): void;
  status(status: number): Response;
  /**
   * This method will render a component with data
   */
  render(route: string, data: any): void;
  redirect(path: string, query: string, status: number): void;
  cookie(cookie: any): void;
  clearCookie(name: string, path: string): void;
  sendError(errorCode: number, message: string): void;
}

/**
 * This method is triggered by a get request to a given route.
 *
 * Note! Server side only
 *
 * @param route The route which will trigger this method
 * @param callback The callback to trigger for the given route
 */
export function get(
  route: string,
  callback: (req: Request, res: Response) => void
): void;
/**
 * This method is triggered by a post request to a given route.
 *
 * Note! Server side only
 *
 * @param route The route which will trigger this method
 * @param callback The callback to trigger for the given route
 */
export function post(
  route: string,
  callback: (req: Request, res: Response) => void
): void;
/**
 * This method is triggered by a put request to a given route.
 *
 * Note! Server side only
 *
 * @param route The route which will trigger this method
 * @param callback The callback to trigger for the given route
 */
export function put(
  route: string,
  callback: (req: Request, res: Response) => void
): void;
// export function delete(route: string, callback: (req: Request, res: Response) => void):void;

/**
 * Note! Server side only
 *
 * @param callback The callback to trigger
 */
export function use(callback: () => void): void;

export function getUrl(url: string): string;
export function getStandaloneUrl(url: string): string;

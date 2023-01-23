import type { Node } from '../../types/javax/jcr/Node';

export interface Cookie {
  name: string;
  value: string;
  httpOnly?: boolean;
  secure?: boolean;
  maxAge?: number;
  sameSite?: 'Strict' | 'Lax' | 'None' | undefined;
}

export interface Request {
  invalidateSession(): void;
  header(headerName: string): string | null;
  file(fileParameterName: string): Node;
  params: Record<string, string | number>;
  cookies: Record<string, string>;
  xhr: boolean;
  session: any;
  hostname: string;
  protocol: string;
  secure: boolean;
  method: string;
  path: string;
  /**
   * Can be populated in a hooks context and read from a render context
   */
  context: unknown | null;
}

export interface Response {
  agnosticRender(html: string, initialData: unknown);
  send(content: string): void;
  json(data: unknown): void;
  set(name: string, value: string): Response;
  type(type: string): Response;
  sendFile(file: Node): void;
  status(status: number): Response;
  redirect(path: string, query?: string, status?: number): void;
  cookie(cookie: Cookie): void;
  clearCookie(name: string, path?: string): void;

  /**
   * This method will render a component with data
   */
  render(route: string, data: unknown): void;
}

export interface Router {
  /**
   * This method is triggered by a get request to a given route.
   *
   * Note! Server side only
   *
   * @param route The route which will trigger this method
   * @param callback The callback to trigger for the given route
   */
  get(route: string, callback: (req: Request, res: Response) => void): void;
  /**
   * This method is triggered by a post request to a given route.
   *
   * Note! Server side only
   *
   * @param route The route which will trigger this method
   * @param callback The callback to trigger for the given route
   */
  post(route: string, callback: (req: Request, res: Response) => void): void;
  /**
   * This method is triggered by a put request to a given route.
   *
   * Note! Server side only
   *
   * @param route The route which will trigger this method
   * @param callback The callback to trigger for the given route
   */
  put(route: string, callback: (req: Request, res: Response) => void): void;

  /**
   * This method is triggered by a delete request to a given route.
   *
   * Note! Server side only
   *
   * @param route The route which will trigger this method
   * @param callback The callback to trigger for the given route
   */
  delete(route: string, callback: (req: Request, res: Response) => void): void;

  /**
   * This method is triggered by a patch request to a given route.
   *
   * Note! Server side only
   * Note! RESTApps only
   * @param route The route which will trigger this method
   * @param callback The callback to trigger for the given route
   * @since Sitevision 2023.02.1
   */
  patch(route: string, callback: (req: Request, res: Response) => void): void;

  /**
   * Note! Server side only
   *
   * @param callback The callback to trigger
   */
  use(callback: (req: Request, res: Response, next: Function) => void): void;

  getUrl(path: string): string;
  getStandaloneUrl(path: string): string;

  /**
   * Note! Client side only
   */
  on(event: string, callback: () => void, context: any): void;
  /**
   * Note! Client side only
   */
  off(event: string, callback: () => void, context: any): void;

  /**
   * Note! Client side only
   */
  navigate(url: string, options: any): void;
}

declare namespace Router {}

declare var router: Router;

export default router;

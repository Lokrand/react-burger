import { Dispatch } from "redux";
import { TWssActions, TWssActionsObj } from "../wssServices/actions";

export const socketMiddleware = (
  wssUrl: string,
  wssActions: TWssActionsObj
) => {
  return (store: { dispatch: Dispatch<TWssActions> }) => {
    let socket: WebSocket | null = null;
    return (next: Dispatch<TWssActions>) => (action: TWssActions) => {
      const { dispatch } = store;
      const { wssInit, wssSendMessage, onOpen, onClose, onError, onMessage } =
        wssActions;

      if (action.type === wssInit) {
        socket = new WebSocket(`${wssUrl}${action.payload}`);
      }

      if (socket) {
        socket.onopen = (event: any) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event: any) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event: any) => {
          const data = JSON.parse(event.data);
          if (data.success) {
            dispatch({ type: onMessage, payload: data });
          }
        };

        if (action.type === onClose) {
          socket.close();
        }

        if (action.type === wssSendMessage) {
          const message = action.payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};

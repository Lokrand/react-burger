import { MiddlewareAPI } from "redux";
import { Middleware } from "@reduxjs/toolkit";
import { AppDispatch } from "../../hooks/useTypedDispatch";
import { RootState } from "../store";
import { TWssActionsObj } from "../wssServices/actions";

export const socketMiddleware = (
  wssUrl: string,
  wssActions: TWssActionsObj
): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { wssInit, wssSendMessage, onOpen, onClose, onError, onMessage } =
        wssActions;

      if (action.type === wssInit) {
        socket = new WebSocket(`${wssUrl}${action.payload}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
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

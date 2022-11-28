export const socketMiddleware = (wssUrl, wssActions) => {
  return (store) => {
    let socket = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wssInit, wssSendMessage, onOpen, onClose, onError, onMessage } =
      wssActions;
      
      if (type === wssInit) {
        socket = new WebSocket(`${wssUrl}${payload}`);
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

        if (type === onClose) {
          socket.close();
        }

        if (type === wssSendMessage) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};

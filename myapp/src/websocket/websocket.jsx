import { Client } from '@stomp/stompjs';

const client = new Client({
  brokerURL: 'ws://localhost:8080/ws', // No sockJS here
  reconnectDelay: 5000,
  onConnect: (frame) => {
    console.log('Connected: ', frame);
    client.subscribe('/topic/users', (message) => {
      const user = JSON.parse(message.body);
      onMessage(user);
    });
  },
  onStompError: (frame) => {
    console.error('STOMP error:', frame);
  }
});

let onMessage = () => {};

export const connectWebSocket = (callback) => {
  onMessage = callback;
  client.activate();
};

export const sendUserData = (user) => {
  client.publish({ destination: '/app/adduser', body: JSON.stringify(user) });
};

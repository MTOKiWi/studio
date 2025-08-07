import type { User, Chat, Gift } from './types';

export const currentUser: User = {
    id: 'user-0',
    name: 'Você',
    avatar: 'https://placehold.co/100x100.png',
    isOnline: true,
    lastSeen: 'online'
};

export const users: User[] = [
  {
    id: 'user-1',
    name: 'Alice',
    avatar: 'https://placehold.co/100x100.png',
    lastSeen: 'online',
    isOnline: true,
  },
  {
    id: 'user-2',
    name: 'Bob',
    avatar: 'https://placehold.co/100x100.png',
    lastSeen: 'há 5 minutos',
    isOnline: false,
  },
  {
    id: 'user-3',
    name: 'Charlie',
    avatar: 'https://placehold.co/100x100.png',
    lastSeen: 'online',
    isOnline: true,
  },
  {
    id: 'user-4',
    name: 'Diana',
    avatar: 'https://placehold.co/100x100.png',
    lastSeen: 'ontem',
    isOnline: false,
  },
  {
    id: 'user-5',
    name: 'Eve',
    avatar: 'https://placehold.co/100x100.png',
    lastSeen: 'há 2 horas',
    isOnline: false,
  },
];

export const chats: Chat[] = [
  {
    id: 'chat-1',
    userId: 'user-1',
    messages: [
      { id: 'msg-1-1', text: 'Oi, como você está?', timestamp: '10:00', senderId: 'user-0', type: 'text' },
      { id: 'msg-1-2', text: 'Estou bem, obrigado! E você?', timestamp: '10:01', senderId: 'user-1', type: 'text' },
      { id: 'msg-1-3', text: 'Estou ótimo! Quer conversar mais tarde?', timestamp: '10:01', senderId: 'user-0', type: 'text' },
      { id: 'msg-1-4', text: 'Claro, combinado!', timestamp: '10:02', senderId: 'user-1', type: 'text' },
    ],
  },
  {
    id: 'chat-2',
    userId: 'user-2',
    messages: [
      { id: 'msg-2-1', text: 'Você pode me enviar o arquivo?', timestamp: '11:30', senderId: 'user-2', type: 'text' },
      { id: 'msg-2-2', text: 'Claro, só um momento.', timestamp: '11:31', senderId: 'user-0', type: 'text' },
    ],
  },
    {
    id: 'chat-3',
    userId: 'user-3',
    messages: [
      { id: 'msg-3-1', text: 'Olha essa foto legal!', timestamp: 'Ontem', senderId: 'user-3', type: 'image', imageUrl: 'https://placehold.co/600x400.png' },
      { id: 'msg-3-2', text: 'Uau, parece incrível!', timestamp: 'Ontem', senderId: 'user-0', type: 'text' },
    ],
  },
];

export const gifts: Gift[] = [
    {id: 'gift-1', name: 'Diamante', value: 50, date: '20/07/2024', senderName: 'Alice'},
    {id: 'gift-2', name: 'Colar', value: 20, date: '19/07/2024', senderName: 'Charlie'},
    {id: 'gift-3', name: 'Anel', value: 10, date: '18/07/2024', senderName: 'Bob'},
];

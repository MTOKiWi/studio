import type { User, Chat, Gift } from './types';

export const currentUser: User = {
    id: 'user-0',
    name: 'You',
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
    lastSeen: '5 minutes ago',
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
    lastSeen: 'yesterday',
    isOnline: false,
  },
  {
    id: 'user-5',
    name: 'Eve',
    avatar: 'https://placehold.co/100x100.png',
    lastSeen: '2 hours ago',
    isOnline: false,
  },
];

export const chats: Chat[] = [
  {
    id: 'chat-1',
    userId: 'user-1',
    messages: [
      { id: 'msg-1-1', text: 'Hey, how are you?', timestamp: '10:00 AM', senderId: 'user-0', type: 'text' },
      { id: 'msg-1-2', text: 'I am good, thanks! How about you?', timestamp: '10:01 AM', senderId: 'user-1', type: 'text' },
      { id: 'msg-1-3', text: 'Doing great! Wanna catch up later?', timestamp: '10:01 AM', senderId: 'user-0', type: 'text' },
      { id: 'msg-1-4', text: 'Sure, sounds good!', timestamp: '10:02 AM', senderId: 'user-1', type: 'text' },
    ],
  },
  {
    id: 'chat-2',
    userId: 'user-2',
    messages: [
      { id: 'msg-2-1', text: 'Can you send me the file?', timestamp: '11:30 AM', senderId: 'user-2', type: 'text' },
      { id: 'msg-2-2', text: 'Sure, just a moment.', timestamp: '11:31 AM', senderId: 'user-0', type: 'text' },
    ],
  },
    {
    id: 'chat-3',
    userId: 'user-3',
    messages: [
      { id: 'msg-3-1', text: 'See this cool picture!', timestamp: 'Yesterday', senderId: 'user-3', type: 'image', imageUrl: 'https://placehold.co/600x400.png' },
      { id: 'msg-3-2', text: 'Wow, that looks amazing!', timestamp: 'Yesterday', senderId: 'user-0', type: 'text' },
    ],
  },
];

export const gifts: Gift[] = [
    {id: 'gift-1', name: 'Diamond', value: 50, date: '2024-07-20', senderName: 'Alice'},
    {id: 'gift-2', name: 'Necklace', value: 20, date: '2024-07-19', senderName: 'Charlie'},
    {id: 'gift-3', name: 'Ring', value: 10, date: '2024-07-18', senderName: 'Bob'},
];

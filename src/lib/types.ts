export type User = {
  id: string;
  name: string;
  avatar: string;
  lastSeen: string;
  isOnline: boolean;
};

export type Message = {
  id: string;
  text: string;
  timestamp: string;
  senderId: string;
  type: 'text' | 'image' | 'audio';
  imageUrl?: string;
};

export type Chat = {
  id: string;
  userId: string;
  messages: Message[];
};

export type Gift = {
  id: string;
  name: 'Ring' | 'Necklace' | 'Diamond';
  value: number;
  date: string;
  senderName: string;
};

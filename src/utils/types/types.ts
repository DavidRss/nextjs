import { Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  points: number;
  donations: [
    {
      amount: number;
      date: Timestamp;
    }
  ];
  referralCode: string;
  referrer: string;
  referrals: Array<string>;
  earned: {
    family: boolean;
    donation1: boolean;
    donation2: boolean;
    tiktok: boolean;
    youtube: boolean;
    instagram: boolean;
    comment: boolean;
    friend: boolean;
  };
  visited: Timestamp;
  orders: [
    {
      orderId: string;
      orderNumber: string;
      totalPrice: number;
    }
  ],
  spending: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  forFund: string;
  reward: string;
  amount: number;
  numberOfParticipant: number;
  endOfDate: string; // timestamp string
}

export interface Participant {
  id: string; // userId
  username: string;
  country: string;
  donations: number;
  points: number;
  date: string;
}

export interface Comment {
  userId: string;
  username: string;
  content: string;
  avatar: string;
  photo: string;
  status: string;
  createdAt: string;
}

export interface Donations {
  id: string;
  userId: string;
  amount: number;
  createdAt: string;
}

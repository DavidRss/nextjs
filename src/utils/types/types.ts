import { Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  points: number;
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
      type: "product" | "donation"
    }
  ],
  spending: number;
  notifications: [
    {
      
    }
  ]
}

export interface Project {
  id: string;
  title: string;
  description: string;
  forFund: string;
  reward: string;
  amount: number;
  numberOfParticipant: number;
  endOfDate: Timestamp; // timestamp string
  lotteryDate: Timestamp; // 
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

export interface Rewards {
  id: string;
  userId: string;
  discount: string;
  createdAt: string;
}

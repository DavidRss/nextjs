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
  referrals: { referralUserId: boolean };
  earned: {
    family: boolean;
    donation1: boolean;
    donation2: boolean;
    tiktok: boolean;
    youtube: boolean;
    instagram: boolean;
    comment: boolean;
    referral: boolean;
  };
  visited: Timestamp;
  commentDate: Timestamp;
  orders: [
    {
      orderId: string;
      orderNumber: string;
      totalPrice: number;
      type: "product" | "donation";
      createdAt: string;
    }
  ];
  spending: number;
  rewards: [
    {
      productId: string;
      discountCode: string;
      used: boolean;
      viewed: boolean;
      createdAt: string; // timestamp string
    }
  ];
  notifications: [
    {
      productId: string;
      discountCode: string;
      viewed: boolean;
      message: string;
      type: string; // reward, order
      createdAt: string; // timestamp string
    }
  ];
  isCookie: boolean;
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
  type: string;
  createdAt: string;
}

export interface Rewards {
  id: string;
  userId: string;
  productId: string;
  discountCode: string;
  createdAt: string;
}

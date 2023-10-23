import { Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  points: string;
  donations: [{
    amount: number;
    date: Timestamp
  }];
  referralCode: string;
  referrals: []
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
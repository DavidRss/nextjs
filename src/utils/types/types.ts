export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  points: string;
  donations: string;
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
  id: string;
  username: string;
  country: string;
  donations: number;
  points: number;
  date: string;
}

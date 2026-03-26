export interface Tutor {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  subject: string;
  gradeLevel: string;
  bio: string;
  pricePerHr: number;
  isActive: boolean;
  reviews?: Review[];
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  totalPrice: number;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  studentId: string;
  tutorId: string;
  createdAt: Date;
}

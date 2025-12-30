export interface UserProfile {
  _id: string;
  subscription: null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "user";
  profileImage: string;
  verified: boolean;

  league: string;
  category: string;
  position: string;

  socialMedia: string[];
  playingVideo: string[];

  agent: string;
  birthdayPlace: string;
  citizenship: string;
  currentClub: string;

  dob: string; // ISO date string
  gender: "male" | "female" | "other";
  foot: "right" | "left" | "both";

  phone: string;
  institute: string;

  hight: string;
  weight: string;
  gpa: string;
  satAct: string;

  inSchoolOrCollege: boolean;
  isSubscription: boolean;

  accessLavel: string[];

  lastLogin: string; // ISO date
  createdAt: string;
  updatedAt: string;

  otp: string;
  otpExpiry: string;

  __v: number;
}


export interface UserProfileApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: UserProfile;
}


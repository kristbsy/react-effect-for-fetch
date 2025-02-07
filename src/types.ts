
export interface ArtItem {
  id: number;
  title: string;
  artist: string;
  imageURL: string;
  publicationHistory: string[];
};

export interface User {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    jobTitle: string;
    street:string;
    city: string;
    latitude: number;
    longitude: number;
    favouriteColour: string;
    profileImage: string;
    id: number;
}

export interface AdviceJson {
  slip: {
    id: number;
    advice: string;
  };
}

export interface Advice {
    slip_id: number;
    advice: string;
}
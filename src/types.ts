
export type ArtItem = {
  id: number;
  title: string;
  artist: string;
  imageURL: string;
  publicationHistory: string[];
};

export type User = {
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

export type AdviceJson = {
  slip: {
    id: number;
    advice: string;
  };
}

export type Advice = {
    slip_id: number;
    advice: string;
}
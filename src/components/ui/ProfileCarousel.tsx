import { ReactNode } from 'react';
import ProfileCarouselItem from "./ProfileCarouselItem";

export type ProfileCarouselProps = {
  profiles: {
    name: string;
    title: string;
    description: ReactNode;
    song?: {
      title: string;
      artist: string
      image: string;
      link: string;
    };
    image: string;
    instagram?: string;
    twitter?: string;
    github?: string;
    hobby: string;
  }[]
};


export default function ProfileCarousel(props: ProfileCarouselProps) {
  return (
    <div className="relative overflow-hidden w-full md:h-96 h-[36rem]">
      <div className="flex absolute left-0 justify-center align-center gap-4 w-[400rem] sm:w-[350rem] h-full animation-paused" style={{animation: "slide 25s linear infinite"}}>
        {props.profiles.map((profile, index) => (
          <ProfileCarouselItem key={index} {...profile} />
        ))}
        {props.profiles.map((profile, index) => (
          <ProfileCarouselItem key={index + props.profiles.length} {...profile} />
        ))}
      </div>
    </div>
  );
}
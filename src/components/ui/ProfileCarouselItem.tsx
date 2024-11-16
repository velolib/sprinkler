import { GithubLogo } from '@phosphor-icons/react/dist/ssr';
import type { ProfileCarouselProps } from './ProfileCarousel';
import { InstagramLogo, TwitterLogo } from '@phosphor-icons/react';

export default function ProfileCarouselItem(
  profile: ProfileCarouselProps['profiles'][number]
) {
  return (
    <div className="w-full flex rounded-xl h-full bg-white border border-neutral-300 overflow-hidden hover:border-neutral-400 transition-colors duration-200 text-neutral-950 drop-shadow-xl">
      <div className="flex flex-row h-full w-full pr-4">
        <div className="h-full">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-80 sm:w-80 h-full object-cover"
          />
        </div>
        <div className="w-2/3 py-8 px-4 sm:py-4 flex flex-col h-full">
          <div className="flex h-full flex-col gap-2">
            <h2 className="text-3xl sm:text-xl font-bold">{profile.name}</h2>
            <p className="text-2xl sm:text-sm text-gengar-500 font-semibold mb-2">
              {profile.title}
            </p>
            <p className="text-2xl sm:text-sm">{profile.description}</p>
            {profile.song && (
              <a className="group flex gap-2 mt-auto flex-col no-underline text-neutral-950 hover:text-neutral-950 select-none" href={profile.song.link} target='_blank'>
                <h3 className="text-2xl sm:text-sm font-bold">Favorite Song</h3>
                <div className="flex gap-2 items-center">
                  <img
                    src={profile.song.image}
                    alt={profile.song.title}
                    className="aspect-square size-24 sm:size-16 rounded-md object-cover group-hover:scale-x-105 transition-transform duration-200"
                  />
                  <div>
                    <p className="text-2xl sm:text-sm font-semibold">
                      {profile.song.title}
                    </p>
                    <p className="text-2xl sm:text-sm">{profile.song.artist}</p>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center h-full flex-col gap-2 py-8 sm:py-4">
          {profile.instagram && (
            <a
              className="bg-white border border-neutral-300 hover:border-neutral-400 aspect-square size-16 sm:size-10 flex items-center justify-center rounded-md transition-colors duration-200"
              href={profile.instagram}
              target="_blank"
            >
              <InstagramLogo
                size={30}
                className="size-12 sm:size-8 fill-pink-500"
              />
            </a>
          )}
          {profile.twitter && (
            <a
              className="bg-white border border-neutral-300 hover:border-neutral-400 aspect-square size-16 sm:size-10 flex items-center justify-center rounded-md transition-colors duration-200"
              href={profile.instagram}
              target="_blank"
            >
              <TwitterLogo
                size={30}
                className="size-12 sm:size-8 fill-blue-500"
              />
            </a>
          )}
          {profile.github && (
            <a
              className="bg-white border border-neutral-300 hover:border-neutral-400 aspect-square size-16 sm:size-10 flex items-center justify-center rounded-md transition-colors duration-200"
              href={profile.instagram}
              target="_blank"
            >  
              <GithubLogo size={30} className="size-12 sm:size-8 fill-black" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

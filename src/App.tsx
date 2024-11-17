import Section from './components/ui/Section';
import { motion } from 'framer-motion';
import { ComponentProps, useEffect, useState } from 'react';
import ProfileCarousel, {
  ProfileCarouselProps,
} from './components/ui/ProfileCarousel';
import Typing from './components/ui/Typing';
import Twemoji from 'react-twemoji';
import type { IParticlesProps } from '@tsparticles/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadBasic } from '@tsparticles/basic';
import { useParticlesOptions } from './util/useParticleOptions';
import Countdown from 'react-countdown';
import HowToBeAHumanBeing from './assets/images/album/how-to-be-a-human-being.jpg';
import VivaLaVida from './assets/images/album/viva-la-vida.jpg';
import SemenjakAdaDirimu from './assets/images/album/semenjak-ada-dirimu.jpg';
import DummyBoy from './assets/images/album/dummy-boy.jpg';
import EverythingIKnowAboutLove from './assets/images/album/everything-i-know-about-love.jpg';
import TheVanishingRace from './assets/images/album/the-vanishing-race.jpg';
import ArfaAditya from './assets/images/people/arfa-aditya.jpg';
import AhmadFathur from './assets/images/people/ahmad-fathur.jpg';
import AlfiansyahNabil from './assets/images/people/alfiansyah-nabil.jpg';
import KamaelElandra from './assets/images/people/kamael-elandra.jpg';
import RanggaCanavaro from './assets/images/people/rangga-canavaro.jpg';
import Malik from './assets/images/people/malik.jpg';
import Everyone from './assets/images/people/everyone.jpg';

import { Drop, FileText, Plant, Timer } from '@phosphor-icons/react';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const airsOptions: ComponentProps<typeof motion.div> = {
    className: 'inline-block',
    transition: {
      duration: 0.5,
    },
    whileInView: {
      x: 0,
      transition: {
        delay: 0.5,
        ease: 'backOut',
      },
    },
    exit: {
      transition: {
        duration: 0,
        delay: 0,
        ease: 'none',
      },
    },
  };

  const particlesOptions = useParticlesOptions();

  const particlesLoaded: IParticlesProps['particlesLoaded'] = async (
    container?
  ) => {
    console.log(container);
  };

  const team: ProfileCarouselProps['profiles'] = [
    {
      name: 'Ahmad Fathur Rochman',
      title: 'Mutasi Slayer',
      description: 'Seorang pejuang dengan mutasi berbagai sekolah',
      hobby: 'Main Voli',
      image: AhmadFathur,
      instagram: 'https://instagram.com/zyxlyenth',
      song: {
        title: 'Take A Slice',
        artist: 'Glass Animals',
        image: HowToBeAHumanBeing,
        link: 'https://open.spotify.com/track/37adYGaYaAWTGhBaOzX4Fh?si=58cce8c24f99491f',
      },
    },
    {
      name: 'Alfiansyah Nabil Najmi',
      title: 'Sleeper Agent',
      description: 'Life is Roblox',
      hobby: 'Sleeping',
      image: AlfiansyahNabil,
      instagram: 'https://instagram.com/alfiansyah.najmi',
      song: {
        title: 'Viva La Vida',
        artist: 'Coldplay',
        image: VivaLaVida,
        link: 'https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b?si=8ff7db67deb24ea2',
      },
    },
    {
      name: 'Arfa Aditya Ar-Raziq',
      title: 'Lubarf',
      description: 'Ayo maju maju',
      hobby: '',
      image: ArfaAditya,
      song: {
        title: 'Semenjak Ada Dirimu',
        artist: 'Hivi!',
        image: SemenjakAdaDirimu,
        link: 'https://open.spotify.com/track/5H4MSA6eIr6x1iBTn1vpMG?si=988402bddeb64343',
      },
    },
    {
      name: 'Kamael Elandra',
      title: 'Galaxy Ranger',
      description: 'Saya adalah manusia biasa yang menjelajahi galaksi',
      hobby: 'Designing',
      image: KamaelElandra,
      instagram: 'https://instagram.com/ndra4you_',
      song: {
        title: 'MALA',
        artist: '6ix9ine',
        image: DummyBoy,
        link: 'https://open.spotify.com/track/5tYCl2bT9bDjMuTyn6OVb0?si=c60437ea82e74fd2',
      },
    },
    {
      name: 'Malik Ihsan Fathurrahman',
      title: 'Aspiring Software Engineer',
      description: (
        <>
          <span className="font-bold">Generational talent.</span> Software
          developer for niche communities.
        </>
      ),
      hobby: 'Videography',
      image: Malik,
      instagram: 'https://instagram.com/vlocitize',
      twitter: 'https://x.com/vlocitize',
      github: 'https://github.com/velolib',
      song: {
        title: 'Beautiful Stranger',
        artist: 'Laufey',
        image: EverythingIKnowAboutLove,
        link: 'https://open.spotify.com/track/38TpUKiHQZyBKiD9LMMy6X?si=cef2d67317324ee7',
      },
    },
    {
      name: 'Teuku Muhammad Rangga Canavaro',
      title: 'Pemburu Pop Mie',
      description: 'Aku adalah si Hilux Rangga',
      hobby: 'Drawing',
      image: RanggaCanavaro,
      instagram: 'https://instagram.com/rangga_aja34',
      song: {
        title: 'Goodbye',
        artist: 'Air Supply',
        image: TheVanishingRace,
        link: 'https://open.spotify.com/track/5PihYbt4uNnVt68l5D1SGb?si=5dbeae167e534012',
      },
    },
  ];

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="-z-10"
        />
      )}
      <div className="absolute size-screen"></div>
      <div className="flex items-center flex-col snap-y snap-mandatory overflow-y-scroll h-screen max-w-screen text-white bg-background [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gengar-100/10 [&::-webkit-scrollbar-thumb]:bg-gengar-900 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:p-16">
        <div className="snap-center w-full">
          <Section>
            <div className="flex flex-col justify-center items-center">
              <motion.img
                src={Everyone}
                className="size-96 aspect-square rounded-3xl object-cover mb-4"
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: 'backOut' },
                }}
                whileHover={{
                  scale: 1.025,
                  transition: { duration: 0.25, ease: 'backOut' },
                }}
              />
              <h1 className="text-4xl sm:text-6xl font-bold flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    rotate: [10, -10, 8, -8, 6, -6, 4, -4, 0],
                    scale: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    rotate: [6, -6],
                    transition: {
                      repeat: Infinity,
                      repeatType: 'mirror',
                    },
                  }}
                  className="inline-block size-16"
                >
                  <Twemoji options={{ className: 'inline size-16' }}>
                    👋
                  </Twemoji>
                </motion.div>
                Hi, we are
              </h1>
              <div className="text-amber-400 inline relative font-extrabold text-5xl sm:text-7xl">
                <span className="absolute blur-2xl opacity-70">
                  <Typing text={'Kelompok 42 TeSIS!'} />
                </span>
                <h1 className="select-none">
                  <Typing text={'Kelompok 42 TeSIS!'} />
                </h1>
              </div>
            </div>
          </Section>
        </div>
        <div className="snap-center w-full">
          <Section>
            <div className="flex h-full w-full items-center flex-col justify-center gap-16">
              <div className="flex flex-col w-full items-center">
                <h1 className="text-6xl font-bold">
                  <motion.span
                    initial={{ opacity: 0, transform: 'translateY(-20px)' }}
                    whileInView={{
                      opacity: 1,
                      transform: 'translateY(0px)',
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="inline-block"
                    transition={{
                      ease: 'easeOut',
                    }}
                  >
                    Meet
                  </motion.span>
                  <span> </span>
                  <motion.span
                    initial={{ opacity: 0, transform: 'translateY(-20px)' }}
                    whileInView={{
                      opacity: 1,
                      transform: 'translateY(0px)',
                      transition: {
                        duration: 0.2,
                        delay: 0.25,
                      },
                    }}
                    className="inline-block"
                    transition={{
                      ease: 'easeOut',
                    }}
                  >
                    the
                  </motion.span>
                  <span> </span>
                  <motion.span
                    initial={{ opacity: 0, transform: 'translateY(-20px)' }}
                    whileInView={{
                      opacity: 1,
                      transform: 'translateY(0px)',
                      transition: {
                        duration: 0.2,
                        delay: 0.5,
                      },
                    }}
                    transition={{
                      ease: 'easeOut',
                    }}
                    className="inline-block bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 text-transparent"
                  >
                    team
                  </motion.span>
                </h1>
              </div>
              <div className="flex h-min w-full items-center justify-center">
                <ProfileCarousel profiles={team} />
              </div>
            </div>
          </Section>
        </div>
        <div className="snap-center w-full">
          <Section>
            <div className="flex h-full w-full justify-center flex-col p-8 items-center gap-12">
            <div className="flex flex-col w-full items-center">
                <h2 className="text-2xl font-semibold text-center">This is</h2>
                <h1 className="font-bold text-left relative text-6xl">
                  <span className="text-6xl text-transparent">A</span>
                  <span className="text-3xl">
                    <Typing text="utomated" delay={0.65} />
                  </span>
                  <br />
                  <span className="text-6xl text-transparent">I</span>
                  <span className="text-3xl">
                    <Typing text="rrigation" delay={0.65} />
                  </span>
                  <br />
                  <span className="text-6xl text-transparent">R</span>
                  <span className="text-3xl">
                    <Typing text="egulation" delay={0.65} />
                  </span>
                  <br />
                  <span className="text-6xl text-transparent">S</span>
                  <span className="text-3xl">
                    <Typing text="ystem" delay={0.65} />
                  </span>
                  <div className="absolute top-0 w-full">
                    <motion.span
                      {...airsOptions}
                      initial={{
                        x: '156%',
                      }}
                    >
                      A
                    </motion.span>
                    <br />
                    <motion.span
                      {...airsOptions}
                      initial={{
                        x: '494%',
                      }}
                    >
                      I
                    </motion.span>
                    <br />
                    <motion.span
                      initial={{
                        x: '185%',
                      }}
                      {...airsOptions}
                    >
                      R
                    </motion.span>
                    <br />
                    <motion.span
                      {...airsOptions}
                      initial={{
                        x: '186%',
                      }}
                    >
                      S
                    </motion.span>
                  </div>
                </h1>
              </div>
              <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg">
                      <b className="text-bold">AIRS</b> adalah inovasi irigasi masa depan yang dirancang
                      khusus untuk membantu para petani di Desa Wisata Ciburial. Melalui program
                      TeSIS 2025, kami mengembangkan sistem irigasi otomatis
                      yang akan mengoptimalkan penggunaan waktu dan tenaga dalam
                      kegiatan pertanian.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-base sm:text-lg">
                        <Timer className="text-gengar-500 mr-2 size-6 sm:h-8 sm:w-8 flex-shrink-0" />
                        <span>Menghemat waktu petani</span>
                      </li>
                      <li className="flex items-center text-base sm:text-lg">
                        <Drop className="text-gengar-500 mr-2 size-6 sm:h-8 sm:w-8 flex-shrink-0" />
                        <span>Efisiensi penggunaan air</span>
                      </li>
                      <li className="flex items-center text-base sm:text-lg">
                        <Plant className="text-green-600 mr-2 size-6 sm:h-8 sm:w-8 flex-shrink-0" />
                        <span>Meningkatkan produktivitas tanaman</span>
                      </li>
                    </ul>
                    <p className="text-base sm:text-lg mt-4">
                      Sistem AIRS akan membantu mengatur penyiraman tanaman
                      secara efisien, memberikan petani lebih banyak waktu untuk
                      fokus pada aspek pertanian lainnya.
                    </p>
                    <div className="w-full flex justify-center sm:justify-start">
                      <a className="bg-white border border-neutral-300 overflow-hidden hover:border-neutral-400 px-4 py-2 text-gengar-950 flex items-center no-underline select-none cursor-pointer text-lg rounded-md w-min text-nowrap hover:text-gengar-950 transition-colors duration-200">
                        <FileText className="size-6 mr-2" />
                        Baca Draft Penelitian
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className="w-full max-w-md aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/gW5VsOC9GBI?si=spH-nmx12IFNGNKu"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-xl shadow-xl w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
        <div className="snap-center w-full">
          <Section>
            <div className="flex h-full w-full items-center justify-center flex-col gap-8 py-32 sm:py-0">
              <div className="flex items-center justify-center flex-col">
                <h1 className="text-4xl font-semibold">We will see you in</h1>
                <span className="text-amber-400 inline relative font-extrabold text-5xl sm:text-7xl">
                  <span className="absolute blur-2xl opacity-70 break-normal">
                    <Typing text="Desa Wisata Ciburial" />
                  </span>
                  <h1 className="select-none break-none">
                    <Typing text="Desa Wisata Ciburial" />
                  </h1>
                </span>
                <span className="text-lg sm:text-2xl">
                  In approximately&nbsp;
                  <Countdown
                    date={new Date('2025-01-24T06:00:00+07:00')}
                    renderer={(props) => {
                      if (props.completed) {
                        return <span className="font-bold">Now!</span>;
                      }
                      return (
                        <span>
                          <span className="font-bold">{props.days}</span>{' '}
                          days,&nbsp;
                          <span className="font-bold">{props.hours}</span>{' '}
                          hours,&nbsp;
                          <span className="font-bold">
                            {props.minutes}
                          </span>{' '}
                          minutes,&nbsp;
                          <span className="font-bold">
                            {props.seconds}
                          </span>{' '}
                          seconds
                        </span>
                      );
                    }}
                  />
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27104.727956814124!2d107.79903351790084!3d-7.202302041890502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ba546209b903%3A0xa71cc115b72812f9!2sDesa%20Wisata%20Saung%20Ciburial!5e1!3m2!1sen!2sid!4v1731408808426!5m2!1sen!2sid"
                width="800"
                height="600"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-2/3 lg:w-5/12 h-full sm:h-auto sm:aspect-video shadow-xl"
              ></iframe>
            </div>
          </Section>
        </div>

        <footer className="w-full h-16 py-4 flex items-center justify-center text-white snap-center">
          <p className="text-center">
            Website made by{' '}
            <a href="https://velolib.github.io/" className="">
              velo / malik / vlocitize
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

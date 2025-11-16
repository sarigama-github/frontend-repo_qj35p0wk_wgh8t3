export default function Hero() {
  const videoSrc = import.meta.env.VITE_HERO_VIDEO ||
    'https://videos.pexels.com/video-files/856981/856981-uhd_2560_1440_25fps.mp4';
  const poster = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80';

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/60 via-purple-900/30 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
              RuhRas by Radhika
            </h1>
            <p className="mt-4 text-white/90 max-w-xl">
              Holistic spiritual wellness blending ancient wisdom with modern intuition. A serene space for harmony, clarity, and inner peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

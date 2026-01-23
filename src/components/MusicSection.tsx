import goodsArtwork from "@/assets/goods-artwork.avif";

const MusicSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Left - Artwork */}
          <div className="w-full md:w-1/2">
            <img
              src={goodsArtwork}
              alt="The Goods - Artwork"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right - Title and Spotify Embed */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            {/* Title */}
            <div className="mb-8 font-typewriter">
              <p className="text-coral text-lg md:text-xl italic tracking-wide">The</p>
              <h2 className="text-coral text-5xl md:text-7xl italic tracking-wide">Goods</h2>
            </div>
            
            {/* Spotify Embed */}
            <iframe
              className="rounded-xl flex-grow min-h-[352px]"
              src="https://open.spotify.com/embed/album/5rm8WxngJzAg6Fq04iM7zQ?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Rogue Taxidermy - Album on Spotify"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;

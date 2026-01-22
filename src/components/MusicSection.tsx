const MusicSection = () => {
  return (
    <section className="w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Spotify Embed */}
          <iframe
            className="rounded-xl"
            src="https://open.spotify.com/embed/artist/4Z8W4fKeB5YxbusRsdQVPb?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="The Dropjaw Jacobites on Spotify"
          />
        </div>
      </div>
    </section>
  );
};

export default MusicSection;

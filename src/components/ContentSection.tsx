import posterImage from "@/assets/poster-image.jpg";

const ContentSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="flex flex-col md:flex-row" style={{ minHeight: '80vh' }}>
        {/* Left Column - Poster with Text Overlay */}
        <div className="relative w-full md:w-[45%]" style={{ minHeight: '80vh' }}>
          <img
            src={posterImage}
            alt="The Dropjaw Jacobites Poster"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Text overlay positioned on left side */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-start">
            <h3 
              className="font-typewriter tracking-typewriter leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'hsl(0 0% 15%)' }}
            >
              Words
            </h3>
            <h4 
              className="font-typewriter tracking-typewriter mt-1"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)', color: 'hsl(0 0% 20%)' }}
            >
              In their own
            </h4>
            <h3 
              className="font-typewriter tracking-typewriter leading-none mt-3 text-primary"
              style={{ fontSize: 'clamp(4rem, 10vw, 6rem)' }}
            >
              ENOUGH
            </h3>
          </div>
        </div>

        {/* Right Column - Video/Image */}
        <div className="relative w-full md:w-[55%]" style={{ minHeight: '80vh', backgroundColor: 'hsl(0 0% 12%)' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://static.wixstatic.com/media/11062b_3f992a24470a4924a90f4240f29668dbf000.jpg/v1/fill/w_538,h_1319,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_3f992a24470a4924a90f4240f29668dbf000.jpg"
          >
            <source
              src="https://video.wixstatic.com/video/11062b_3f992a24470a4924a90f4240f29668db/720p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

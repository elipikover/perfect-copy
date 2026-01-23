import bioArtwork from "@/assets/bio-artwork.avif";

const BiographySection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2 font-typewriter text-foreground">
            {/* Title */}
            <h2 className="text-coral text-4xl md:text-5xl mb-8 italic tracking-wide">
              BIO<span className="text-2xl md:text-3xl">graphy</span>
            </h2>
            
            {/* Bio paragraphs */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed">
              <p>
                The dilapidated, quasi-musical vehicle of cousins Wave Olevson and Elvis Pikovers, DropJaw Jacobites has been mutilating sounds and concepts since its accidental inception in Amsterdam, in the year of our Lawd 2002.
              </p>
              
              <p>
                Deeply appalled and terrified by life, the duo buried themselves in their studio and let their alter egos run brutally naked while the rest of the world continued to c**t along like everything was fucking peaches & cream.
              </p>
              
              <p>
                The duo hacked away at most instruments themselves, taking turns at digging in the darkness of musical illiteracy and blunt mediocrity for something they could tolerate.
              </p>
              
              <p>
                With Pikovers manning studio wizardry and Olevson handling vocals & lyrics, the Jacobites created a ramshackle world made up of cross-cultural fragments, displaced, decontextualized and glued together with spit, piss & vinegar.
              </p>
              
              <p>
                The ten songs that make up DropJaw Jacobites' debut album are both unnerving and weirdly mesmerizing, both ridiculous and deeply sublime.
              </p>
              
              <p>
                To quote the Jacobites "These are not really songs, these are kidney stones that finally got through us. If you think they're useless - kudos, you're hopelessly human. The way we see it, to a savvy alien race these kidney stones are legendary diamonds. Nah, fuck diamonds - they're sacred hallucinogens that go well with black coffee, barn fires and angst."
              </p>
            </div>
          </div>
          
          {/* Right - Artwork */}
          <div className="w-full md:w-1/2">
            <img
              src={bioArtwork}
              alt="DropJaw Jacobites - Biography Artwork"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;

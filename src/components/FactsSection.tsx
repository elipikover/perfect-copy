import factsArtwork from "@/assets/facts-artwork.avif";

const FactsSection = () => {
  return (
    <section className="w-full bg-background min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side - Facts content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-md">
            {/* Header */}
            <p className="text-muted-foreground text-sm tracking-typewriter mb-1">The</p>
            <h2 className="text-coral text-4xl md:text-5xl font-typewriter tracking-typewriter mb-8">
              Facts
            </h2>

            {/* Facts list */}
            <div className="space-y-6 font-typewriter">
              <div>
                <p className="text-muted-foreground text-sm">We are</p>
                <p className="text-foreground">The DropJaw Jacobites</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Album:</p>
                <p className="text-foreground">Rogue Taxidermy</p>
              </div>

              <div>
                <p className="text-coral text-sm">Accomplices:</p>
                <p className="text-coral">Wave</p>
                <p className="text-foreground">Olevson</p>
                <p className="text-foreground">Elvis PikoVers</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Home Base:</p>
                <p className="text-foreground">Brainwaves creek</p>
              </div>

              <div>
                <p className="text-coral text-sm">First note committed:</p>
                <p className="text-coral">2002</p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Genre:</p>
                <p className="text-foreground">#Art-Rock #Experimental</p>
                <p className="text-foreground">Rock</p>
              </div>

              <div>
                <p className="text-coral text-sm">Contact:</p>
                <a 
                  href="mailto:dropjawjacobites@gmail.com" 
                  className="text-coral hover:underline text-sm"
                >
                  dropjawjacobites@gmail.com
                </a>
              </div>
            </div>

            {/* Looking to get Labeled */}
            <div className="mt-12 font-typewriter">
              <p className="text-foreground text-xl">We are</p>
              <p className="text-foreground text-2xl md:text-3xl">Looking to get</p>
              <p className="text-coral text-4xl md:text-5xl italic">Labeled</p>
            </div>
          </div>
        </div>

        {/* Right side - Animated image */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen">
          <img
            src={factsArtwork}
            alt="The DropJaw Jacobites"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FactsSection;

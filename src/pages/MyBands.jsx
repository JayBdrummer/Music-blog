import PageLayout from "../components/layout/PageLayout";
import BandCard from "../components/reviews/BandCard";

import gentleImage from "../assets/images/Gentle Savage Official promo picture 2024.jpg";
import spoonmenImage from "../assets/images/Spoonmen.jpg";
import tigerImage from "../assets/images/Tiger.jpg";

function MyBands() {
  return (
    <PageLayout>

      <BandCard
        name="Gentle Savage"
        description="Progressiivisia elementtejä, dynaamista rockia ja metallia yhdistävä kokoonpano."
        members={[
          "Laulu, kitara - Tornado Bearstone",
          "Kitara, taustalaulu - Benoit Zummerbender",
          "Basso, taustalaulu - Larry Welder",
          "Rummut, taustalaulu - Jay B."
        ]}
        image={gentleImage}
        spotifyEmbed="https://open.spotify.com/embed/track/1EC1I8O9KfnysjAJBZFj2t?utm_source=generator"
        youtubeEmbed="https://www.youtube.com/embed/woek2SVAEtg?si=BZMNg71xiMMlBnqP"
      />

      <BandCard
        name="Spoonmen"
        description="Grunge- ja alternative rock -vaikutteinen cover-yhtye."
        members={[
          "Laulu - Jay",
          "Kitara, taustalaulu - Kalju",
          "Basso - Janne",
          "Rummut, taustalaulu - Tare",
          "Koskettimet, taustalaulu - Pepe"
        ]}
        image={spoonmenImage}
        youtubeEmbed="https://www.youtube.com/embed/MjnuEaPaBAQ?si=GSfuINa6nLBBReM3" 
      />

      <BandCard
        name="Tiger"
        description="Hurriganes -covereita tinkimättömällä asenteella ja ammattitaidolla."
        members={[
          "Laulu, rummut - Jay B.",
          "Kitara - Larry Taylor",
          "Basso, taustalaulu - Hugo DelMonte"
        ]}
        image={tigerImage}
        youtubeEmbed="https://www.youtube.com/embed/WJy1qMTQGao?si=ORLE1wtEWDLtPhXM" 
      />

    </PageLayout>
  );
}

export default MyBands;

import yamahaImage from "../assets/images/YAMAHA-RECORDING-CUSTOM.jpg";
import studioImage from "../assets/images/Rummut_studio.jpg";
import liveImage from "../assets/images/rummut_live.jpg";

export const drumPosts = [
  {
    id: 1,
    title: "Yamaha Recording Custom",
    image: yamahaImage,
    specs: [
      { label: "Runko", value: "Koivu" },
      { label: "Koot", value: '22", 10", 12", 14", 16"' },
      { label: "Soundi", value: "Napakka ja tarkka" }
    ],
    content: (
      <>
        <p>
          Yamaha Recording Custom on yksi tunnetuimmista studio-rumpuseteistä.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
          et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum 
          qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </>
    )
  },

  {
    id: 2,
    title: "Rumpujen mikitys studiossa",
    image: studioImage,
    specs: [
      { label: "Tyyli", value: "Monimikitys" },
      { label: "Overheadit", value: "Kondensaattorit" },
      { label: "Kick", value: "Dynaaminen mikrofoni" }
    ],
    content: (
      <>
        <p>
          Studiossa rumpujen mikitys perustuu kontrolliin ja yksityiskohtiin.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero.
        </p>
        <p>
          Sed cursus ante dapibus diam. Sed nisi.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
          et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum 
          qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </>
    )
  },

  {
    id: 3,
    title: "Rumpujen mikitys keikalla",
    image: liveImage,
    specs: [
      { label: "Tavoite", value: "Kestävyys ja selkeys" },
      { label: "Mikrofonit", value: "Dynaamiset" },
      { label: "Tilanne", value: "Live-ympäristö" }
    ],
    content: (
      <>
        <p>
          Keikkatilanteessa rumpujen mikitys on kompromissi
          nopeuden ja äänenlaadun välillä.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Duis sagittis ipsum. Praesent mauris.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
          et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum 
          qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </>
    )
  }
];
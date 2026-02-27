import "./BandCard.css";

function BandCard({
  name,
  description,
  members,
  image,
  spotifyEmbed,
  youtubeEmbed
}) {
  return (
    <section className="band-card">

      {image && (
        <div className="band-image">
          <img src={image} alt={name} />
        </div>
      )}

      <h2 className="band-name">{name}</h2>

      <p className="band-description">{description}</p>

      <div className="band-members">
        <h3>Jäsenet</h3>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>

      <div className="band-embeds">
        {spotifyEmbed && (
          <iframe
            src={spotifyEmbed}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`${name} Spotify`}
          />
        )}

        {youtubeEmbed && (
          <iframe
            width="100%"
            height="315"
            src={youtubeEmbed}
            title={`${name} YouTube`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

    </section>
  );
}

export default BandCard;
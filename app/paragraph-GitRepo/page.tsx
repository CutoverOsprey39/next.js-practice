export default function Page() {
    return (
      <main style={{ padding: "40px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.7", fontSize: "18px" }}>
          For my final project, I’m developing an <strong>A converter for playlists between Spotify and Apple Music playlists.</strong> The goal is to make a 'webapp' converter that people can use by either entering a url or QR code of a existing playlist and recieving the url or QR for the playlist for either app. The project would utilize a existing python API that handles playlist conversion. the project would most likely be done using next.js and React.js. <br/> Github repo for the next.js assignment:  
          <br /><br />
          <a
            href="https://github.com/CutoverOsprey39/next.js-practice"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0070f3",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            https://github.com/CutoverOsprey39/next.js-practice
          </a>
        </p>
      </main>
    );
  }
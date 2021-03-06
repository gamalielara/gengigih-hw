import React from "react";
import { useSelector } from "react-redux";
import Song from "../Song/Song";
import { SongItem } from "../../global/interface";

interface Props {
  songs: SongItem[];
}

interface SelectedSongs {
  selectedSongs: {
    value: string[];
  };
}

const SongsLists: React.FC<Props> = ({ songs }) => {
  const selectedSongs = useSelector(
    (state: SelectedSongs) => state.selectedSongs.value
  );
  return (
    <section
      className="songs-container w-full lg:w-2/3 mx-auto grid-rows-1 md:p-0 p-1"
      title="section-container"
    >
      {songs.map((song) => (
        <Song
          key={song.id}
          title={song.name}
          image={song.album.images[0].url}
          album={song.album.name}
          link={song.external_urls.spotify}
          isExplicit={song.explicit}
          uri={song.uri}
          artist={song.album.artists[0].name}
          isSelected={
            selectedSongs.length > 0 && selectedSongs.includes(song.uri)
          }
        />
      ))}
    </section>
  );
};

export default SongsLists;

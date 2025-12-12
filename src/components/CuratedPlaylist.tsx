import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CuratedPlaylist = () => {
  return (
    <div className="w-fit h-fit bg-[#89A6ED] p-9 rounded-lg text-white m-4 hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <p className="text-1xl mb-4">CURATED PLAYLIST</p>
      <h1 className="text-5xl font-semibold">Adfaita</h1>
      <p className="text-1xl mt-2">
        Enjoy vivid emotions with this stunning nasheed album, each nasheed is a
        story
      </p>
      <div className="flex items-center gap-2 text-sm text-white mt-10">
        <FontAwesomeIcon icon={faHeart} />
        <h1 className="font-semibold">80,000 Likes</h1> &#183;{" "}
        <p>18 Nasheeds, 40 Minutes, 16 seconds</p>
      </div>
    </div>
  );
};

export default CuratedPlaylist;

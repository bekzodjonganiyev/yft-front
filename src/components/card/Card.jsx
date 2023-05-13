import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Zoom, Roll,AttentionSeeker, Reveal} from "react-awesome-reveal";

import { baseUrl } from "../../context";

export const Card = ({ imgSrc, imgAlt, title, description, className }) => {
  return (
    <Reveal >
      <div className="flex flex-col">
        <LazyLoadImage
          src={baseUrl + "/" + imgSrc}
          alt={imgAlt}
          // effect={"blur"}
          className="w-full img-lazy rounded-xl mb-4 h-72"
          width={"100%"}
          height={"100%"}
        />
        <h2 className="text-xl text-secondary_color font-semibold mb-4 text-left">
          {title}
        </h2>
        <div
          className="text-secondary_color text-lg line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </Reveal >
  );
};

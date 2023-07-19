import React, { useState, useEffect } from 'eact';
import './InstaFeed.css';
import fetch from 'isomorphic-fetch';
const InstagramFeed = ({ username }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`https://www.instagram.com/${username}/media/?max_id=${images[images.length - 1]?.id}`);
      const data = await response.json();
      setImages(data.items);
    };

    fetchImages();
  }, [username]);

  return (
    <div>
      <a href={`https://www.instagram.com/${username}`}>{username}</a>
      <div>
        {images.map(image => (
          <img key={image.id} src={image.images.standard_resolution.url} alt={image.caption} />
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
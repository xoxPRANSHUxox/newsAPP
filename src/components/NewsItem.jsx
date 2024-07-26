import React from 'react';
import Image from '../assets/image.jpeg';
export default function NewsItem({ title, description, src, url }) {
  return (
      <div className="card shadow p-4 border">
        <img src={src?src:Image} style={{padding: '2px'}} className="card-img-top w-75" alt={"image of news"} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          {/* <p className="text-sm fs-6">{description ? description.slice(0,90):" "}</p> */}
          <a href={url} className="btn btn-danger">Read More</a>
          </div>
      </div>
  );
}


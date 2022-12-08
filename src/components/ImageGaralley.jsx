import React from 'react'
import "../ImageGallery.css";

export const ImageGaralley = ({ fetchData }) => {
    return (
        <div>
            <div className="images-wrapper">
                {fetchData.map((data, index) => (
                    <div key={index} className="image">
                        <a href={data.pageURL} target="_blank">
                            <img src={data.largeImageURL} alt={`ヒットした画像${index + 1}番目`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

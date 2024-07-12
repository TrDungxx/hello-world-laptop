import React from "react";
import myClips from "./MyClip.json";
import cuho from "./video/HoChiMinh1.mp4"

function Web() {
    const largeClip = myClips[1]; // Lấy clip lớn

    return (
        <div>
            <h2 className="h2item">My Clip</h2>
            <div className="large-clip">
                <video width="640" height="360" controls>
                    <source src={cuho} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="clip-list">
                {myClips.slice(0, 4).map((clip, index) => (
                    <div key={index} className="clip-item">
                        {clip.source_clip.includes("youtube.com") ? (
                            <iframe
                                width="320"
                                height="240"
                                src={clip.source_clip.replace('watch?v=', 'embed/')}
                                title={clip.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video width="320" height="240" controls>
                                <source src={clip.source_clip} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <h3>{clip.title}</h3>
                         {clip.start}
                        <p>{clip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Web;

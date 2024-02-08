import React, { useState, useEffect } from 'react';
import Card from './Card';

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 15;
  const [photos, setPhotos] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(import.meta.env.PUBLIC_HYGRAPH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN}`,
        },
        body: JSON.stringify({
          query: `query Pexels($currentPage: Int, $perPage: Int) {
            pexelsPhotos {
              photos(currentPage: $currentPage, perPage: $perPage) {
                photos {
                  photographer
                  photographer_url
                  id
                  alt
                  src {
                    large2x
                    original
                  }
                }
              }
            }
          }`,
          variables: {
            currentPage,
            perPage,
          },
        }),
      });

      const data = await response.json();
      const newPhotos = data?.data?.pexelsPhotos || [];

      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <section className="gallery">
      <div style={{marginBottom: "50px"}}>
      {photos.map((result: any, index: any) => (
        <ul className="images" key={index}>
            {result.photos.photos.map((photo: any) => (
                <Card
                  key={photo.alt}
                  alt={photo.alt}
                  photographer={photo.photographer}
                  src={photo.src.large2x}
                  original={photo.src.original}
                />
            ))}
        </ul>
      ))}
      </div>
      <div style={{marginBottom: "50px"}}>
        <button onClick={handleLoadMore} className='load-more'>Load More</button>
      </div>
  </section>
  );
};

export default Pagination;

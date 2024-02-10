import React, { useState, useEffect } from 'react';
import Card from './Card';

const Pagination: React.FC = ({ currentPage, newPhotos, perPage } : any) => {

  const handleLoadMore = () => {
    currentPage++;
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

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
      const results = data?.data?.pexelsPhotos || [];

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div style={{marginBottom: "50px"}}>
      <button onClick={handleLoadMore} className='load-more'>Load More</button>
    </div>
  );
};

export default Pagination;

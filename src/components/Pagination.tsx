import { useCallback, useState } from "react";
import Card from "./Card";
import type { Photo } from "../types";

const Pagination = ({ newPhotos, currentPage: initialPage }: any) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [photos, setPhotos] = useState(newPhotos);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(import.meta.env.PUBLIC_HYGRAPH_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN}`,
        },
        body: JSON.stringify({
          query: `query Pexels($currentPage: Int, $perPage: Int) {
            pexelsPhotos {
              photos(currentPage: $currentPage, perPage: $perPage) {
                photos {
                  id
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
          }
          `,
          variables: {
            currentPage,
            perPage: 15,
          },
        }),
      })

      const data = await response.json();
      const results = data?.data?.pexelsPhotos;

      // Increment current page for the next request
      setCurrentPage((prevPage: number) => prevPage + 1);

      console.log("after click", currentPage)
      // Accumulate new photos
      setPhotos(results)
    } catch (error:any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);


  return (
    <section className="gallery">
      {currentPage > 2 && (
        <>
          {photos.map((result: any, index: any) => (
            <ul className="images" key={index}>
              {result.photos.photos.map((photo: Photo) => (
                <Card
                  key={photo.id}
                  alt={photo.alt}
                  photographer={photo.photographer}
                  src={photo.src.large2x}
                  original={photo.src.original}
                />
              ))}
            </ul>
          ))}
        </>
      )}
      <div style={{ marginBottom: "50px" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <button onClick={handleLoadMore} className="load-more">
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Pagination;

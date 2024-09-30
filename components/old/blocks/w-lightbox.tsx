import { SetStateAction } from "react";

export interface WLightboxData {
  thumbnailUrl: string;
  width: number;
  height: number;
  html: string;
  src: string;
}

interface WLightboxProps {
  data: WLightboxData | null;
  setData: React.Dispatch<SetStateAction<WLightboxData | null>>;
}

export default function WLightbox({ data, setData }: WLightboxProps) {
  if (!data?.src) {
    return <></>;
  }

  return (
    <>
      <div
        className="w-lightbox-backdrop"
        style={{ transition: "opacity 300ms ease 0s", opacity: 1 }}
      >
        <div className="w-lightbox-container">
          <div className="w-lightbox-content">
            <div className="w-lightbox-view" style={{ opacity: 1 }}>
              <div className="w-lightbox-frame">
                <figure className="w-lightbox-figure">
                  {/*<Image*/}
                  {/*  className="w-lightbox-img w-lightbox-image"*/}
                  {/*  src={data.thumbnailUrl}*/}
                  {/*  width={data.width}*/}
                  {/*  height={data.height}*/}
                  {/*  alt=""*/}
                  {/*/>*/}
                  <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
                </figure>
              </div>
            </div>
            <div
              className="w-lightbox-control w-lightbox-left w-lightbox-inactive"
              role="button"
              aria-hidden="true"
              aria-controls="w-lightbox-view"
              aria-label="previous image"
              tabIndex={-1}
            ></div>
            <div
              className="w-lightbox-control w-lightbox-right w-lightbox-inactive"
              role="button"
              aria-hidden="true"
              aria-controls="w-lightbox-view"
              aria-label="next image"
              tabIndex={-1}
            ></div>
            <button
              type="button"
              className="w-lightbox-control w-lightbox-close"
              aria-label="close lightbox"
              tabIndex={0}
              onClick={() => {
                setData(null);
              }}
            ></button>
          </div>
          <div className="w-lightbox-strip" role="tablist"></div>
        </div>
      </div>
    </>
  );
}

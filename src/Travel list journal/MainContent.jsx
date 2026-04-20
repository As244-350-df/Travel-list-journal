export default function Content({image, dateAdded, country, description, googleMapsLink, name}) {
    return (
   <main className="main container">
      <div className="row">
        <div className="text-end img-cont col-6 text-secondary">
          <img
            src={image}
            alt={name}
            className="img-fluid destination-img"
          />
        </div>
        <div className="col-6">
          <div className="topcontents d-flex justify-content-start align-items-center mt-lg-5">
            <h2 className="px-1">
              <i className="fa-solid text-danger fa-location-dot"></i>
            </h2>
            <span className="mx-1">{country}</span>
            <a
              href={googleMapsLink}
              className="google-maps-link ml-3 text-secondary text-decoration-none"
              >
              view on google maps
            </a>
          </div>
          <div className="d-flex flex-column align-items-start justify-content-center pt-lg-2 mt-lg-3 description">
            <h1 className="text-dark py-lg-3 fw-bold">{name}</h1>
            <h3 className="h4 fw-bold my-2">{dateAdded}</h3>
            <p className="text-secondary">{description}</p>
          </div>
        </div>
    </div>
      {/* Additional content can be added here */}
    </main>
  );
}

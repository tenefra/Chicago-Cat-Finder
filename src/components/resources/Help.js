import React from "react"

function Help() {
  return (
    <section className="care-container">
      <div className="care-row">
        <div>
          <a target="_blank" rel="noreferrer" href="https://treehouseanimals.org/ways-to-give/">
            <h2 className="care-section-header">Tree House Humane Society</h2>
          </a>
          <p className="care-page-about">
            Believe it or not, humans are not Chicago’s only residents. It’s estimated that upwards of 200,000 homeless cats live in Chicago, the vast majority without access to food, water, and veterinary care. Stray and feral cats are highly vulnerable to unnecessary euthanasia when our city’s shelters are under-resourced.
            <br />
            <br />
            Your donation to Tree House goes directly to life-saving resources to give cats a second chance at life and a loving home.
          </p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://treehouseanimals.org/ways-to-give/">
          <img className="care-img" alt="Tree House Humane Society" src="https://treehouseanimals.org/wp-content/uploads/2021/05/TH_CatsAtWork_Logo_600x300_VerticalLeftEarTip_300dpi-e1626464213461-1024x574-1000x560-c-default.jpg" />
        </a>
      </div>
      <div className="care-row">
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.chicagocatrescue.org/donate">
            <h2 className="care-section-header">Chicago Cat Rescue</h2>
          </a>
          <p className="care-page-about">Chicago Cat Rescue is dedicated to helping homeless cats and kittens via rescue, adoption and education of their human companions. Chicago Cat Rescue is an all volunteer-run organization, and we rely on compassionate individuals in our community to foster our rescued cats until they find their forever homes.</p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://www.chicagocatrescue.org/donate">
          <img className="chicago-cat-img" alt="Chicago Cat Rescue" src="https://images.squarespace-cdn.com/content/v1/584df1ef579fb3cb326404fe/1575579870771-CMRK01MQNXWP6VEKP4FO/CCR-Logo.png?format=1500w" />
        </a>
      </div>
      <div className="care-row">
        <div>
          <a target="_blank" rel="noreferrer" href="https://hhforcats.org/support-donate/">
            <h2 className="care-section-header">Harmony House for Cats</h2>
          </a>
          <p className="care-page-about">Make a donation to Harmony House today to rescue the next cat or kitten in need. We receive no city, county, state, or federal funding, and we rely entirely upon contributions from caring animal lovers like you to provide for the cats.</p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://hhforcats.org/support-donate/">
          <img className="care-img" alt="Harmony House for Cats" src="https://hhforcats.org/wp-content/uploads/2013/06/header4.png" />
        </a>
      </div>
    </section>
  )
}

export default Help

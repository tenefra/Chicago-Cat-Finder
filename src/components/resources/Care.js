import React from "react"
import "./resourcesStyles.css"

function Care() {
  return (
    <section className="care-container">
      <div className="care-row">
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.aspca.org/pet-care/cat-care/general-cat-care">
            <h2 className="care-section-header">ASPCA General Cat Care</h2>
          </a>
          <p className="care-page-about">
            Have you recently added a feline friend to your family? Congratulations! We know you’ll be thrilled to have your new cat in your home. If you are considering adopting a cat, please visit your local shelter. We encourage you to browse our directory of adoptable cats in your area, or use our shelter finder to start your search. <br />
            <br />
            Read on for useful tips for new cat parents, and for those looking to brush up on their pet care skills.
          </p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://www.aspca.org/pet-care/cat-care/general-cat-care">
          <img className="care-img" alt="ASPCA General Cat Care" src="https://images.unsplash.com/photo-1619326230097-1b2102190f89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </a>
      </div>
      <div className="care-row">
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.jacksongalaxy.com/blog/">
            <h2 className="care-section-header">Jackson Galaxy Blog</h2>
          </a>
          <p className="care-page-about">Jackson Galaxy, host of Animal Planet's "My Cat From Hell" is one of the country's foremost experts in cat behavior and care. Read his blog here on how to take care of your cat!</p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://www.jacksongalaxy.com/blog/">
          <img className="care-img" alt="Jackson Galaxy" src="https://www.jacksongalaxy.com/wp-content/uploads/2021/09/fountain-800x450.jpg" />
        </a>
      </div>
      <div className="care-row">
        <div>
          <a target="_blank" rel="noreferrer" href="https://hhforcats.org/cat-resources/">
            <h2 className="care-section-header">Harmony House Resources</h2>
          </a>
          <p className="care-page-about">If you are a new cat or kitten owner, you probably have a lot of questions about caring for your new friend. As you may already know or will soon find out, cats are so many things: fun, playful, independent, loving, curious, smart, and often very entertaining. Since you’re online seeking information about cat care, your pet is lucky to have a caring owner.</p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://hhforcats.org/cat-resources/">
          <img className="care-img" alt="Harmony House Resources" src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </a>
      </div>
    </section>
  )
}

export default Care

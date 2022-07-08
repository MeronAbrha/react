import { useState } from "react";
import "./App.scss";

const exstingBody = `Existing ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
vel voluptatum?`

const cardBody = `CARD ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
vel voluptatum?`

const externalBody = `EXTERNAL ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
vel voluptatum?`

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const tabOptions =['Existing', 'Card', 'External']
  const bodyContent = [exstingBody, cardBody, externalBody]

  const tabHeader = tabOptions.map(( element, index) => {
    return (
        <button
            className={toggleState === index ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(index)}
            >
                {element}
        </button>
    )
  })


  const tabBody = bodyContent.map( (element, index ) => {
    return (
        <div
        className={toggleState === index ? "content  active-content" : "content"}
        onClick={() => toggleTab(index)}
        >
            {element}
        </div>
    )
  })

  return (
    <div className="container">
      <div className="bloc-tabs">
        {tabHeader}
      </div>

      <div className="content-tabs">
        {tabBody}
      </div>
    </div>
  );
}
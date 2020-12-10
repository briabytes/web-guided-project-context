import React, { useContext} from "react";
import { FamilyContext } from './contexts/FamilyContext';

const Siblings = (props) => {
  // const family = useContext(FamilyContext);

  return (
    <section className="parents">
      <FamilyContext.Consumer>
        {
          family => {
            return(
                family.siblings.map((p) => (
                  <div className="person" key={p.name}>
                    <img width="150" src={p.img} alt={p.name} />
                    <strong>{p.name}</strong>
                  </div>
              ))
            );
          }
        }
      </FamilyContext.Consumer>
    </section>
  );
};

export default Siblings;
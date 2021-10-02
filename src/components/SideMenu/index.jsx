import { Accordion, AccordionSection } from "../Accordion/index";
import { StyledSideMenu } from "./style";

const sideCategories = [
  {
    id: 1,
    name: "Cartes",
    subcategories: [
      {
        id: 1,
        name: `Vie Quotidienne`,
        url: "../../pages/Maps/index",
      },
      {
        id: 2,
        name: `Santé et Sécurité`,
        url: "../../pages/Maps/index",
      },
      {
        id: 3,
        name: `Environnement`,
        url: "../../pages/Maps/index",
      },
    ],
  },
  {
    id: 2,
    name: "Ma Destination",
    url: "../../pages/MyDestiantion/index",
  },
];

const SideMenu = (props) => {
  return (
    <StyledSideMenu open={props.open} onClick={props.onClick}>
      <AccordionSection>
        {sideCategories.map((sideCategory) => (
          <Accordion
            subcategories={
              sideCategory.subcategories ? sideCategory.subcategories : null
            }
            accordionTitle={sideCategory.name}
            key={`id-${sideCategory.name}`}
            onClik={() => console.log(sideCategory.subcategories)}
          >
            {sideCategory.name}
          </Accordion>
        ))}
      </AccordionSection>
    </StyledSideMenu>
  );
};

export default SideMenu;

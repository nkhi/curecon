import React from 'react';

// styles
import { ListItem, UnorderedList, Link } from './controlledAccordionStyles'

// For MUI Accordion 
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// components
import Emoji from '../../../../components/emoji'
// import SchoolModalContent from '../schoolModalContent'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    fontWeight: 500,
  },
}));

const ControlledAccordion = ({subregions}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleModal = (shortcode) => {
    // something about a modal give it shortcode
  };

  return (
    <div className={classes.root}>
      {subregions && subregions.map((subregion) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{subregion.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <UnorderedList>
            {subregion.schools.sort().map((schoolObject) => {
              {/* <ListItem onClick={() => handleModal(schoolObject.shortcode)}> */}
              return(
                <ListItem>
                  <Emoji symbol={schoolObject.emoji} />
                  <Link href={`/school/${schoolObject.shortcode}`}> {schoolObject.name}</Link>
                </ListItem> 
              )})
            }
            </UnorderedList>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default ControlledAccordion

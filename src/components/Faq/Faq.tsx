import css from "./Faq.module.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { faqData } from "../../data/faq";
import paws from "../../../public/paws.svg";
import type { AccordionProps } from "@mui/material/Accordion";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: "#ffffffff" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#3da9fc",
  borderRadius: "5px",
  flexDirection: "row",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  "& .MuiTypography-root": {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "32px",
    fontWeight: 400, // можно жирнее для вопросов
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px", // меньше на маленьких экранах
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "24px",
    },
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  "& .MuiTypography-root": {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "30px",
    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "20px",
    },
  },
}));
const Faq = () => {
  //   const itemId = React.useId();
  const [expanded, setExpanded] = React.useState<string | false>("p1");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section id="faq">
      <div className={css.faq}>
        <div className={css.faqWrapper}>
          <div className="container">
            <div className={css.faqBlock}>
              <h2 className={css.faqTitle}>FAQ</h2>
              <img className={css.faqPaws} src={paws} alt="icon" />
              <div className={css.faqAccordionCover}>
                {faqData.map((item) => (
                  <Accordion
                    className={css.accordion}
                    key={item.id}
                    expanded={expanded === `${item.id}`}
                    onChange={handleChange(`${item.id}`)}
                  >
                    <AccordionSummary
                      aria-controls={`${item.id}-content`}
                      id={item.id}
                    >
                      <Typography className={css.faqQuestion} component="span">
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={css.faqAnswer}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

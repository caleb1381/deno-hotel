import Faq from "../faq/faq";
import styles from "./faqs.module.css";

const questions = [
  {
    q: "What type of room can I book at Deno hotels and apartment",
    a: `Room options at Deno Hotels & Apartments include: Apartment Double, Suite, Studio`,
  },
  {
    q: "What type of room can I book at Deno hotels and apartmentWhat is there to do at Deno Hotels & Apartments?",
    a: `Deno Hotels & Apartments offers the following activities/services (charges may apply): Hot tub/Jacuzzi, Happy hour`,
  },
  {
    q: "Does Deno Hotels & Apartments have a hot tub for its guests?",
    a: `Yes, there's a hot tub. You can find out more about this and the other facilities at Deno Hotels & Apartments on this page.`,
  },
  {
    q: "How much does it cost to stay at Deno Hotels & Apartments?",
    a: `The prices at Deno Hotels & Apartments may vary depending on your stay (e.g. dates, hotel's policy etc.). To see prices, enter your dates.`,
  },
  {
    q: "What are the check-in and check-out at Deno Hotels & Apartments?",
    a: `Check-in at Deno Hotels & Apartments is from 12:00 PM, and check-out is until 12:00 PM.`,
  },
  {
    q: "Does Deno Hotels & Apartments have a restaurant on site?",
    a: `Deno Hotels & Apartments has 1 restaurant:`,
  },
  {
    q: "How far is Deno Hotels & Apartments to the center of Bauchi?",
    a: `Deno Hotels & Apartments is 5 km from the center of Bauchi. All distances are measured in straight lines. Actual travel distances may vary.`,
  },
];

const Faqs = () => {
  return (
    <div className={styles.container}>
      <div>FAQs about Deno Hotels & Apartments</div>
      <div>
        {questions.map((question, index) => (
          <Faq key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;

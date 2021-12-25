import React from "react";

const paragraphs = [
  "You will often hear child-rearing described as a time in your life when the days are long, but the years are short. One day your baby is a baby, and the next they are in kindergarten.",
  "But, it's not just their growing up that goes by in a flash: it's your life too. So, it's vital that during those long days of mothering, you attend to your needs and aspirations as well. It is your life flying by, right along with your children's.",
  "The purpose of this quiz is to help you visualize your life in relatable segments (weeks) to get you thinking about how you spend your time. Take stock in your accomplishments, recognize the time you have ahead of you, and contemplate how you will use that time and the things you will achieve.",
  "Complete the quiz to see your life in weeks! Consider printing a copy and keeping it somewhere that you will encounter it often.",
  "Answer these questions as completely as you can.",
];

const list = [
  "If a question doesn’t apply to you, leave it blank.",
  "If an event hasn’t happened yet, enter a date in the future (e.g., if you’re planning to have a child in two years).",
  "Your dates don’t need to be exact - your best guesses are fine.",
];

const LandingPage = (props: { setPage: any }) => {
  const { setPage } = props;
  return (
    <div
      style={{
        padding: "20px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Your Life in Weeks</h1>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <ul>
          {list.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => setPage("form")}>Begin</button>
    </div>
  );
};

export default LandingPage;

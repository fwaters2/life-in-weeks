import { Button, Divider, Typography } from "@mui/material";

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
        display: "flex",
        flexDirection: "column",
        padding: "2em 1em",
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
        }}
      >
        <Typography variant="h3" style={{ textAlign: "center" }}>
          Your Life in Weeks
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="logo.png"
            alt="logo"
            style={{
              borderRadius: "60px",
              width: "200px",
              margin: "1em",
            }}
          />
        </div>
        {paragraphs.map((p, i) => (
          <>
            <Divider style={{ marginTop: "1em", marginBottom: "1em" }} />
            <Typography variant="body2" key={i}>
              {p}
            </Typography>
          </>
        ))}
        <ul>
          {list.map((l, i) => (
            <Typography variant="body2" component="li" key={i}>
              {l}
            </Typography>
          ))}
        </ul>
      </div>
      <Button variant="contained" onClick={() => setPage("form")} fullWidth>
        Begin
      </Button>
    </div>
  );
};

export default LandingPage;

import "./About.css";

const About = () => {
  return (
    <>
      <header>
        <h1>About Us</h1>
        <h1>Create Ripples!</h1>
        <p>A pebble is all it takes.</p>
      </header>

      <img src="./about-img.png" alt="about" />
      
      <div className="content">
        <h1>Our Beginning</h1>
        <h4>
          A smart 20 year old, with ambitions running at high speed, realized
          that the world couldn't keep up - smartphones that drain out quick,
          devices that came with a cable entourage or just tech that seemed too
          complex and pricey. Convinced that these not-so-smart devices had to
          go, Pebble was born.
        </h4>

        <h2>Our Philosophy</h2>
        <p>
          Since its inception in 2013, there has been one principle that we, at
          pebble have held as holy grail - experiences crafted around 'you'. Our
          aim is to get a perfect blend of innovation, technology and design in
          each of our products, so that your experience with them is smooth and
          pleasurable. And we've got it right so far.
        </p>

        <h2>Our Promise</h2>
        <p>
          We want you to go out there and live your best life. Travel, dream,
          breathe, chase, reach, sleep, achieve, grow, thrive Do whatever it is
          you desire, we've got you. You are smooth, strong, resilient and
          versatile - Just like a pebble So go on, win the world, one pebble at
          a time. GET ON WITH IT.
        </p>
      </div>
    </>
  );
};

export default About;

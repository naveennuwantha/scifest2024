const confetti = {
    start: function () {
      confettiInterval = setInterval(function () {
        confetti.create();
      }, 100);
    },
    stop: function () {
      clearInterval(confettiInterval);
    },
    create: function () {
      const randomInRange = (min, max) => Math.random() * (max - min) + min;
  
      confetti({
        particleCount: 1,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: {
          x: randomInRange(0, 1),
          y: 0
        }
      });
    }
  };
  
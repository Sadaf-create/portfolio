
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "#0f0f1b" },
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150
    },
    move: {
      enable: true,
      speed: 2
    },
    size: { value: 2 }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});

class PersonalityAssessment {
  constructor() {
    this.dom = {
      progressCircle: document.querySelector(".progress-circle"),
      progressPercent: document.querySelector(".progress-percent"),
      questionCard: document.querySelector(".question-card"),
      optionsGrid: document.querySelector(".options-grid"),
      questionText: document.querySelector(".question-text"),
      screens: {
        welcome: document.querySelector(".welcome-screen"),
        test: document.querySelector(".test-screen"),
        results: document.querySelector(".results-screen"),
      },
      chart: document.getElementById("personality-chart"),
      typeTitle: document.querySelector(".type-title"),
      typeDescription: document.querySelector(".type-description"),
    };

    this.questions = [
      {
        question: "Как вы предпочитаете проводить свое свободное время?",
        options: [
          { text: "Чтение или просмотр тв в одиночестве 📖", trait: "introvert", emoji: "📖" },
          { text: "Общественные мероприятия 🎉", trait: "extrovert", emoji: "🎉" },
          { text: "Творческие проекты 🎨", trait: "creative", emoji: "🎨" },
          { text: "Заняться домашними делами 📌", trait: "structured", emoji: "📌" },
        ],
        category: "Social",
      },
      {
        question: "Принимая решения, вы:",
        options: [
          { text: "Проанализируйте все данные 📊", trait: "analytical", emoji: "📊" },
          { text: "Прислушивайтесь к своей интуиции 💡", trait: "intuitive", emoji: "💡" },
          { text: "Попросите совета 👥", trait: "social", emoji: "👥" },
          { text: "Рассмотрите плюсы и минусы ⚖️", trait: "balanced", emoji: "⚖️" },
        ],
        category: "Decision Making",
      },
      {
        question: "Как вы справляетесь со сроками?",
        options: [
          { text: "Планируете заранее 🗓️", trait: "planner", emoji: "🗓️" },
          { text: "Работаете под давлением ⏳", trait: "spontaneous", emoji: "⏳" },
          { text: "Разбиваете на этапы 📝", trait: "structured", emoji: "📝" },
          { text: "Адаптируетесь по мере необходимости 🌱", trait: "flexible", emoji: "🌱" },
        ],
        category: "Work Style",
      },
      {
        question: "Сталкиваясь с критикой, вы:",
        options: [
          { text: "Принимаете близко к сердцу 😢", trait: "sensitive", emoji: "😢" },
          { text: "Анализируете объективно 🧠", trait: "resilient", emoji: "🧠" },
          { text: "Обратитесь за разъяснениями ❓", trait: "curious", emoji: "❓" },
          { text: "Отстаивайте свою позицию 🛡️", trait: "confident", emoji: "🛡️" },
        ],
        category: "Emotional Response",
      },
      {
        question: "Ваш идеальный выходной включает в себя:",
        options: [
          { text: "Экстремальные виды спорта 🪂", trait: "adventurous", emoji: "🪂" },
          { text: "Домашний отдых 🛋️", trait: "introvert", emoji: "🛋️" },
          { text: "Общественные мероприятия 🥂", trait: "extrovert", emoji: "🥂" },
          { text: "Проекты для хобби 🔨", trait: "creative", emoji: "🔨" },
        ],
        category: "Lifestyle",
      },
      {
        question: "Изучая что-то новое, вы предпочитаете:",
        options: [
          { text: "Следовать инструкциям 📋", trait: "structured", emoji: "📋" },
          { text: "Экспериментировать на практике 🔬", trait: "spontaneous", emoji: "🔬" },
          { text: "Обсудить это с другими 💬", trait: "social", emoji: "💬" },
          { text: "Проводить глубокие исследования 📚", trait: "analytical", emoji: "📚" },
        ],
        category: "Learning Style",
      },
      {
        question: "Ваш подход к решению проблем:",
        options: [
          { text: "Логический анализ 🧮", trait: "analytical", emoji: "🧮" },
          { text: "Творческий мозговой штурм 💡", trait: "creative", emoji: "💡" },
          { text: "Командное сотрудничество 👥", trait: "social", emoji: "👥" },
          { text: "Пошаговый план 📈", trait: "structured", emoji: "📈" },
        ],
        category: "Problem Solving",
      },
      {
        question: "Как вы справляетесь с неожиданными изменениями?",
        options: [
          { text: "Быстрая адаптация 🔄", trait: "flexible", emoji: "🔄" },
          { text: "Чувствуете стресс 😰", trait: "sensitive", emoji: "😰" },
          { text: "Составляете новый план 📝", trait: "structured", emoji: "📝" },
          { text: "Видите новые возможности 🌟", trait: "adventurous", emoji: "🌟" },
        ],
        category: "Adaptability",
      },
      {
        question: "В командных проектах вы, как правило:",
        options: [
          { text: "Возьмёте на себя руководство 👑", trait: "confident", emoji: "👑" },
          { text: "Поддержите других 🤝", trait: "social", emoji: "🤝" },
          { text: "Сосредоточьтесь на своих задачах 📌", trait: "analytical", emoji: "📌" },
          { text: "Предлагаете свои идеи 💡", trait: "creative", emoji: "💡" },
        ],
        category: "Teamwork",
      },
      {
        question: "Ваш идеальный отдых - это:",
        options: [
          { text: "Пеший поход с рюкзаком 🎒", trait: "adventurous", emoji: "🎒" },
          { text: "Отдых на курорте 🏖️", trait: "balanced", emoji: "🏖️" },
          { text: "Культурное мероприятие 🏛️", trait: "curious", emoji: "🏛️" },
          { text: "Пребывание дома 🛋️", trait: "introvert", emoji: "🛋️" },
        ],
        category: "Vacation Preferences",
      },
      {
        question: "Знакомясь с новыми людьми, вы:",
        options: [
          { text: "Начнёте разговор 🗣️", trait: "extrovert", emoji: "🗣️" },
          { text: "Сначала понаблюдаете 👀", trait: "introvert", emoji: "👀" },
          { text: "Ищите точки соприкосновения 🤲", trait: "social", emoji: "🤲" },
          { text: "Используете профессиональный подход 🤵", trait: "resilient", emoji: "🤵" },
        ],
        category: "Social Interaction",
      },
      {
        question: "Как вы принимаете важные решения?",
        options: [
          { text: "Тщательно анализируете 🔍", trait: "analytical", emoji: "🔍" },
          { text: "Следуете интуиции 🌌", trait: "intuitive", emoji: "🌌" },
          { text: "Проконсультируйтесь с друзьями/семьей 👪", trait: "social", emoji: "👪" },
          { text: "Взвешиваете плюсы/минусы ⚖️", trait: "structured", emoji: "⚖️" },
        ],
        category: "Decision Process",
      },
      {
        question: "Ваше рабочее пространство обычно:",
        options: [
          { text: "Высокоорганизованное 🗄️", trait: "structured", emoji: "🗄️" },
          { text: "Творческий хаос 🎨", trait: "creative", emoji: "🎨" },
          { text: "Минималистский дизайн 🪑", trait: "balanced", emoji: "🪑" },
          { text: "Постоянно меняющееся 🌈", trait: "flexible", emoji: "🌈" },
        ],
        category: "Work Environment",
      },
      {
        question: "Сталкиваясь с конфликтом, вы:",
        options: [
          { text: "Вступаете сразу в конфликт ⚔️", trait: "confident", emoji: "⚔️" },
          { text: "Ищите компромисс 🤝", trait: "balanced", emoji: "🤝" },
          { text: "Анализируете причину 🧩", trait: "analytical", emoji: "🧩" },
          { text: "Избегаете конфронтации 🕊️", trait: "sensitive", emoji: "🕊️" },
        ],
        category: "Conflict Resolution",
      },
      {
        question: "Ваша энергия достигает пика, когда:",
        options: [
          { text: "Утреннее время 🌅", trait: "planner", emoji: "🌅" },
          { text: "Поздняя ночь 🌙", trait: "spontaneous", emoji: "🌙" },
          { text: "Вы на общественном мероприятии 🎉", trait: "extrovert", emoji: "🎉" },
          { text: "В cпокойные моменты 🤫", trait: "introvert", emoji: "🤫" },
        ],
        category: "Energy Patterns",
      },
      {
        question: "Осваивая новые навыки, вы:",
        options: [
          { text: "Следуете инструкциям 📺", trait: "structured", emoji: "📺" },
          { text: "Экспериментируете 🔬", trait: "creative", emoji: "🔬" },
          { text: "Присоединяетесь к группе 🎓", trait: "social", emoji: "🎓" },
          { text: "Проводите глубокие исследования 📚", trait: "analytical", emoji: "📚" },
        ],
        category: "Skill Acquisition",
      },
      {
        question: "Ваш подход к управлению временем:",
        options: [
          { text: "Строгий график 🕒", trait: "planner", emoji: "🕒" },
          { text: "Гибкий распорядок дня 🕰️", trait: "flexible", emoji: "🕰️" },
          { text: "Тяните до крайних сроков ⏳", trait: "spontaneous", emoji: "⏳" },
          { text: "Расставляете приоритеты в задачах 📋", trait: "structured", emoji: "📋" },
        ],
        category: "Time Management",
      },
      {
        question: "При получении обратной связи:",
        options: [
          { text: "Приветствуете критику 📈", trait: "resilient", emoji: "📈" },
          { text: "Принимаете близко к сердцу 😔", trait: "sensitive", emoji: "😔" },
          { text: "Анализируете логически 🧠", trait: "analytical", emoji: "🧠" },
          { text: "Обращаетесь за разъяснениями ❓", trait: "curious", emoji: "❓" },
        ],
        category: "Feedback Handling",
      },
      {
        question: "Ваш творческий процесс:",
        options: [
          { text: "Методичный 📐", trait: "structured", emoji: "📐" },
          { text: "Спонтанный 💥", trait: "spontaneous", emoji: "💥" },
          { text: "Коллективный 👥", trait: "social", emoji: "👥" },
          { text: "Экспериментальный 🧪", trait: "creative", emoji: "🧪" },
        ],
        category: "Creativity Style",
      },
      {
        question: "В социальных сетях вы обычно:",
        options: [
          { text: "Имеете много друзей 👋", trait: "extrovert", emoji: "👋" },
          { text: "Общаетесь только с близкими 🤗", trait: "introvert", emoji: "🤗" },
          { text: "Наблюдаете за динамикой 👀", trait: "analytical", emoji: "👀" },
          { text: "Активно участвуете 🎤", trait: "confident", emoji: "🎤" },
        ],
        category: "Social Dynamics",
      },
      {
        question: "Как вы справляетесь со стрессом?",
        options: [
          { text: "Занимаетесь спортом 🏋️", trait: "resilient", emoji: "🏋️" },
          { text: "Обсуждаете 💬", trait: "social", emoji: "💬" },
          { text: "Медитируете 🧘", trait: "introvert", emoji: "🧘" },
          { text: "Планируете решения 📝", trait: "structured", emoji: "📝" },
        ],
        category: "Stress Response",
      },
    ];

    this.traitWeights = {
      extrovert: 0,
      introvert: 0,
      analytical: 0,
      creative: 0,
      structured: 0,
      flexible: 0,
      sensitive: 0,
      resilient: 0,
      spontaneous: 0,
      planner: 0,
      intuitive: 0,
      social: 0,
      balanced: 0,
      adventurous: 0,
      confident: 0,
      curious: 0,
    };

    this.traitFrequencies = this.calculateTraitFrequencies();
    this.currentQuestion = 0;
    this.initializeProgressCircle();
    this.init();
  }

  initializeProgressCircle() {
    const circumference = 2 * Math.PI * 36;
    this.dom.progressCircle.style.strokeDasharray = circumference;
    this.dom.progressCircle.style.strokeDashoffset = circumference;
  }

  calculateTraitFrequencies() {
    return this.questions.reduce((acc, q) => {
      q.options.forEach((opt) => {
        acc[opt.trait] = (acc[opt.trait] || 0) + 1;
      });
      return acc;
    }, {});
  }

  init() {
    this.bindEvents();
    this.initializeChart();
    this.renderQuestion();
  }

  bindEvents() {
    document
      .querySelector(".start-btn")
      .addEventListener("click", () => this.startTest());
    document
      .querySelector(".retake-btn")
      .addEventListener("click", () => this.resetTest());
  }

  startTest() {
    gsap.to(".welcome-screen", {
      opacity: 1,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        this.dom.screens.welcome.classList.remove("active");
        this.dom.screens.test.classList.add("active");
        gsap.from(".question-card", { y: 50, opacity: 1, duration: 0.6 });
      },
    });
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestion];
    this.dom.optionsGrid.innerHTML = question.options
      .map(
        (opt) => `
      <button class="option-btn" data-trait="${opt.trait}">
        <span class="emoji">${opt.emoji}</span>${opt.text}
      </button>
    `
      )
      .join("");

    this.dom.questionText.textContent = question.question;
    this.addOptionListeners();
    this.updateProgress();
  }

  addOptionListeners() {
    this.dom.optionsGrid.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => this.handleAnswer(btn.dataset.trait));
    });
  }

  handleAnswer(trait) {
    this.traitWeights[trait] += 5;
    this.currentQuestion++;

    if (this.currentQuestion < this.questions.length) {
      gsap.to(this.dom.questionCard, {
        y: 50,
        opacity: 1,
        duration: 0.4,
        onComplete: () => {
          this.renderQuestion();
          gsap.from(this.dom.questionCard, {
            y: -50,
            opacity: 1,
            duration: 0.4,
          });
        },
      });
    } else {
      this.showResults();
    }
    this.animateProgress();
  }

  updateProgress() {
    const percent = Math.min(
      100,
      (this.currentQuestion / this.questions.length) * 100
    );
    this.dom.progressPercent.textContent = `${Math.round(percent)}%`;
    this.updateProgressCircle(percent);
  }

  updateProgressCircle(percent) {
    const circumference = 2 * Math.PI * 36;
    const offset = circumference - (percent / 100) * circumference;
    this.dom.progressCircle.style.strokeDashoffset = offset;
  }

  animateProgress() {
    const rawPercent = (this.currentQuestion / this.questions.length) * 100;
    const percent = Math.min(100, rawPercent);
    const circumference = 2 * Math.PI * 36;
    const targetOffset = circumference - (percent / 100) * circumference;

    gsap.to(this.dom.progressCircle, {
      strokeDashoffset: targetOffset,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  showResults() {
    gsap.to(this.dom.screens.test, {
      opacity: 1,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        this.dom.screens.test.classList.remove("active");
        this.dom.screens.results.classList.add("active");
        this.renderChart();
        this.setPersonalityType();
        this.triggerConfetti();
      },
    });
  }

  initializeChart() {
    this.chart = new Chart(this.dom.chart, {
      type: "bar",
      data: { datasets: [{}] },
      options: {
        responsive: true,
        indexAxis: "y",
        scales: {
          x: { max: 100, ticks: { callback: (value) => `${value}%` } },
          y: { grid: { display: false } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: () => "",
              label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
            },
          },
        },
      },
    });
  }
  renderChart() {
    const results = this.calculateResults().slice(0, 8);
    this.chart.data.labels = results.map((r) => r.trait);
    this.chart.data.datasets[0].data = results.map((r) => r.value);
    this.chart.data.datasets[0].backgroundColor = results.map((r) =>
      this.getTraitColor(r.trait)
    );
    this.chart.update();
  }

  getTraitColor(trait) {
    const colors = {
      Extrovert: "#FF6B6B",
      Introvert: "#4ECDC4",
      Analytical: "#6C63FF",
      Creative: "#FFA62E",
      Structured: "#00C9A7",
      Flexible: "#FF9F1C",
      Sensitive: "#FF6392",
      Resilient: "#2EC4B6",
      Spontaneous: "#E71D36",
      Planner: "#2A9D8F",
      Intuitive: "#F15BB5",
      Social: "#F94144",
      Balanced: "#F8961E",
      Adventurous: "#3A86FF",
      Confident: "#8338EC",
      Curious: "#FF006E",
    };
    return colors[trait] || "#6C63FF";
  }

  calculateResults() {
    return Object.entries(this.traitWeights)
      .map(([trait, value]) => ({
        trait: this.formatTraitName(trait),
        value: Math.min(
          100,
          Math.round((value / (this.traitFrequencies[trait] * 5)) * 100)
        ),
      }))
      .filter((item) => item.value > 0)
      .sort((a, b) => b.value - a.value);
  }

  formatTraitName(trait) {
    return trait.charAt(0).toUpperCase() + trait.slice(1);
  }

  setPersonalityType() {
    const results = this.calculateResults();
    const primaryTrait = results[0].trait;
    const typeMap = {
      Extrovert: {
        title: "Социальный катализатор",
        desc: "Вы преуспеваете в коллективе и заряжаете окружающих своей природной харизмой. Ваш энтузиазм заразителен, что делает вас центром внимания любого собрания.",
      },
      Introvert: {
        title: "Стратегический мыслитель",
        desc: "Вы предпочитаете глубокие связи светской беседе, а ваша наблюдательность помогает вам интуитивно понимать сложные ситуации.",
      },
      Analytical: {
        title: "Логический архитектор",
        desc: "Ваш методичный подход и любовь к данным позволяют вам превосходно решать сложные задачи на системном основе.",
      },
      Creative: {
        title: "Дальновидный Творец",
        desc: "Ваше воображение не знает границ и вы видите возможности, которые упускают другие. Вы превращаете абстрактные идеи в реальные инновации.",
      },
      Structured: {
        title: "Главный организатор",
        desc: "Ваша любовь к порядку и планированию гарантирует, что ничто не выйдет из-под контроля. Вы преуспеваете в создании эффективных систем.",
      },
      Flexible: {
        title: "Адаптивный новатор",
        desc: "Вы преуспеваете в динамичной среде и легко приспосабливаетесь к меняющимся обстоятельствам.",
      },
      Sensitive: {
        title: "Чуткая душа",
        desc: "Ваша глубокая эмоциональная осознанность позволяет вам общаться с другими людьми на глубоком уровне и поддерживать значимые отношения.",
      },
      Resilient: {
        title: "Непоколебимый якорь",
        desc: "Вы сохраняете самообладание под давлением и служите стабилизирующей силой в трудные времена.",
      },
      Spontaneous: {
        title: "Свободный дух",
        desc: "Ваша способность жить настоящим моментом и принимать неопределенность приводит к захватывающим возможностям и приключениям.",
      },
      Planner: {
        title: "Архитектор деталей",
        desc: "Ваша тщательная подготовка и дальновидность обеспечивают бесперебойное выполнение сложных проектов и поставленных целей.",
      },
      Intuitive: {
        title: "Инстинктивный навигатор",
        desc: "Вы доверяете своей интуиции и обладаете сверхъестественной способностью читать между строк в любой ситуации.",
      },
      Social: {
        title: "Строитель сообщества",
        desc: "Вы естественным образом укрепляете связи между людьми и создаете прочные сети поддержки, куда бы вы ни отправились.",
      },
      Balanced: {
        title: "Гармоничный посредник",
        desc: "Вы превосходно умеете находить золотую середину и поддерживать равновесие как в личных, так и в профессиональных отношениях.",
      },
      Adventurous: {
        title: "Ограничитель границ",
        desc: "Ваша жажда новых впечатлений побуждает вас постоянно выходить за рамки привычных рамок.",
      },
      Confident: {
        title: "Смелый лидер",
        desc: "Ваша уверенность в себе вдохновляет других следовать вашему видению и мужественно принимать вызовы.",
      },
      Curious: {
        title: "Вечный ученик",
        desc: "Ваше ненасытное любопытство побуждает вас постоянно исследовать и понимать окружающий мир.",
      },
    };

    const personality = typeMap[primaryTrait] || {
      title: "Сбалансированная Динамо-машина",
      desc: "Вы поддерживаете гармонию между различными аспектами своей личности, прекрасно приспосабливаясь к любой ситуации.",
    };

    this.dom.typeTitle.textContent = personality.title;
    this.dom.typeDescription.textContent = personality.desc;
    this.updateColorScheme(primaryTrait);
  }

  updateColorScheme(trait) {
    const hueMap = {
      Extrovert: 4,
      Introvert: 168,
      Analytical: 250,
      Creative: 32,
      Structured: 164,
      Flexible: 200,
      Sensitive: 330,
      Resilient: 180,
      Spontaneous: 0,
      Planner: 150,
      Intuitive: 300,
      Social: 10,
      Balanced: 40,
      Adventurous: 210,
      Confident: 270,
      Curious: 320,
    };

    gsap.to(":root", {
      "--primary-hue": hueMap[trait] || 250,
      duration: 1.5,
      ease: "power2.out",
    });
  }

  triggerConfetti() {
    const fire = (ratio, opts) =>
      confetti({
        ...opts,
        particleCount: Math.floor(200 * ratio),
        origin: { y: 0.7 },
        colors: ["#FF6B6B", "#6C63FF", "#4ECDC4", "#FFA62E"],
      });

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  }

  resetTest() {
    gsap.to(this.dom.screens.results, {
      opacity: 1,
      y: 50,
      duration: 0.5,
      onComplete: () => {
        this.currentQuestion = 0;
        Object.keys(this.traitWeights).forEach(
          (k) => (this.traitWeights[k] = 0)
        );
        this.initializeProgressCircle();
        this.dom.progressPercent.textContent = "0%";

        if (this.chart) {
          this.chart.destroy();
          this.initializeChart();
        }

        this.dom.screens.results.classList.remove("active");
        this.dom.screens.welcome.classList.add("active");
        this.renderQuestion();
        gsap.set(this.dom.questionCard, { y: 0, opacity: 1 });
      },
    });
  }

  
}

window.addEventListener("load", () => new PersonalityAssessment());

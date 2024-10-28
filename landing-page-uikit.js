const uikit = (() => {
  function createNavigation(options = {}) {
    // Set default options
    const {
      logo = { src: "https://dummyimage.com/180x60/4c1d95/ffffff&text=YourSITE", alt: "YourSITE", href: "/" },
      links = [
        { text: "Services", href: "#services" },
        { text: "Process", href: "#process" },
        { text: "Clients", href: "#clients" },
        { text: "Team", href: "#team" },
      ],
      actionButtons = [
        { text: "Contact Us", href: "#contact", color: "border-2 border-purple-900 text-purple-900 hover:bg-purple-50", handler: null },
        { text: "Get Demo", href: "#demo", color: "border-2 border-purple-900 bg-purple-900 text-white hover:bg-purple-800", handler: null },
      ],
      menuToggleColor = "bg-purple-900",
      onScrollHide = true,
    } = options;

    // Create main nav container
    const nav = document.createElement("nav");
    nav.className = "fixed bg-white top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50";

    // Logo element
    const logoContainer = document.createElement("a");
    logoContainer.href = logo.href || "/";
    logoContainer.className = "flex-shrink-0";
    const logoImg = document.createElement("img");
    logoImg.src = logo.src;
    logoImg.alt = logo.alt;
    logoImg.className = "h-10";
    logoContainer.appendChild(logoImg);

    // Desktop menu links
    const desktopMenu = document.createElement("div");
    desktopMenu.className = "hidden lg:flex items-center space-x-8";

    const linksContainer = document.createElement("div");
    linksContainer.className = "flex space-x-8";
    links.forEach((link) => {
      const linkElem = document.createElement("a");
      linkElem.href = link.href;
      linkElem.className = "text-gray-600 hover:text-purple-900";
      linkElem.textContent = link.text;
      linksContainer.appendChild(linkElem);
    });

    // Action buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "flex items-center space-x-4";
    actionButtons.forEach((button) => {
      const buttonElem = document.createElement("a");
      buttonElem.href = button.href;
      buttonElem.className = `px-4 py-2 rounded-md ${button.color}`;
      buttonElem.textContent = button.text;
      if (button.handler) {
        buttonElem.addEventListener("click", button.handler);
      }
      buttonsContainer.appendChild(buttonElem);
    });

    desktopMenu.appendChild(linksContainer);
    desktopMenu.appendChild(buttonsContainer);

    // Mobile menu button
    const menuBtn = document.createElement("button");
    menuBtn.id = "menuBtn";
    menuBtn.className = "lg:hidden p-2";
    menuBtn.setAttribute("aria-label", "Menu");
    [1, 2, 3].forEach(() => {
      const line = document.createElement("div");
      line.className = `w-6 h-0.5 ${menuToggleColor} mb-1.5`;
      menuBtn.appendChild(line);
    });

    // Mobile menu
    const mobileMenu = document.createElement("div");
    mobileMenu.id = "mobileMenu";
    mobileMenu.className = "hidden lg:hidden bg-white border-t border-gray-200";
    const mobileLinksContainer = document.createElement("div");
    mobileLinksContainer.className = "px-4 py-2 space-y-2";

    links.forEach((link) => {
      const linkElem = document.createElement("a");
      linkElem.href = link.href;
      linkElem.className = "block py-2 text-gray-600";
      linkElem.textContent = link.text;
      linkElem.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      mobileLinksContainer.appendChild(linkElem);
    });

    // Mobile action buttons
    actionButtons.forEach((button) => {
      const buttonElem = document.createElement("a");
      buttonElem.href = button.href;
      buttonElem.className = `block py-2 px-4 rounded-md text-center ${button.color}`;
      buttonElem.textContent = button.text;
      if (button.handler) {
        buttonElem.addEventListener("click", button.handler);
      }
      buttonElem.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      mobileLinksContainer.appendChild(buttonElem);
    });

    mobileMenu.appendChild(mobileLinksContainer);

    // Menu toggle functionality
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Append elements
    const navContainer = document.createElement("div");
    navContainer.className = "max-w-7xl mx-auto px-4 flex justify-between items-center h-16";
    navContainer.appendChild(logoContainer);
    navContainer.appendChild(desktopMenu);
    navContainer.appendChild(menuBtn);
    nav.appendChild(navContainer);
    nav.appendChild(mobileMenu);

    // Scroll hide/show functionality
    if (onScrollHide) {
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
      });
    }

    return nav;
  }

  function createHero(options = {}) {
    const {
      welcomeText = "Welcome to YourSITE Consulting",
      title = "Transform Your Business with",
      highlightedText = "Intelligent Solutions",
      subtitle = "Leverage cutting-edge artificial intelligence to streamline operations, enhance decision-making, and drive unprecedented growth for your enterprise.",
      buttons = [
        { text: "Watch Demo", href: "#demo", color: "bg-purple-900 text-white hover:bg-purple-800" },
        { text: "Get Started", href: "#contact", color: "border-2 border-purple-900 text-purple-900 hover:bg-purple-50" },
      ],
      rating = { stars: "5.0", text: "5.0 rating on Clutch" },
      enterprisesServed = { count: "500+", description: "enterprises served" },
      image = {
        src: "https://dummyimage.com/600x500/4c1d95/ffffff&text=AI+Platform+Interface",
        alt: "AI Platform Interface",
      },
    } = options;

    // Create the main section
    const section = document.createElement("section");
    section.className = "pt-32 pb-20 px-4";

    // Container div
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    // Grid wrapper
    const gridWrapper = document.createElement("div");
    gridWrapper.className = "lg:grid lg:grid-cols-2 lg:gap-12 items-center";

    // Text Content
    const textContent = document.createElement("div");
    textContent.className = "max-w-xl";

    // Welcome Text Badge
    const welcomeBadge = document.createElement("span");
    welcomeBadge.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
    welcomeBadge.textContent = welcomeText;

    // Title with Highlighted Text
    const titleElem = document.createElement("h1");
    titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
    titleElem.innerHTML = `${title} <span class="text-purple-900 relative">${highlightedText}<span class="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-10"></span></span>`;

    // Subtitle
    const subtitleElem = document.createElement("p");
    subtitleElem.className = "text-gray-600 text-lg mb-8";
    subtitleElem.textContent = subtitle;

    // Buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex flex-wrap gap-4 mb-8";
    buttons.forEach((button) => {
      const buttonElem = document.createElement("a");
      buttonElem.href = button.href;
      buttonElem.className = `px-6 py-3 rounded-md transition-colors ${button.color}`;
      buttonElem.textContent = button.text;
      buttonContainer.appendChild(buttonElem);
    });

    // Rating and Enterprise Served
    const statsContainer = document.createElement("div");
    statsContainer.className = "flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200";

    // Rating
    const ratingContainer = document.createElement("div");
    ratingContainer.className = "flex items-center gap-2";

    // Extract star count from the first number in the rating text
    const starCount = parseInt(rating.stars, 10) || 0;
    const stars = document.createElement("div");
    stars.className = "text-blue-500";
    stars.innerHTML = "★".repeat(starCount).padEnd(5, "☆"); // Full stars and empty stars for 5-star scale

    const ratingText = document.createElement("span");
    ratingText.className = "text-sm text-gray-600";
    ratingText.textContent = rating.text;

    ratingContainer.appendChild(stars);
    ratingContainer.appendChild(ratingText);

    // Divider
    const divider = document.createElement("div");
    divider.className = "w-px h-6 bg-gray-200";

    // Enterprises Served
    const enterpriseContainer = document.createElement("div");
    const enterpriseCount = document.createElement("span");
    enterpriseCount.className = "text-xl font-bold";
    enterpriseCount.textContent = enterprisesServed.count;
    const enterpriseText = document.createElement("span");
    enterpriseText.className = "text-sm text-gray-600 ml-2";
    enterpriseText.textContent = enterprisesServed.description;
    enterpriseContainer.appendChild(enterpriseCount);
    enterpriseContainer.appendChild(enterpriseText);

    // Append elements to stats container
    statsContainer.appendChild(ratingContainer);
    statsContainer.appendChild(divider);
    statsContainer.appendChild(enterpriseContainer);

    // Append text elements to text content
    textContent.appendChild(welcomeBadge);
    textContent.appendChild(titleElem);
    textContent.appendChild(subtitleElem);
    textContent.appendChild(buttonContainer);
    textContent.appendChild(statsContainer);

    // Image Content
    const imageContainer = document.createElement("div");
    imageContainer.className = "mt-12 lg:mt-0 relative float";
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "relative rounded-xl overflow-hidden shadow-2xl";

    const imgElem = document.createElement("img");
    imgElem.src = image.src;
    imgElem.alt = image.alt;
    imgElem.className = "w-full";

    // Decorative Elements
    const decorativeCircle1 = document.createElement("div");
    decorativeCircle1.className = "absolute -right-5 -top-5 w-32 h-32 bg-gray-200 opacity-20 rounded-full";
    const decorativeCircle2 = document.createElement("div");
    decorativeCircle2.className = "absolute -left-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50";

    // Append elements to image container
    imageWrapper.appendChild(imgElem);
    imageWrapper.appendChild(decorativeCircle1);
    imageWrapper.appendChild(decorativeCircle2);
    imageContainer.appendChild(imageWrapper);

    // Append text content and image to grid wrapper
    gridWrapper.appendChild(textContent);
    gridWrapper.appendChild(imageContainer);

    // Append grid wrapper to container
    container.appendChild(gridWrapper);

    // Append container to section
    section.appendChild(container);

    return section;
  }

  function createLeadCapture(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      formFields = [
        { type: "text", placeholder: "First Name" },
        { type: "text", placeholder: "Last Name" },
        { type: "email", placeholder: "Email" },
        { type: "tel", placeholder: "Phone Number" },
        { type: "text", placeholder: "Company" },
        { type: "select", placeholder: "Select a Country", options: ["United States", "United Kingdom", "Canada", "Australia"] },
      ],
      buttonText = "Get Started",
      buttonClass = "w-full py-3 px-6 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-colors font-medium",
      onSubmit = (data) => console.log("Form submitted with data:", data),
      features = [
        {
          iconClass: "fas fa-shopping-cart",
          iconBgColor: "bg-blue-100",
          iconColor: "text-blue-500",
          title: "AI-Powered Analytics",
          description: "Transform your data into actionable insights with our advanced AI analytics platform. Make informed decisions faster.",
        },
        {
          iconClass: "fas fa-envelope",
          iconBgColor: "bg-purple-100",
          iconColor: "text-purple-500",
          title: "Process Automation",
          description: "Streamline your operations with intelligent automation solutions that reduce costs and improve efficiency.",
        },
        {
          iconClass: "fas fa-video",
          iconBgColor: "bg-indigo-100",
          iconColor: "text-indigo-500",
          title: "Predictive Modeling",
          description: "Leverage machine learning to forecast trends and prepare for future market conditions.",
        },
        {
          iconClass: "fas fa-camera",
          iconBgColor: "bg-pink-100",
          iconColor: "text-pink-500",
          title: "Custom AI Solutions",
          description: "Tailored artificial intelligence solutions designed specifically for your business needs.",
        },
      ],
    } = options;

    const section = document.createElement("section");
    section.className = "py-16 px-4 bg-purple-50/50";

    // Section Title
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    const tagElem = document.createElement("span");
    tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
    tagElem.textContent = sectionTag;

    const titleElem = document.createElement("h2");
    titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
    titleElem.textContent = title;

    const subheadingElem = document.createElement("h3");
    subheadingElem.className = "text-3xl font-bold text-center mb-6";
    subheadingElem.textContent = subheading;

    const descriptionElem = document.createElement("p");
    descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
    descriptionElem.textContent = description;

    titleContainer.appendChild(tagElem);
    titleContainer.appendChild(titleElem);
    titleContainer.appendChild(subheadingElem);
    titleContainer.appendChild(descriptionElem);
    section.appendChild(titleContainer);

    // Form and Features Container
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-start";

    // Form Column
    const formColumn = document.createElement("div");
    formColumn.className = "max-w-xl";

    const form = document.createElement("form");
    form.className = "space-y-4";

    formFields.forEach((field) => {
      let inputElem;
      if (field.type === "select") {
        inputElem = document.createElement("select");
        inputElem.className = "w-full p-3 rounded-md border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-500";
        inputElem.placeholder = field.placeholder;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = field.placeholder;
        inputElem.appendChild(defaultOption);

        field.options.forEach((option) => {
          const optionElem = document.createElement("option");
          optionElem.value = option;
          optionElem.textContent = option;
          inputElem.appendChild(optionElem);
        });
      } else {
        inputElem = document.createElement("input");
        inputElem.type = field.type;
        inputElem.placeholder = field.placeholder;
        inputElem.className = "w-full p-3 rounded-md border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all";
      }
      form.appendChild(inputElem);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.className = buttonClass;
    submitButton.textContent = buttonText;

    // Form submit handler
    submitButton.addEventListener("click", () => {
      const formData = Array.from(form.elements)
        .filter((el) => el.tagName !== "BUTTON")
        .reduce((acc, el) => {
          acc[el.placeholder || el.name] = el.value;
          return acc;
        }, {});
      onSubmit(formData);
    });

    form.appendChild(submitButton);
    formColumn.appendChild(form);
    container.appendChild(formColumn);

    // Features Column
    const featuresColumn = document.createElement("div");
    featuresColumn.className = "mt-12 lg:mt-0 space-y-8";

    features.forEach((feature) => {
      const featureContainer = document.createElement("div");
      featureContainer.className = "flex gap-4";

      const iconContainer = document.createElement("div");
      iconContainer.className = `flex-shrink-0 w-12 h-12 ${feature.iconBgColor} rounded-lg flex items-center justify-center`;

      const iconElem = document.createElement("i");
      iconElem.className = `${feature.iconClass} ${feature.iconColor} text-xl`;
      iconContainer.appendChild(iconElem);

      const featureText = document.createElement("div");
      const featureTitle = document.createElement("h3");
      featureTitle.className = "text-xl font-semibold mb-2";
      featureTitle.textContent = feature.title;

      const featureDescription = document.createElement("p");
      featureDescription.className = "text-gray-600";
      featureDescription.textContent = feature.description;

      featureText.appendChild(featureTitle);
      featureText.appendChild(featureDescription);

      featureContainer.appendChild(iconContainer);
      featureContainer.appendChild(featureText);
      featuresColumn.appendChild(featureContainer);
    });

    container.appendChild(featuresColumn);
    section.appendChild(container);

    return section;
  }

  function createFooter(options = {}) {
    const {
      logo = { src: "https://dummyimage.com/180x60/4c1d95/ffffff&text=YourSITE", alt: "YourSITE" },
      description = "Empowering businesses through intelligent transformation. We bridge the gap between human expertise and artificial intelligence.",
      socialLinks = [
        { iconClass: "fab fa-linkedin-in", href: "#" },
        { iconClass: "fab fa-twitter", href: "#" },
        { iconClass: "fab fa-github", href: "#" },
        { iconClass: "fab fa-instagram", href: "#" },
      ],
      footerSections = {
        services: { title: "SERVICES", links: ["AI Strategy", "Implementation", "Training & Support", "Data Analytics", "Custom Solutions"].map((text) => ({ text, href: "#" })) },
        company: { title: "COMPANY", links: ["About Us", "Our Team", "Careers", "Blog", "Press Kit"].map((text) => ({ text, href: "#" })) },
      },
      newsletter = {
        title: "STAY UPDATED",
        text: "Subscribe to our newsletter for AI insights, company updates, and industry news.",
        placeholder: "Enter your email",
        subscribeText: "Subscribe",
        agreementText: "We will never spam. That’s our promise.",
        onSubscribe: (email) => console.log(`Subscribed with email: ${email}`),
      },
      legalLinks = [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Cookie Settings", href: "#" },
        { text: "Accessibility", href: "#" },
      ],
      certifications = [
        { src: "https://dummyimage.com/60x30/4CAF50/ffffff&text=ISO", alt: "ISO Certification" },
        { src: "https://dummyimage.com/60x30/2196F3/ffffff&text=SOC2", alt: "SOC2 Certification" },
        { src: "https://dummyimage.com/60x30/F44336/ffffff&text=GDPR", alt: "GDPR Compliant" },
      ],
    } = options;

    const footer = document.createElement("footer");
    footer.className = "bg-gray-900 text-gray-300 py-16 px-4";

    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    // Main footer grid
    const footerGrid = document.createElement("div");
    footerGrid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12";

    // Brand Column
    const brandColumn = document.createElement("div");
    brandColumn.className = "lg:col-span-1";

    const logoImg = document.createElement("img");
    logoImg.src = logo.src;
    logoImg.alt = logo.alt;
    logoImg.className = "h-10 mb-6";
    brandColumn.appendChild(logoImg);

    const descriptionElem = document.createElement("p");
    descriptionElem.className = "text-gray-400 mb-6";
    descriptionElem.textContent = description;
    brandColumn.appendChild(descriptionElem);

    // Social Links
    const socialLinksContainer = document.createElement("div");
    socialLinksContainer.className = "flex space-x-4";
    socialLinks.forEach((link) => {
      const socialLink = document.createElement("a");
      socialLink.href = link.href;
      socialLink.className = "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors";
      socialLink.innerHTML = `<i class="${link.iconClass}"></i>`;
      socialLinksContainer.appendChild(socialLink);
    });
    brandColumn.appendChild(socialLinksContainer);

    // Services and Company Sections
    const createSection = (section) => {
      const sectionDiv = document.createElement("div");
      const sectionTitle = document.createElement("h3");
      sectionTitle.className = "text-white font-semibold mb-4";
      sectionTitle.textContent = section.title;
      sectionDiv.appendChild(sectionTitle);

      const linkList = document.createElement("ul");
      linkList.className = "space-y-3";
      section.links.forEach((link) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.className = "hover:text-white transition-colors";
        anchor.textContent = link.text;
        listItem.appendChild(anchor);
        linkList.appendChild(listItem);
      });
      sectionDiv.appendChild(linkList);
      return sectionDiv;
    };

    footerGrid.appendChild(brandColumn);
    footerGrid.appendChild(createSection(footerSections.services));
    footerGrid.appendChild(createSection(footerSections.company));

    // Newsletter Column
    const newsletterColumn = document.createElement("div");
    newsletterColumn.className = "lg:col-span-2";

    const newsletterTitle = document.createElement("h3");
    newsletterTitle.className = "text-white font-semibold mb-4";
    newsletterTitle.textContent = newsletter.title;
    newsletterColumn.appendChild(newsletterTitle);

    const newsletterText = document.createElement("p");
    newsletterText.className = "text-sm text-gray-400 mb-4";
    newsletterText.textContent = newsletter.text;
    newsletterColumn.appendChild(newsletterText);

    const newsletterForm = document.createElement("form");
    newsletterForm.className = "space-y-4";

    const formGroup = document.createElement("div");
    formGroup.className = "flex rounded overflow-hidden";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = newsletter.placeholder;
    emailInput.className = "flex-1 bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-purple-500";
    formGroup.appendChild(emailInput);

    const subscribeButton = document.createElement("button");
    subscribeButton.type = "button"; // Avoid default form submission
    subscribeButton.className = "bg-purple-600 text-white px-4 py-2 hover:bg-purple-500 transition-colors rounded-r";
    subscribeButton.textContent = newsletter.subscribeText;

    // Subscribe button handler
    subscribeButton.addEventListener("click", () => {
      const email = emailInput.value;
      newsletter.onSubscribe(email); // Pass email value to handler
    });

    formGroup.appendChild(subscribeButton);
    newsletterForm.appendChild(formGroup);

    // Agreement Text
    const agreementText = document.createElement("p");
    agreementText.className = "text-xs text-gray-400 mt-2";
    agreementText.textContent = newsletter.agreementText;
    newsletterForm.appendChild(agreementText);

    newsletterColumn.appendChild(newsletterForm);
    footerGrid.appendChild(newsletterColumn);
    container.appendChild(footerGrid);

    // Footer Bottom Section
    const footerBottom = document.createElement("div");
    footerBottom.className = "pt-8 border-t border-gray-800";

    const footerBottomContainer = document.createElement("div");
    footerBottomContainer.className = "flex flex-col lg:flex-row justify-between items-center gap-4";

    const copyright = document.createElement("div");
    copyright.className = "text-sm";
    copyright.textContent = "© 2024 YourSITE. All rights reserved.";

    const legalLinksContainer = document.createElement("div");
    legalLinksContainer.className = "flex flex-wrap gap-6 text-sm";
    legalLinks.forEach((link) => {
      const legalLink = document.createElement("a");
      legalLink.href = link.href;
      legalLink.className = "hover:text-white transition-colors";
      legalLink.textContent = link.text;
      legalLinksContainer.appendChild(legalLink);
    });

    const certificationsContainer = document.createElement("div");
    certificationsContainer.className = "flex gap-4";
    certifications.forEach((certification) => {
      const certImg = document.createElement("img");
      certImg.src = certification.src;
      certImg.alt = certification.alt;
      certImg.className = "h-8";
      certificationsContainer.appendChild(certImg);
    });

    footerBottomContainer.appendChild(copyright);
    footerBottomContainer.appendChild(legalLinksContainer);
    footerBottomContainer.appendChild(certificationsContainer);
    footerBottom.appendChild(footerBottomContainer);
    container.appendChild(footerBottom);

    footer.appendChild(container);
    return footer;
  }

  function createSocialProof(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      reviews = [
        {
          rating: 5,
          text: "Landify understands content creation. A partner that crafts engaging copy, making my content strategy smarter.",
          imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=AS",
          imageAlt: "Alex Smith",
          name: "Alex Smith",
          handle: "@alexsmith",
        },
        {
          rating: 5,
          text: "Optimized response times of Landify are a game-changer. Quick iterations and tailored solutions make it.",
          imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=DV",
          imageAlt: "David Visionary",
          name: "David Visionary",
          handle: "@davidvisionary",
        },
        // Additional reviews can be added here
      ],
    } = options;

    // Create main section
    const section = document.createElement("section");
    section.className = "py-16 px-4 bg-gray-50";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Reviews Grid Container
    const reviewsGrid = document.createElement("div");
    reviewsGrid.className = "max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8";

    reviews.forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.className = "bg-white rounded-xl p-8 shadow-sm";

      // Star Rating
      const ratingContainer = document.createElement("div");
      ratingContainer.className = "flex items-center text-yellow-400 mb-4";
      for (let i = 0; i < review.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star";
        ratingContainer.appendChild(starIcon);
      }
      reviewCard.appendChild(ratingContainer);

      // Review Text
      const reviewText = document.createElement("p");
      reviewText.className = "text-gray-600 mb-6";
      reviewText.textContent = review.text;
      reviewCard.appendChild(reviewText);

      // Reviewer Info
      const reviewerContainer = document.createElement("div");
      reviewerContainer.className = "flex items-center gap-4";

      const reviewerImage = document.createElement("img");
      reviewerImage.src = review.imageSrc;
      reviewerImage.alt = review.imageAlt;
      reviewerImage.className = "w-12 h-12 rounded-full";
      reviewerContainer.appendChild(reviewerImage);

      const reviewerDetails = document.createElement("div");

      const reviewerName = document.createElement("h4");
      reviewerName.className = "font-semibold";
      reviewerName.textContent = review.name;
      reviewerDetails.appendChild(reviewerName);

      const reviewerHandle = document.createElement("p");
      reviewerHandle.className = "text-sm text-gray-500";
      reviewerHandle.textContent = review.handle;
      reviewerDetails.appendChild(reviewerHandle);

      reviewerContainer.appendChild(reviewerDetails);
      reviewCard.appendChild(reviewerContainer);

      reviewsGrid.appendChild(reviewCard);
    });

    section.appendChild(reviewsGrid);
    return section;
  }

  function createPricing(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      tickColor = "text-green-500", // Default color for tick icons
      pricingOptions = [
        {
          imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=AI",
          imageAlt: "AI Starter Icon",
          title: "AI Starter Kit",
          subtitle: "Essential AI tools for small teams",
          description: "Get started with AI tools and models tailored for startups.",
          items: ["12 AI Models", "Cloud-Based Processing", "NLP, Vision, Analytics Use Cases", "Business License"],
          prePriceDescription: "The most cost-effective option. For a long-term relationship with us 🧡",
          offerPrice: "$499",
          originalPrice: "$899",
          postPriceDescription: "Paid quarterly, pause or cancel anytime",
          buttonText: "Get Started",
          buttonHandler: () => alert("AI Starter Kit selected"),
          badge: "Most Popular",
          style: "bg-gradient-to-b from-purple-50 to-blue-50",
        },
        {
          imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=EN",
          imageAlt: "Enterprise AI Icon",
          title: "Enterprise AI Suite",
          subtitle: "Advanced AI tools for large organizations",
          description: "Complete solution with dedicated support and custom integrations.",
          items: ["Advanced AI Models", "Dedicated Support", "Custom Integrations", "Enterprise License"],
          prePriceDescription: "Optimal for scaling AI across large teams.",
          offerPrice: "$1,999",
          postPriceDescription: "Billed monthly, cancel anytime",
          buttonText: "Schedule Demo",
          buttonHandler: () => alert("Enterprise AI Suite selected"),
          style: "bg-gradient-to-b from-blue-50 to-purple-50",
        },
      ],
    } = options;

    const section = document.createElement("section");
    section.className = "py-16 px-4";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Pricing Grid Container
    const pricingGrid = document.createElement("div");
    pricingGrid.className = "max-w-7xl mx-auto grid gap-8";
    pricingGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))"; // Adjusts based on available width

    pricingOptions.forEach((option) => {
      const card = document.createElement("div");
      card.className = `rounded-3xl p-8 ${option.style} relative overflow-hidden h-full flex flex-col`;

      // Badge
      if (option.badge) {
        const badge = document.createElement("span");
        badge.className = "absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full";
        badge.textContent = option.badge;
        card.appendChild(badge);
      }

      // Image
      const imageContainer = document.createElement("div");
      imageContainer.className = "flex justify-center mb-6";
      const image = document.createElement("img");
      image.src = option.imageSrc;
      image.alt = option.imageAlt;
      image.className = "w-16 h-16 bg-white rounded-2xl shadow-sm p-2";
      imageContainer.appendChild(image);
      card.appendChild(imageContainer);

      // Title and Subtitle
      const titleContainer = document.createElement("div");
      titleContainer.className = "text-center mb-8";
      const titleElem = document.createElement("h3");
      titleElem.className = "text-2xl font-bold mb-1";
      titleElem.textContent = option.title;

      const subtitleElem = document.createElement("p");
      subtitleElem.className = "text-gray-500 text-sm";
      subtitleElem.textContent = option.subtitle;

      titleContainer.appendChild(titleElem);
      titleContainer.appendChild(subtitleElem);
      card.appendChild(titleContainer);

      // Description
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 mb-4 text-center";
      descriptionElem.textContent = option.description;
      card.appendChild(descriptionElem);

      // Items List
      const itemList = document.createElement("ul");
      itemList.className = "space-y-2 mb-4";
      option.items.forEach((item) => {
        const itemElem = document.createElement("li");
        itemElem.className = "flex items-center gap-2";
        itemElem.innerHTML = `<i class="fas fa-check ${tickColor}"></i> <span>${item}</span>`;
        itemList.appendChild(itemElem);
      });
      card.appendChild(itemList);

      // Pre-Price Description
      if (option.prePriceDescription) {
        const prePriceDesc = document.createElement("p");
        prePriceDesc.className = "text-center text-sm text-gray-600 mb-2 italic";
        prePriceDesc.textContent = option.prePriceDescription;
        card.appendChild(prePriceDesc);
      }

      // Pricing
      const pricingContainer = document.createElement("div");
      pricingContainer.className = "text-center mb-4";
      const priceElem = document.createElement("span");
      priceElem.className = "text-4xl font-bold";
      priceElem.textContent = option.offerPrice;

      const originalPriceElem = option.originalPrice ? document.createElement("span") : null;
      if (originalPriceElem) {
        originalPriceElem.className = "text-2xl text-gray-400 line-through ml-3";
        originalPriceElem.textContent = option.originalPrice;
        pricingContainer.appendChild(originalPriceElem);
      }

      pricingContainer.appendChild(priceElem);
      card.appendChild(pricingContainer);

      // Post-Price Description
      if (option.postPriceDescription) {
        const postPriceDesc = document.createElement("p");
        postPriceDesc.className = "text-center text-sm text-gray-600 mb-4";
        postPriceDesc.textContent = option.postPriceDescription;
        card.appendChild(postPriceDesc);
      }

      // CTA Button
      const button = document.createElement("button");
      button.className = "w-full py-3 px-6 bg-purple-900 text-white rounded-xl hover:bg-purple-800 transition-colors";
      button.textContent = option.buttonText;
      button.addEventListener("click", option.buttonHandler);
      card.appendChild(button);

      pricingGrid.appendChild(card);
    });

    section.appendChild(pricingGrid);
    return section;
  }

  function createFAQQuick(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      iconClass = "fas fa-question-circle", // Default icon for all questions
      iconBgColor = "bg-purple-100", // Default background color for icon
      iconColor = "text-purple-900", // Default color for icon
      faqItems = [
        {
          question: "Is there a free version of SoftRex?",
          answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        },
        {
          question: "How to start this tool?",
          answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        },
        {
          question: "How to upgrade to ultimate pro?",
          answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        },
        {
          question: "What is the refund policy?",
          answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        },
        {
          question: "Set permissions and admin controls",
          answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        },
        {
          question: "How to Integrate with SoftRex?",
          answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        },
      ],
    } = options;

    // Create main section
    const section = document.createElement("section");
    section.className = "py-16 px-4 bg-gray-50";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // FAQ Grid
    const faqGrid = document.createElement("div");
    faqGrid.className = "max-w-7xl mx-auto grid md:grid-cols-2 gap-8";

    faqItems.forEach(({ question, answer }) => {
      const faqItem = document.createElement("div");
      faqItem.className = "flex gap-4";

      const iconContainer = document.createElement("div");
      iconContainer.className = `flex-shrink-0 w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`;

      const icon = document.createElement("i");
      icon.className = `${iconClass} ${iconColor} text-xl`;
      iconContainer.appendChild(icon);

      const textContainer = document.createElement("div");
      const questionElem = document.createElement("h3");
      questionElem.className = "text-xl font-semibold mb-2";
      questionElem.textContent = question;

      const answerElem = document.createElement("p");
      answerElem.className = "text-gray-600";
      answerElem.textContent = answer;

      textContainer.appendChild(questionElem);
      textContainer.appendChild(answerElem);

      faqItem.appendChild(iconContainer);
      faqItem.appendChild(textContainer);
      faqGrid.appendChild(faqItem);
    });

    section.appendChild(faqGrid);
    return section;
  }

  function createFAQCollapsed(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      faqs = [
        {
          question: "When will my access to the one-time offer benefits begin?",
          answer: "Your access will begin immediately after successful payment. You'll receive login credentials via email within 5 minutes of purchase.",
        },
        {
          question: "Is it possible to purchase only a part of the One Time Offer?",
          answer: "No, this is an exclusive bundled offer designed to provide comprehensive learning. Individual components cannot be purchased separately at this discounted rate.",
        },
        {
          question: "How long will I have access to the membership content?",
          answer: "You'll have lifetime access to all content included in this offer. Once purchased, you can access the materials at any time.",
        },
      ],
    } = options;

    // Create main section
    const section = document.createElement("section");
    section.className = "py-16 px-4";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // FAQ Container
    const faqContainer = document.createElement("div");
    faqContainer.className = "max-w-3xl mx-auto space-y-4";

    faqs.forEach(({ question, answer }) => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item bg-gray-50/50 rounded-lg";

      const toggleButton = document.createElement("button");
      toggleButton.className = "faq-toggle flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors";
      toggleButton.innerHTML = `
      <span class="font-medium">${question}</span>
      <svg class="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    `;

      const answerDiv = document.createElement("div");
      answerDiv.className = "faq-answer px-6 pb-4 text-gray-600 hidden";
      answerDiv.textContent = answer;

      faqItem.appendChild(toggleButton);
      faqItem.appendChild(answerDiv);
      faqContainer.appendChild(faqItem);
    });

    section.appendChild(faqContainer);

    // FAQ Toggle Logic
    faqContainer.addEventListener("click", function (event) {
      const toggle = event.target.closest(".faq-toggle");
      if (!toggle) return;

      const faqItem = toggle.closest(".faq-item");
      const answer = faqItem.querySelector(".faq-answer");
      const chevron = toggle.querySelector("svg");

      // Toggle the answer visibility
      answer.classList.toggle("hidden");

      // Rotate the chevron when open
      chevron.style.transform = answer.classList.contains("hidden") ? "rotate(0)" : "rotate(180deg)";

      // Close other FAQs if open
      faqContainer.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
        if (otherAnswer !== answer && !otherAnswer.classList.contains("hidden")) {
          otherAnswer.classList.add("hidden");
          otherAnswer.previousElementSibling.querySelector("svg").style.transform = "rotate(0)";
        }
      });
    });

    return section;
  }

  function createValuePropositionBlocks(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      blocks = [
        [
          { title: "$2M+", description: "AVERAGE CLIENT ROI", iconClass: "fas fa-dollar-sign", bgColor: "bg-purple-50", iconColor: "text-purple-900" },
          { title: "Secret insights", description: "FROM REAL CASE-STUDIES", iconClass: "fas fa-lightbulb", bgColor: "bg-purple-50", iconColor: "text-purple-900" },
        ],
        [
          {
            title: "Top companies hiring in this industry",
            description: "GET HIRED TO WORK FOR THESE GLOBAL GIANTS",
            icons: [
              { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Microsoft", alt: "Microsoft" },
              { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Adobe", alt: "Adobe" },
              { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Philips", alt: "Philips" },
              { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Intel", alt: "Intel" },
            ],
            bgColor: "bg-blue-50",
          },
        ],
        [
          { title: "Multiple projects", description: "LEARN BY DOING", iconClass: "fas fa-code", bgColor: "bg-purple-50", iconColor: "text-purple-900" },
          { title: "Live QnA sessions", description: "TALK WITH INDUSTRY MENTORS", iconClass: "fas fa-video", bgColor: "bg-purple-50", iconColor: "text-purple-900" },
        ],
      ],
    } = options;

    const section = document.createElement("section");
    section.className = "py-16 px-4";

    // Section Title
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Blocks Container
    const blocksContainer = document.createElement("div");
    blocksContainer.className = "max-w-7xl mx-auto grid lg:grid-cols-3 gap-6";

    blocks.forEach((column) => {
      const columnContainer = document.createElement("div");
      columnContainer.className = "space-y-6";

      column.forEach((block) => {
        const blockContainer = document.createElement("div");
        blockContainer.className = `${block.bgColor} rounded-2xl p-8 relative overflow-hidden`;

        const blockContent = document.createElement("div");
        blockContent.className = "relative z-10";

        const blockTitle = document.createElement("h3");
        blockTitle.className = "text-2xl font-bold mb-2";
        blockTitle.textContent = block.title;

        const blockDescription = document.createElement("p");
        blockDescription.className = "text-sm font-semibold uppercase tracking-wide text-gray-600";
        blockDescription.textContent = block.description;

        blockContent.appendChild(blockTitle);
        blockContent.appendChild(blockDescription);
        blockContainer.appendChild(blockContent);

        if (block.iconClass) {
          const iconContainer = document.createElement("div");
          iconContainer.className = "absolute right-4 top-1/2 -translate-y-1/2 opacity-10";
          const iconElem = document.createElement("i");
          iconElem.className = `${block.iconClass} text-8xl ${block.iconColor}`;
          iconContainer.appendChild(iconElem);
          blockContainer.appendChild(iconContainer);
        }

        if (block.icons) {
          const logoGrid = document.createElement("div");
          logoGrid.className = "grid grid-cols-2 gap-6 mt-8";
          block.icons.forEach((logo) => {
            const logoImg = document.createElement("img");
            logoImg.src = logo.src;
            logoImg.alt = logo.alt;
            logoImg.className = "h-8 object-contain";
            logoGrid.appendChild(logoImg);
          });
          blockContainer.appendChild(logoGrid);
        }

        columnContainer.appendChild(blockContainer);
      });

      blocksContainer.appendChild(columnContainer);
    });

    section.appendChild(blocksContainer);
    return section;
  }

  function createOfferOverviewWithCTA(options = {}) {
    const {
      sectionTag = "Limited Time Offer",
      title = "Here's Everything You're Investing In",
      subheading = null,
      description = null,
      originalPrice = "Rs 6,999.00",
      offerPrice = "Rs 2,540.00",
      features = [
        { iconClass: "fas fa-video", bgColor: "bg-purple-100", iconColor: "text-purple-900", title: "Live Sessions", description: "Interactive learning with industry experts" },
        { iconClass: "fas fa-certificate", bgColor: "bg-blue-100", iconColor: "text-blue-900", title: "Certification", description: "Industry-recognized credentials" },
        { iconClass: "fas fa-users", bgColor: "bg-purple-100", iconColor: "text-purple-900", title: "Community Access", description: "Network with peers and mentors" },
      ],
      ctaButtons = [
        {
          text: "Subscribe Now",
          onClick: () => console.log("Subscribed!"), // Default handler for Subscribe Now
          bgColor: "bg-purple-900",
          textColor: "text-white",
          hoverBgColor: "hover:bg-purple-800",
        },
        {
          text: "Skip Forever",
          onClick: () => alert("Skipped"), // Default handler for Skip Forever
          borderColor: "border-2 border-purple-900",
          textColor: "text-purple-900",
          hoverBgColor: "hover:bg-purple-50",
        },
      ],
    } = options;

    const section = document.createElement("section");
    section.className = "bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-4";

    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    // Section Title
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    container.appendChild(titleContainer);

    // Pricing Header
    const pricingHeader = document.createElement("div");
    pricingHeader.className = "text-center mb-12";

    const offerTitle = document.createElement("h1");
    offerTitle.className = "text-5xl lg:text-6xl font-bold mb-4 text-purple-900";
    offerTitle.textContent = "1000+ Sessions [Worth ₹1+ Lakh]";
    pricingHeader.appendChild(offerTitle);

    const offerDescription = document.createElement("p");
    offerDescription.className = "text-xl text-gray-600 max-w-3xl mx-auto font-medium";
    offerDescription.textContent = "Learn Directly from Global Experts in Marketing, Product, Design & AI";
    pricingHeader.appendChild(offerDescription);

    container.appendChild(pricingHeader);

    // Subscription Box
    const subscriptionBox = document.createElement("div");
    subscriptionBox.className = "max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg";

    const pricingDetails = document.createElement("div");
    pricingDetails.className = "flex flex-col lg:flex-row items-center justify-between gap-6";

    // Pricing Info
    const pricingInfo = document.createElement("div");
    pricingInfo.className = "text-center lg:text-left";

    const originalPriceElem = document.createElement("span");
    originalPriceElem.className = "text-gray-500 line-through text-lg";
    originalPriceElem.textContent = originalPrice;

    const offerPriceElem = document.createElement("span");
    offerPriceElem.className = "ml-2 text-2xl font-bold text-purple-900";
    offerPriceElem.textContent = offerPrice;

    pricingInfo.appendChild(originalPriceElem);
    pricingInfo.appendChild(offerPriceElem);
    pricingDetails.appendChild(pricingInfo);

    // CTA Buttons
    const ctaContainer = document.createElement("div");
    ctaContainer.className = "flex flex-col sm:flex-row gap-4";

    ctaButtons.forEach((button) => {
      const btn = document.createElement("button");
      btn.className = `px-6 py-3 ${button.bgColor || button.borderColor} ${button.textColor} rounded-md ${button.hoverBgColor} transition-colors whitespace-nowrap`;
      btn.textContent = button.text;
      btn.addEventListener("click", button.onClick); // Attach custom handler or default handler
      ctaContainer.appendChild(btn);
    });

    pricingDetails.appendChild(ctaContainer);
    subscriptionBox.appendChild(pricingDetails);
    container.appendChild(subscriptionBox);

    // Features Grid
    const featuresGrid = document.createElement("div");
    featuresGrid.className = "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6";

    features.forEach((feature) => {
      const featureCard = document.createElement("div");
      featureCard.className = "bg-white rounded-xl p-6 shadow-sm";

      const featureContainer = document.createElement("div");
      featureContainer.className = "flex items-center gap-4";

      const iconContainer = document.createElement("div");
      iconContainer.className = `w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`;

      const iconElem = document.createElement("i");
      iconElem.className = `${feature.iconClass} ${feature.iconColor}`;
      iconContainer.appendChild(iconElem);

      const featureText = document.createElement("div");
      const featureTitle = document.createElement("h3");
      featureTitle.className = "font-semibold text-lg";
      featureTitle.textContent = feature.title;

      const featureDescription = document.createElement("p");
      featureDescription.className = "text-gray-600";
      featureDescription.textContent = feature.description;

      featureText.appendChild(featureTitle);
      featureText.appendChild(featureDescription);
      featureContainer.appendChild(iconContainer);
      featureContainer.appendChild(featureText);

      featureCard.appendChild(featureContainer);
      featuresGrid.appendChild(featureCard);
    });

    container.appendChild(featuresGrid);
    section.appendChild(container);
    return section;
  }

  function createKeyOutcomes(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      outcomes = [
        "Implement AI-driven automation to reduce operational costs by up to 40%",
        "Develop custom machine learning models for precise business predictions",
        "Enhance customer experience through intelligent chatbots and recommendation systems",
        "Optimize supply chain efficiency using predictive analytics",
        "Implement data-driven decision making across all organizational levels",
        "Ensure AI compliance and ethical implementation of solutions",
        "Accelerate digital transformation with scalable AI infrastructure",
        "Provide comprehensive team training for AI tool adoption",
      ],
      checkmarkColor = "text-green-500",
      stats = {
        title: "500+ Enterprises",
        description: "have transformed their businesses with our AI solutions",
        logos: [
          { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Tech+Co", alt: "Technology Company" },
          { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Finance+", alt: "Financial Services" },
          { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Health", alt: "Healthcare" },
          { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Retail", alt: "Retail Giant" },
        ],
        benefits: ["Transform your business with cutting-edge AI solutions tailored to your industry", "Access our team of expert AI consultants and data scientists", "Join leading enterprises in achieving AI-driven digital transformation"],
      },
    } = options;

    // Create the main section
    const section = document.createElement("section");
    section.className = "py-16 px-4";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Outcomes and Stats Container
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12";

    // Outcomes Column
    const outcomesColumn = document.createElement("div");

    const outcomesTitle = document.createElement("h2");
    outcomesTitle.className = "text-3xl lg:text-4xl font-bold mb-6";
    outcomesTitle.textContent = "Key Outcomes";
    outcomesColumn.appendChild(outcomesTitle);

    const outcomesDescription = document.createElement("p");
    outcomesDescription.className = "text-gray-600 text-lg mb-8";
    outcomesDescription.textContent = description;
    outcomesColumn.appendChild(outcomesDescription);

    const outcomesList = document.createElement("ul");
    outcomesList.className = "space-y-4";

    outcomes.forEach((outcome) => {
      const outcomeItem = document.createElement("li");
      outcomeItem.className = "flex items-start space-x-3";

      const checkIcon = document.createElement("i");
      checkIcon.className = `fas fa-check ${checkmarkColor} mt-1.5`;

      const outcomeText = document.createElement("span");
      outcomeText.className = "text-gray-600";
      outcomeText.textContent = outcome;

      outcomeItem.appendChild(checkIcon);
      outcomeItem.appendChild(outcomeText);
      outcomesList.appendChild(outcomeItem);
    });

    outcomesColumn.appendChild(outcomesList);
    container.appendChild(outcomesColumn);

    // Stats Column
    const statsColumn = document.createElement("div");
    statsColumn.className = "mt-12 lg:mt-0";

    const statsCard = document.createElement("div");
    statsCard.className = "bg-white rounded-2xl p-8 shadow-sm";

    const statsTitle = document.createElement("h3");
    statsTitle.className = "text-2xl font-bold mb-2";
    statsTitle.textContent = stats.title;
    statsCard.appendChild(statsTitle);

    const statsDescription = document.createElement("p");
    statsDescription.className = "text-gray-600 mb-8";
    statsDescription.textContent = stats.description;
    statsCard.appendChild(statsDescription);

    // Logos Grid
    const logosGrid = document.createElement("div");
    logosGrid.className = "grid grid-cols-4 gap-4 mb-8";
    stats.logos.forEach((logo) => {
      const logoImg = document.createElement("img");
      logoImg.src = logo.src;
      logoImg.alt = logo.alt;
      logoImg.className = "rounded-lg";
      logosGrid.appendChild(logoImg);
    });
    statsCard.appendChild(logosGrid);

    // Benefits List
    const benefitsList = document.createElement("div");
    benefitsList.className = "space-y-6";
    stats.benefits.forEach((benefit) => {
      const benefitItem = document.createElement("div");
      benefitItem.className = "flex items-start space-x-3";

      const benefitCheckIcon = document.createElement("i");
      benefitCheckIcon.className = `fas fa-check ${checkmarkColor} mt-1`;

      const benefitText = document.createElement("p");
      benefitText.className = "text-gray-600";
      benefitText.textContent = benefit;

      benefitItem.appendChild(benefitCheckIcon);
      benefitItem.appendChild(benefitText);
      benefitsList.appendChild(benefitItem);
    });

    statsCard.appendChild(benefitsList);

    // Badges
    const badgesContainer = document.createElement("div");
    badgesContainer.className = "flex items-center space-x-4 mt-8";
    const badgeImg1 = document.createElement("img");
    badgeImg1.src = "https://dummyimage.com/120x40/4c1d95/ffffff&text=YourSITE";
    badgeImg1.alt = "YourSITE Logo";
    badgeImg1.className = "h-10";
    badgesContainer.appendChild(badgeImg1);

    const badgeImg2 = document.createElement("img");
    badgeImg2.src = "https://dummyimage.com/160x40/4c1d95/ffffff&text=AI+Leaders+2024";
    badgeImg2.alt = "AI Leaders 2024";
    badgeImg2.className = "h-10";
    badgesContainer.appendChild(badgeImg2);

    statsCard.appendChild(badgesContainer);
    statsColumn.appendChild(statsCard);
    container.appendChild(statsColumn);

    section.appendChild(container);
    return section;
  }

  function createFeatureHighlights(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = null,
      description = null,
      features = [
        {
          title: "Modern Workspace",
          subheading: null,
          description: "Our state-of-the-art offices are designed to inspire creativity and facilitate collaboration, with flexible spaces for both focused work and team interactions.",
          imageUrl: "https://dummyimage.com/800x600/4c1d95/ffffff&text=Modern+Workspace",
          imageAlt: "Modern Workspace",
          highlights: ["Ergonomic workstations", "Collaborative spaces", "Recreation areas"],
        },
        {
          title: "Growth & Development",
          subheading: null,
          description: "We invest in our team's professional development through continuous learning programs, mentorship opportunities, and career advancement paths.",
          imageUrl: "https://dummyimage.com/800x600/4c1d95/ffffff&text=Growth+Opportunities",
          imageAlt: "Growth Opportunities",
          highlights: ["Learning & development budget", "Mentorship programs", "Career progression framework"],
        },
      ],
    } = options;

    // Create the main section
    const section = document.createElement("section");
    section.className = "py-16 px-4";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Feature Items Container
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    features.forEach((feature, index) => {
      const isReversed = index % 2 !== 0; // Alternate layout for each feature item

      // Feature Item Container
      const featureContainer = document.createElement("div");
      featureContainer.className = `lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16 ${isReversed ? "lg:flex-row-reverse" : ""}`;

      // Image Container
      const imageContainer = document.createElement("div");
      imageContainer.className = "rounded-xl overflow-hidden mb-8 lg:mb-0";
      const imageElem = document.createElement("img");
      imageElem.src = feature.imageUrl;
      imageElem.alt = feature.imageAlt;
      imageElem.className = "w-full h-full object-cover";
      imageContainer.appendChild(imageElem);

      // Content Container
      const contentContainer = document.createElement("div");
      contentContainer.className = isReversed ? "lg:pr-8" : "lg:pl-8";

      if (feature.title) {
        const featureTitle = document.createElement("h3");
        featureTitle.className = "text-2xl lg:text-3xl font-bold mb-4";
        featureTitle.textContent = feature.title;
        contentContainer.appendChild(featureTitle);
      }

      if (feature.subheading) {
        const featureSubheading = document.createElement("h4");
        featureSubheading.className = "text-xl font-semibold mb-2";
        featureSubheading.textContent = feature.subheading;
        contentContainer.appendChild(featureSubheading);
      }

      if (feature.description) {
        const featureDescription = document.createElement("p");
        featureDescription.className = "text-gray-600 text-lg mb-6";
        featureDescription.textContent = feature.description;
        contentContainer.appendChild(featureDescription);
      }

      const highlightsList = document.createElement("ul");
      highlightsList.className = "space-y-3";

      feature.highlights.forEach((highlight) => {
        const highlightItem = document.createElement("li");
        highlightItem.className = "flex items-center space-x-3";

        const checkIcon = document.createElement("i");
        checkIcon.className = "fas fa-check text-green-500";

        const highlightText = document.createElement("span");
        highlightText.className = "text-gray-600";
        highlightText.textContent = highlight;

        highlightItem.appendChild(checkIcon);
        highlightItem.appendChild(highlightText);
        highlightsList.appendChild(highlightItem);
      });

      contentContainer.appendChild(highlightsList);

      // Append Image and Content based on layout order
      if (isReversed) {
        featureContainer.appendChild(contentContainer);
        featureContainer.appendChild(imageContainer);
      } else {
        featureContainer.appendChild(imageContainer);
        featureContainer.appendChild(contentContainer);
      }

      container.appendChild(featureContainer);
    });

    section.appendChild(container);
    return section;
  }

  function createFeatureChecklist(options = {}) {
    const { title = "This Is A Reusable Section Header", subheading = "Feel Free to Make this subheading your Heading for the section", description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.", checklistItems = ["Something that's pretty interesting", "Something that's super-cool", "Whoa, that's like the sickest thing I've ever heard"] } = options;

    // Create the main section
    const section = document.createElement("section");
    section.className = "py-16 px-4 bg-slate-50/50";

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Checklist Items Grid
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto grid md:grid-cols-3 gap-8";

    checklistItems.forEach((item) => {
      const checklistItem = document.createElement("div");
      checklistItem.className = "flex items-center space-x-4 p-6 rounded-xl bg-white shadow-sm";

      const iconContainer = document.createElement("div");
      iconContainer.className = "flex-shrink-0";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "w-6 h-6 rounded border-2 border-blue-500 flex items-center justify-center";

      const icon = document.createElement("i");
      icon.className = "fas fa-check text-blue-500 text-sm";

      iconWrapper.appendChild(icon);
      iconContainer.appendChild(iconWrapper);

      const textElem = document.createElement("p");
      textElem.className = "text-gray-600";
      textElem.textContent = item;

      checklistItem.appendChild(iconContainer);
      checklistItem.appendChild(textElem);
      container.appendChild(checklistItem);
    });

    section.appendChild(container);
    return section;
  }

  return {
    createNavigation,
    createHero,
    createLeadCapture,
    createFeatureChecklist,
    createFeatureHighlights,
    createKeyOutcomes,
    createOfferOverviewWithCTA,
    createValuePropositionBlocks,
    createFAQCollapsed,
    createFAQQuick,
    createPricing,
    createSocialProof,
    createFooter,
  };
})();
